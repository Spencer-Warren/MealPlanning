package com.spencer.mealplanning.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProfilePicture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int profilePictureID;
    @Column(columnDefinition = "MEDIUMBLOB")
    private byte[] fileData;
    private String fileName;
    private String fileType;
    private int userID;

    public ProfilePicture(MultipartFile file, int userID) {
        try {
            this.fileData = file.getBytes();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        this.fileName = file.getOriginalFilename();
        this.fileType = file.getContentType();
        this.userID = userID;
    }

    public ProfilePicture of(MultipartFile file) {
        try {
            this.fileData = file.getBytes();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        this.fileType = file.getContentType();
        this.fileName = file.getOriginalFilename();
        return this;
    }
}
