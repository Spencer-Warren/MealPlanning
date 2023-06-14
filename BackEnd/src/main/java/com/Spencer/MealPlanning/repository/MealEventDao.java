package com.spencer.mealplanning.repository;

import com.spencer.mealplanning.entity.MealEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealEventDao extends JpaRepository<MealEvent, Integer> {
}
