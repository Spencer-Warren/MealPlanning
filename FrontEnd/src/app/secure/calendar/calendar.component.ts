import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Meal } from 'src/app/modles/Meal';
import { RESTAPIService } from 'src/app/service/restapi.service';
import { MealEvent } from 'src/app/modles/Event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {


  constructor(private api: RESTAPIService) {}


  view: CalendarView = CalendarView.Month;

  viewDate = new Date();

  meals: Array<Meal> = new Array<Meal>();

  activeDayIsOpen = true;

  events: CalendarEvent[] = [];

  externalEvents: CalendarEvent[] = [];

  refresh = new Subject<void>();

  actions: CalendarEventAction[] = [
    {
      label: '+',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        let tempDate: Date = event.end == null ? event.start : event.end;
        event.end = addDays(tempDate, 1);
        this.events = [...this.events];
      },
    }
  ];

  ngOnInit(): void {
    this.api.getMeals().subscribe((data: any) => {
      this.meals = data.body;
      this.meals.forEach((meal) => 
        this.externalEvents.push(new MealEvent(new Date(), new Date(), this.actions, meal))
      )
      this.refresh.next();
    });
  }

  eventDropped({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    // if we found the event in the array, update it
    let found = false;
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        found = true;
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    if (found) return;
    
    // if we didn't find the event in the array, add it
    this.events.push(event);
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    this.viewDate = newStart;
    this.activeDayIsOpen = true;
    this.events = [...this.events]; 
  }

  handleEvent(action: string, event: CalendarEvent): void {
    
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } 
      else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}