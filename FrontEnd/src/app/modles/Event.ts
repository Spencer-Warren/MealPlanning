import { CalendarEvent, CalendarEventAction } from "angular-calendar";
import { Meal } from "./Meal";
import { EventAction } from "calendar-utils";

export class MealEvent implements CalendarEvent {
    start: Date;
    end: Date;
    title: string;
    allDay?: boolean | undefined;
    resizable?: { beforeStart?: boolean | undefined; afterEnd?: boolean | undefined; } | undefined;
    draggable?: boolean | undefined;
    actions?: CalendarEventAction[] | undefined;
    meal: Meal;

    constructor(start: Date, end: Date, actions: CalendarEventAction[] | undefined, meal: Meal) {
        this.start = start;
        this.end = end;
        this.title = meal.mealName;
        this.allDay = true;
        this.resizable =  {
            beforeStart: true,
            afterEnd: true,
          }
        this.draggable = true;
        this.actions = actions;
        this.meal = meal;
    }
}