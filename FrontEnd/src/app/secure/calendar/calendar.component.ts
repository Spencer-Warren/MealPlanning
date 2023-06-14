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
import { Router } from '@angular/router';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {


  constructor(private api: RESTAPIService, private router: Router) {}

  // Calendar View Permenantly set to Month
  view: CalendarView = CalendarView.Month;
  // Calendar View Date
  // This is the date that is displayed on the calendar
  viewDate = new Date();
  // Stores the meals that are available to be added to the calendar
  meals: Array<Meal> = new Array<Meal>();
  // Is the viewDate open
  activeDayIsOpen = false;
  // Calendar Events
  events: CalendarEvent[] = [];
  // External Events
  externalEvents: CalendarEvent[] = [];

  refresh = new Subject<void>();

  // Actions that can be performed on a calendar event
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa-solid fa-plus"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        let tempDate: Date = event.end == null ? event.start : event.end;
        event.end = addDays(tempDate, 1);
        this.updateEvent(event);
        this.events = [...this.events];
      },
    },
    {
      label: '<i class="fa-solid fa-minus"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        let tempDate: Date = event.end == null ? event.start : event.end;
        if (event.start >= tempDate) return;
        event.end = addDays(tempDate, -1);
        this.updateEvent(event);
        this.events = [...this.events];
      },
    },
    {
      label: '<i class="fa-solid fa-trash"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.deleteEvent(event);
        this.activeDayIsOpen = false;
        this.refresh.next();
      },
    },
    {
      label: '<i class="fa-solid fa-book"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        let meal: Meal = (event as MealEvent).meal;
        sessionStorage.setItem('selectedmeal', JSON.stringify(meal));
        this.router.navigate(['/view-meal']);
      },
    }
  ];

  ngOnInit(): void {
    // Get all the meals from the database
    this.api.getMeals().subscribe((data: any) => {
      this.meals = data.body;
      this.meals.forEach((meal) =>
        this.externalEvents.push(new MealEvent(new Date(), new Date(), this.actions, meal))
    
      )
      this.refresh.next();
    });
    // Get all the events from the database
    this.api.getMealEvents().subscribe((data: any) => {
      for(let i = 0; i < data.body.length; i++) {
        // Create a meal event from the data
        // Done this way to ensure the actions are included
        // and to convert the dates from strings to Date objects
        let mealEvent: MealEvent = MealEvent.fromPersistedEvent(data.body[i], this.actions);
        console.log(mealEvent);
        this.events.push(mealEvent);
      }
      this.refresh.next();
    });
  }

  // Called when a meal is dragged from the external events
  // or when a meal is dragged from one day to another
  eventDropped({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    // If the event is already on the calender, update it
    this.activeDayIsOpen = false;
    let found = false;
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        found = true;
        event.start = newStart;
        event.end = newEnd;
      }
      return iEvent;
    });
    if (found) {
      // Persist updated event to the database
      this.updateEvent(event);
      this.updateViewDate(newStart);
      return;
    }
    
    // If the event is not on the calendar, create it
    // Done this way to ensure object references are maintained
    let mealEvent: MealEvent = MealEvent.fromMealEvent(event as MealEvent);
    this.events.push(mealEvent);
    mealEvent.start = newStart;
    mealEvent.end = newStart;
    // Persist new event to the database
    this.createEvent(mealEvent);
    this.updateViewDate(newStart);
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

  updateViewDate(date: Date) {
    this.viewDate = date;
    this.activeDayIsOpen = true;
    this.events = [...this.events];
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  createEvent(event: MealEvent) {
    this.api.createMealEvent(event).subscribe((data: any) => {
      event.mealEventID = data.body.mealEventID;
    });
  }

  updateEvent(event: CalendarEvent) {
    this.api.updateMealEvent(event as MealEvent).subscribe((data: any) => {console.log(data)});
  }

  deleteEvent(event: CalendarEvent) {
    this.api.deleteMealEvent(event as MealEvent).subscribe((data: any) => {console.log(data)});
  }


}
