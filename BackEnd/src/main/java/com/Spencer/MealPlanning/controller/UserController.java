package com.spencer.mealplanning.controller;

import com.spencer.mealplanning.entity.User;
import com.spencer.mealplanning.service.UserService;
import com.spencer.mealplanning.utility.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        return Response.of(userService.saveUser(user));
    }

    @PutMapping("/user")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        return Response.of(userService.updateUser(user));
    }

    @DeleteMapping("/user")
    public ResponseEntity<?> deleteUser(@RequestBody User user) {
        return Response.of(userService.deleteUser(user));
    }
}
