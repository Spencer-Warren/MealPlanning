package com.spencer.mealplanning.controller;

import com.spencer.mealplanning.entity.User;
import com.spencer.mealplanning.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PutMapping("")
    public ResponseEntity<String> updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("")
    public ResponseEntity<String> deleteUser(@RequestBody User user) {
        return userService.deleteUser(user);
    }
}
