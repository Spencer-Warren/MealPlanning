export class Meal {
    mealID: number;
    mealName: string;
    mealCategory: string;
    mealCookTime: string;
    mealDescription: string;
    mealIngredients: string;
    mealSteps: string;
    mealLink: string;

    constructor(mealID: number, mealName: string, mealCategory: string, mealCookTime: string, mealDescription: string, mealIngredients: string, mealSteps: string, mealLink: string) {
        this.mealID = mealID;
        this.mealName = mealName;
        this.mealCategory = mealCategory;
        this.mealCookTime = mealCookTime;
        this.mealDescription = mealDescription;
        this.mealIngredients = mealIngredients;
        this.mealSteps = mealSteps;
        this.mealLink = mealLink;
    }
}