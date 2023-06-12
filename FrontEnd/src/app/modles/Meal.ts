export class Meal {
    mealID: number;
    mealName: string;
    mealCuisine: string;
    mealCookTime: string;
    mealPrepTime: string;
    mealDescription: string;
    mealIngredients: string;
    mealSteps: string;
    mealLink: string;

    constructor(mealID: number, mealName: string, mealCuisine: string, mealCookTime: string, mealPrepTime: string, mealDescription: string, mealIngredients: string, mealSteps: string, mealLink: string) {
        this.mealID = mealID;
        this.mealName = mealName;
        this.mealCuisine = mealCuisine;
        this.mealCookTime = mealCookTime;
        this.mealPrepTime = mealPrepTime;
        this.mealDescription = mealDescription;
        this.mealIngredients = mealIngredients;
        this.mealSteps = mealSteps;
        this.mealLink = mealLink;
    }
}