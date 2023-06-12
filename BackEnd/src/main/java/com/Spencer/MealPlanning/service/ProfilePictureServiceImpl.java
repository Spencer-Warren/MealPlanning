package com.spencer.mealplanning.service;

import com.spencer.mealplanning.entity.ProfilePicture;
import com.spencer.mealplanning.repository.ProfilePictureDao;
import com.spencer.mealplanning.utility.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ProfilePictureServiceImpl implements ProfilePictureService {

    @Autowired
    ProfilePictureDao dao;

    @Override
    public ResponseEntity<String> saveProfilePicture(MultipartFile profilePicture, int userID) {
        if (dao.findByUserID(userID).isPresent()) {
            return this.updateProfilePicture(profilePicture, userID);
        }
        dao.save(new ProfilePicture(profilePicture, userID));
        return Response.of("Created Profile Picture for User with ID: " + userID);
    }

    @Override
    public ResponseEntity<String> updateProfilePicture(MultipartFile profilePicture, int userID) {
        ProfilePicture originalProfilePicture = dao.findByUserID(userID).get();
        originalProfilePicture.of(profilePicture);
        dao.save(originalProfilePicture);
        return Response.of("Updated Profile Picture for User with ID: " + userID);
    }

    @Override
    public ResponseEntity<String> deleteProfilePictureByUser(int userID) {
        dao.deleteByUserID(userID);
        return Response.of("Deleted Profile Picture for User with ID: " + userID);
    }

    @Override
    public ProfilePicture findByUser(int userID) {
        return dao.findByUserID(userID).get();
    }
}
