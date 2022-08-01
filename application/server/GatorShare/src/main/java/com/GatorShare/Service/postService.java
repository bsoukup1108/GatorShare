package com.GatorShare.Service;

import java.io.IOException;
import java.util.List;

import com.GatorShare.Dto.AboutUsDto;

import com.GatorShare.Dto.AuthenticationToken;
import com.GatorShare.Dto.Post;
import com.GatorShare.Dto.User;
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

    public postService(PostRepo postrepo) {
        this.postrepo = postrepo;
    }

    @Autowired
    private UserRepository userRepository;

    public void store(String Title, String tag, String description, Integer likes, Integer userId) throws IOException {

        Post newPost = new Post();

        newPost.setDescription(description);
        newPost.setLikes(likes);
        newPost.setTag(tag);
        newPost.setUser_ID(userId);
        newPost.SetTitle(Title);
        newPost.setCreatedDate();
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

    public List<Post> searchPosts(String query) {
        List<Post> posts = postrepo.searchPosts(query);
        return posts;
    }

    public List<Post> getAllPosts() {
        List<Post> posts = postrepo.findAll();
        return posts;
    }

    public List<Post> getallpostsbyid(int postId) {
        List<Post> posts = postrepo.getallpostsbyid(postId);
        return posts;

    }

    public List<Post> getAllPostByUserID(int UserID){
        List<Post> posts = postrepo.getallpostsUserid(UserID);
        return posts;
    }



    public List<Post> SearchWhereInputIsArticle() {
        List<Post> posts = postrepo.SearchWhereInputIsArticle();
        return posts;
    }

    public List<Post> getByLike() {
        List<Post> posts = postrepo.MostLikeImage();
        return posts;
    }

    public List<Post> getByDate(){
        List<Post> posts = postrepo.RecantDateFirst();
        return posts;
    }

    public List<Post> SearchWhereInputIsAEssa() {
        List<Post> posts = postrepo.SearchWhereInputIsAEssay();
        return posts;
    }

    public List<Post> SearchWhereInputIsClub() {
        List<Post> posts = postrepo.SearchWhereInputIsClubs();
        return posts;
    }

    public List<Post> SearchWhereInputIsOthers() {
        List<Post> posts = postrepo.SearchWhereInputIsOthers();
        return posts;
    }

    public List<Post> SearchWhereInputIsArtAndFilm() {
        List<Post> posts = postrepo.SearchWhereInputIsArtAndFilm();
        return posts;
    }

    public List<Post> SearchWhereInputIsTutoring() {
        List<Post> posts = postrepo.SearchWhereInputIsTutoring();
        return posts;
    }

    public List<Post> SearchWhereInputIsDiscords() {
        List<Post> posts = postrepo.SearchWhereInputIsDiscords();
        return posts;
    }

    public void ChangePostTitle(Integer id, String NewTitile) {
        Post newTi = new Post();
        newTi = postrepo.findById(id).get();
        newTi.SetTitle(NewTitile);
        postrepo.save(newTi);
    }

    public void ChangePostDesc(Integer id, String Newdisc) {
        Post newDEsc = new Post();
        newDEsc = postrepo.findById(id).get();
        newDEsc.setContent(Newdisc);
        postrepo.save(newDEsc);
    }

    public void delete(int id)
    {

        postrepo.deleteById(id);
    }
}