package com.spencer.mealplanning.repository;

import com.spencer.mealplanning.entity.ProfilePicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProfilePictureDao extends JpaRepository<ProfilePicture, Integer> {
    @Query("SELECT p FROM ProfilePicture p WHERE p.userID = ?1")
    Optional<ProfilePicture> findByUserID(int userID);
    @Modifying
    @Query("DELETE FROM ProfilePicture p WHERE p.userID = ?1")
    void deleteByUserID(int userID);
}
