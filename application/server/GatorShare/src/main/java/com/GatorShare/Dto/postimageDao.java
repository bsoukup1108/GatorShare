package com.GatorShare.Dto;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;


@Service
public class postimageDao {

    @PersistenceContext
    public EntityManager em;

    @Transactional
    public void createImage(MultipartFile file, String email) {
        TypedQuery<User> query = em.createQuery("SELECT u FROM User u WHERE u.email = :email", User.class);
        query.setParameter("email", email);
        User client = query.getResultList().get(0);

        Long userId =client.getID();

        String filename = file.getOriginalFilename();




        postImage image = new postImage();
        image.setName(filename);
        image.setUserId(userId);
        image.setDateCreated(LocalDateTime.now());
        em.persist(image);
    }




}
