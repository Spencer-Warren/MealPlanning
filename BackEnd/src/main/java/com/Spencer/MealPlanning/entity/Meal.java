package com.spencer.mealplanning.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mealID;
    private String mealName;
    private String mealCuisine;

    private String mealCookTime;
    private String mealPrepTime;
    @Column(columnDefinition="TEXT")
    private String mealDescription;
    @Column(columnDefinition="TEXT")
    private String mealIngredients;
    @Column(columnDefinition="TEXT")
    private String mealSteps;

    @Column(length = 1024)
    private String mealLink;

    @JsonIgnore
    @OneToMany(orphanRemoval = true)
    @JoinColumn(name="mealID")
    private List<MealEvent> mealEvents;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "userID")
    private User user;
}
