package com.spencer.mealplanning.controller;

import com.spencer.mealplanning.entity.Meal;
import com.spencer.mealplanning.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/meal")
public class MealController {
    @Autowired
    private MealService mealService;

    @PostMapping("")
    public void saveMeal(@RequestBody Meal meal) {
        mealService.saveMeal(meal);
    }

    @PutMapping("")
    public void updateMeal(@RequestBody Meal meal) {
        mealService.updateMeal(meal);
    }

    @DeleteMapping("")
    public void deleteMeal(@RequestBody Meal meal) {
        mealService.deleteMeal(meal);
    }

    @GetMapping("/{id}")
    public Meal getMealById(@PathVariable int id) {
        return mealService.findByMealID(id);
    }

    @GetMapping("/user/{id}")
    public List<Meal> getAllMeals(@PathVariable int id) {
        return mealService.findAllByUser(id);
    }
}
