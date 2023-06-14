package com.spencer.mealplanning.service;

import com.spencer.mealplanning.entity.Meal;
import com.spencer.mealplanning.entity.MealEvent;
import com.spencer.mealplanning.repository.MealEventDao;
import com.spencer.mealplanning.utility.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealEventServiceImpl implements MealEventService {
    @Autowired
    private MealEventDao dao;

    @Autowired
    private MealService mealService;


    @Override
    public MealEvent saveMealEvent(MealEvent event) {
        return dao.save(event);
    }

    @Override
    public ResponseEntity<String> updateMealEvent(MealEvent event) {
        if (dao.existsById(event.getMealEventID())) {
            MealEvent temp = dao.findById(event.getMealEventID()).get();
            temp.setStart(event.getStart());
            temp.setEnd(event.getEnd());
            dao.save(temp);
            return Response.of("Updated meal with id: " + event.getMealEventID());
        }
        return Response.of("Did not find event");
    }

    @Override
    public ResponseEntity<String> deleteMealEvent(MealEvent event) {
        if (dao.existsById(event.getMealEventID())) {
            dao.deleteById(event.getMealEventID());
            return Response.of("Deleted event with id: " +  event.getMealEventID());
        }
        return Response.of("Did not find event");
    }

    @Override
    public List<MealEvent> findByUser(int userID) {
        List<Meal> meals = mealService.findAllByUser(userID);
        List<MealEvent> events = meals.stream()
                .flatMap(meal -> meal.getMealEvents().stream())
                .toList();
        return events;
    }
}
