package com.spencer.mealplanning.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

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
    private String mealCategory;

    private String mealCookTime;
    @Column(columnDefinition="TEXT")
    private String mealDescription;
    @Column(columnDefinition="TEXT")
    private String mealIngredients;
    @Column(columnDefinition="TEXT")
    private String mealSteps;

    @Column(length = 1024)
    private String mealLink;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "userID")
    private User user;
}
