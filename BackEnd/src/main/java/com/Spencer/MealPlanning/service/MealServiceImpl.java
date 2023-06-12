package com.spencer.mealplanning.service;

import com.spencer.mealplanning.entity.Meal;
import com.spencer.mealplanning.repository.MealDao;
import com.spencer.mealplanning.utility.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealServiceImpl implements MealService{

    @Autowired
    private MealDao dao;

    @Override
    public Meal saveMeal(Meal meal) {
        return dao.save(meal);
    }

    @Override
    public Meal findByMealID(int mealID) {
        return dao.findById(mealID).get();
    }

    @Override
    public ResponseEntity<String> updateMeal(Meal meal) {
        dao.findById(meal.getMealID())
                .ifPresent(
                u -> {
                    u.setMealName(meal.getMealName());
                    u.setMealDescription(meal.getMealDescription());
                    u.setMealCuisine(meal.getMealCuisine());
                    u.setMealIngredients(meal.getMealIngredients());
                    u.setMealSteps(meal.getMealSteps());
                    u.setMealCookTime(meal.getMealCookTime());
                    u.setMealLink(meal.getMealLink());
                    dao.save(u);
                }
        );
        return Response.of("Meal with ID:" + meal.getMealID() + " does not exist.");
    }

    @Override
    public ResponseEntity<String> deleteMeal(Meal meal) {
        if (dao.existsById(meal.getMealID())) {
            dao.deleteById(meal.getMealID());
            return Response.of("Deleted Meal with ID:" + meal.getMealID());
        }
        else {
            return Response.of("Meal with ID:" + meal.getMealID() + " does not exist.");
        }
    }

    @Override
    public List<Meal> findAllByUser(int userID) {
        return dao.findAllByUser(userID);
    }
}
