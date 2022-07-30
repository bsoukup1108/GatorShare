package com.GatorShare.Service;
import java.io.IOException;
import java.util.List;


import com.GatorShare.Dto.AboutUsDto;

import com.GatorShare.Dto.Post;
import com.GatorShare.Repo.UserRepository;
import com.GatorShare.Repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.ByteArrayOutputStream;


import java.util.Date;
import java.util.Optional;
import java.util.stream.Stream;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;


@Service
public class postService {

    private static PostRepo postrepo;

    public postService(PostRepo postrepo){
        this.postrepo = postrepo;
    }
    @Autowired
    private UserRepository userRepository;





    public void store(MultipartFile image, String Title, String tag, String description,Integer likes) throws IOException {

        Post newPost = new Post();
        Date date = new Date();

        String filename = StringUtils.cleanPath(image.getOriginalFilename());
        String imagetype = image.getContentType();
        byte [] imagebyte = image.getBytes();

        newPost.setCreatedDate(date);
        newPost.setDescription(description);
        newPost.setData(imagebyte);
        newPost.setLikes(likes);
        newPost.setTag(tag);
        newPost.setName(filename);
        newPost.setType(imagetype);

        newPost.SetTitle(Title);

        postrepo.save(newPost);



    }
    public static Post getfile(int id){
        return postrepo.findById(id).get();
    }

    public static Stream<Post> getAllfiles(){

        return postrepo.findAll().stream();
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





    public List<Post> searchPosts(String query){
        List<Post> posts = postrepo.searchPosts(query);
        return posts;
    }


    public List<Post> getAllPosts() {
        List<Post> posts = postrepo.findAll();
        return posts;
    }




    public List<Post> getallpostsbyid(int postId)
    {
        List<Post> posts = postrepo.getallpostsbyid(postId);
        return posts;
    }





    public List<Post> SearchWhereInputIsArticle(){
        List<Post> posts = postrepo.SearchWhereInputIsArticle();
        return posts;
    }

    public List<Post> SearchWhereInputIsAEssa(){
        List<Post> posts = postrepo.SearchWhereInputIsAEssay();
        return posts;
    }
    public List<Post> SearchWhereInputIsClub(){
        List<Post> posts = postrepo.SearchWhereInputIsClubs();
        return posts;
    }
    public List<Post> SearchWhereInputIsOthers(){
        List<Post> posts = postrepo.SearchWhereInputIsOthers();
        return posts;
    }

    public List<Post> SearchWhereInputIsArtAndFilm(){
        List<Post> posts = postrepo.SearchWhereInputIsArtAndFilm();
        return posts;
    }

    public List<Post> SearchWhereInputIsTutoring(){
        List<Post> posts = postrepo.SearchWhereInputIsTutoring();
        return posts;
    }



    public List<Post> SearchWhereInputIsDiscords(){
        List<Post> posts = postrepo.SearchWhereInputIsDiscords();
        return posts;
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