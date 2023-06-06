package com.spencer.mealplanning.repository;

import com.spencer.mealplanning.entity.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealDao extends JpaRepository<Meal, Integer> {
    @Query("SELECT m FROM Meal m WHERE m.user.userID = ?1")
    List<Meal> findAllByUser_UserID(int userID);
}
