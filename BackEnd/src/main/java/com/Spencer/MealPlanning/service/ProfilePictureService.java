package com.spencer.mealplanning.service;

import com.spencer.mealplanning.entity.ProfilePicture;
import com.spencer.mealplanning.utility.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface ProfilePictureService {
    ResponseEntity<String> saveProfilePicture(MultipartFile profilePicture, int userID);
    ResponseEntity<String> updateProfilePicture(MultipartFile profilePicture, int userID);
    ResponseEntity<String> deleteProfilePictureByUser(int userID);
    ProfilePicture findByUser(int userID);
}

