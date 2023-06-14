package com.spencer.mealplanning.service;

import com.spencer.mealplanning.entity.MealEvent;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MealEventService {
    MealEvent saveMealEvent(MealEvent event);
    ResponseEntity<String> updateMealEvent(MealEvent event);
    ResponseEntity<String> deleteMealEvent(MealEvent event);
    List<MealEvent> findByUser(int userID);
}
