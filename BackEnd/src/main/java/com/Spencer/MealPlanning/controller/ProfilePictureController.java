package com.spencer.mealplanning.controller;

import com.spencer.mealplanning.entity.ProfilePicture;
import com.spencer.mealplanning.service.ProfilePictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
@RequestMapping("/api/profile")
public class ProfilePictureController {
    @Autowired
    ProfilePictureService service;

    @PostMapping("/{userID}")
    public ResponseEntity<String> newProfilePicture(@RequestParam("file")MultipartFile file, @PathVariable int userID) {
        return service.saveProfilePicture(file, userID);
    }

    @DeleteMapping("/{userID}")
    public ResponseEntity<String> deleteProfilePicture(@PathVariable int userID) {
        return service.deleteProfilePictureByUser(userID);
    }

    @GetMapping("/{userID}")
    public ResponseEntity<byte[]> getProfilePicture(@PathVariable int userID) {
        ProfilePicture picture =  service.findByUser(userID);
        MediaType type = MediaType.valueOf(picture.getFileType());

        return ResponseEntity.ok()
                .contentType(type)
                .header("Cotent-Disposition", "filename=\"" + picture.getFileName() + "\"")
                .body(picture.getFileData());
    }
}
