package com.spencer.mealplanning.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MealEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mealEventID;
    private String start;
    private String end;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "mealID")
    private Meal meal;
}
