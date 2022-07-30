package com.GatorShare.Service;
import java.io.IOException;
import java.util.Base64;
import java.util.List;


import com.GatorShare.Dto.Post;
import com.GatorShare.Repo.UserRepository;
import com.GatorShare.Repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.ByteArrayOutputStream;


<<<<<<< HEAD
import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;
=======

>>>>>>> backend

@Service
public class postService implements PostServiceInterface{

    private static PostRepo postrepo;

    public postService(PostRepo postrepo){
        this.postrepo = postrepo;
    }
    @Autowired
    private UserRepository userRepository;


<<<<<<< HEAD
    public void store(MultipartFile file, String Title, String description, Integer photo_like, String tag) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
=======


    public void store(MultipartFile file, String Title, String tag, String description,Integer likes) throws IOException {
>>>>>>> backend
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
<<<<<<< HEAD

        Date date = new Date();

        newPost.setCreatedDate(date);
        newPost.setDescription(description);
=======
        newPost.setLikes(likes);
        newPost.setTag(tag);
        newPost.setContent(description);
>>>>>>> backend
        newPost.SetTitle(Title);
        newPost.setPicByte(compressBytes(file.getBytes()));
        newPost.setTag(tag);
        newPost.setPhoto_Like(photo_like);
        postrepo.save(newPost);
    }

<<<<<<< HEAD
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



=======
>>>>>>> backend
    @Override
    public List<Post> searchPosts(String query){
        List<Post> posts = postrepo.searchPosts(query);
        return posts;
    }

    @Override
    public List<Post> getAllPosts() {
        List<Post> posts = postrepo.getallposts();
        return posts;
    }

    @Override
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

    public List<Post> SortAlphabetically(){
        List<Post> posts = postrepo.SortAlphabetically();
        return posts;
    }

    public List<Post> SearchWhereInputIsDiscords(){
        List<Post> posts = postrepo.SearchWhereInputIsDiscords();
        return posts;
    }
    public List<Post> SortByLike(){
        List<Post> posts = postrepo.SortByLIke();
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