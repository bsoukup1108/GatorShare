package com.GatorShare.Service;

import com.GatorShare.Dto.Post;
import com.GatorShare.Dto.User;
import com.GatorShare.Repo.UserRepository;
import com.GatorShare.Repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.ByteArrayOutputStream;


import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@Service
public class postService implements PostServiceInterface{

    private PostRepo postrepo;

    public postService(PostRepo postrepo){
        this.postrepo = postrepo;
    }
    @Autowired
    private UserRepository userRepository;


    public void store(MultipartFile file, String Title, String description, Integer photo_like, String tag) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        Post newPost = new Post();
        String PostName = file.getOriginalFilename();
        String postContnenttypr = file.getContentType();


        if(PostName.contains("..")){
            System.out.println("post is not valid");
        }
        try {
            newPost.setContent(postContnenttypr);
        } catch (Exception e){
            e.printStackTrace();
        }

        Date date = new Date();

        newPost.setCreatedDate(date);
        newPost.setDescription(description);
        newPost.SetTitle(Title);
        newPost.setPicByte(compressBytes(file.getBytes()));
        newPost.setTag(tag);
        newPost.setPhoto_Like(photo_like);
        postrepo.save(newPost);
    }

    public static byte[] compressBytes(byte[] data) {

        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();

    }
    public static byte[] decompressBytes(byte[] data) {

        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();

    }



    @Override
    public List<Post> searchPosts(String query){
        List<Post> posts = postrepo.searchPosts(query);
        return posts;
    }



    public Post getPost(Integer id) {
        return postrepo.findById(id).get();
    }

    public List<Post> getAllPosts() {
        return postrepo.findAll();
    }

    public void ChangePostTitle(Integer id, String NewTitile){
        Post newTi = new Post();
        newTi = postrepo.findById(id).get();
        newTi.SetTitle(NewTitile);
        postrepo.save(newTi);
    }

    public void ChangePostDesc(Integer id, String Newdisc){
        Post newDEsc = new Post();
        newDEsc = postrepo.findById(id).get();
        newDEsc.setContent(Newdisc);
        postrepo.save(newDEsc);
    }

}