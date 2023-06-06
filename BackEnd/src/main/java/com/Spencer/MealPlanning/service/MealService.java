package com.spencer.mealplanning.service;

import com.spencer.mealplanning.entity.Meal;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MealService {
    Meal saveMeal(Meal meal);
    Meal findByMealID(int mealID);
    ResponseEntity<String> updateMeal(Meal meal);
    ResponseEntity<String> deleteMeal(Meal meal);
    List<Meal> findAllByUser(int userID);
}
