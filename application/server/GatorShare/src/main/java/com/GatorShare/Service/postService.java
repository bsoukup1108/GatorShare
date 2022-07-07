//package com.GatorShare.Service;
//
//
//import java.util.List;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.GatorShare.Dto.Post;
//
//import com.GatorShare.Repo.PostRepo;
//
//@Service
//public class postService implements postInterface{
//    @Autowired
//    private PostRepo postrepo;
//
//
//
//
//
//    public List<Post> searchPost(String query) {
//        List<Post> posts = postrepo.searchPost(query);
//        return posts;
//    }
//
//
//    public Post createPost(Post post) {
//        return postrepo.save(post);
//    }
//
//
//
//}