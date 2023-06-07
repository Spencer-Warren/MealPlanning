package com.spencer.mealplanning;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.spencer.mealplanning")
public class MealPlanningApplication {

	public static void main(String[] args) {
		SpringApplication.run(MealPlanningApplication.class, args);
	}

}
