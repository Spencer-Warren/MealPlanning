package com.spencer.mealplanning.service;

import com.spencer.mealplanning.entity.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    User saveUser(User user);
    User findByUsername(String username);
    User findByID(int userID);
    ResponseEntity<String> updateUser(User user);
    ResponseEntity<String> deleteUser(User user);
    User login(User user);

}
