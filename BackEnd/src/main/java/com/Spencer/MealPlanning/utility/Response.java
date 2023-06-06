package com.spencer.mealplanning.utility;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Response {

    Response() {
        throw new IllegalStateException("Utility class");
    }

    public static <T> ResponseEntity<T> of(T body, HttpStatus status) {
        if (body instanceof String response) {
            response = "{\"message\":\"" + response + "\"}";
            return ResponseEntity.status(status).body((T) response);
        }
        return ResponseEntity.status(status).body(body);
    }

    public static <T> ResponseEntity<T> of(T body) {
        return of(body, HttpStatus.OK);
    }
}
