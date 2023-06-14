package com.spencer.mealplanning.controller;

import com.spencer.mealplanning.entity.MealEvent;
import com.spencer.mealplanning.service.MealEventService;
import jdk.jfr.BooleanFlag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/mealEvent")
public class MealEventController {
    @Autowired
    private MealEventService service;

    @PostMapping("")
    MealEvent createMealEvent(@RequestBody MealEvent event) {
        return service.saveMealEvent(event);
    }

    @PutMapping("")
    ResponseEntity<String> updateMealEvent(@RequestBody MealEvent event) {
        return service.updateMealEvent(event);
    }

    @GetMapping("/user/{userID}")
    List<MealEvent> getMealEventByUser(@PathVariable int userID) {
        return service.findByUser(userID);
    }

    @DeleteMapping("")
    ResponseEntity<String> deleteMealEvent(@RequestBody MealEvent event) {
        return service.deleteMealEvent(event);
    }
}
