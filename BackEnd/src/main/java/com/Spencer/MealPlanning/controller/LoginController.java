package com.spencer.mealplanning.controller;

import com.spencer.mealplanning.entity.User;
import com.spencer.mealplanning.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin // allow cross origin requests from the frontend
public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping("/api/login")
    public User login(@RequestBody User user) {
        return userService.login(user);
    }

    @PostMapping("/api/register")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
