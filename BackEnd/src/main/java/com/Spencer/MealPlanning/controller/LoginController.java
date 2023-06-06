package com.spencer.mealplanning.controller;

import com.spencer.mealplanning.entity.User;
import com.spencer.mealplanning.service.UserService;
import com.spencer.mealplanning.utility.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping("/api/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return Response.of(userService.login(user));
    }
}
