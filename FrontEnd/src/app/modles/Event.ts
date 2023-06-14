import { CalendarEvent, CalendarEventAction } from "angular-calendar";
import { Meal } from "./Meal";

export class MealEvent implements CalendarEvent {
    mealEventID: number;
    start: Date;
    end: Date;
    title: string;
    allDay?: boolean | undefined;
    resizable?: { beforeStart?: boolean | undefined; afterEnd?: boolean | undefined; } | undefined;
    draggable?: boolean | undefined;
    actions?: CalendarEventAction[] | undefined;
    meal: Meal;

    constructor(start: Date, end: Date, actions: CalendarEventAction[] | undefined, meal: Meal, mealEventID?: number) {
        this.mealEventID = mealEventID == null ? -1 : mealEventID;
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

    static fromMealEvent(mealEvent: MealEvent): MealEvent {
        return new MealEvent(mealEvent.start, mealEvent.end, mealEvent.actions, mealEvent.meal);
    }

    static fromPersistedEvent(event: any, actions: CalendarEventAction[]): MealEvent {
        return new MealEvent(new Date(event.start), new Date(event.end), actions, event.meal, event.mealEventID);
    }
}