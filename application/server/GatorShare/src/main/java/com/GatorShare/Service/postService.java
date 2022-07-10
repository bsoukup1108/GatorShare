package com.GatorShare.Service;
import java.util.List;

import com.GatorShare.Dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GatorShare.Dto.Post;
import com.GatorShare.Repo.PostRepo;

@Service
public class postService{
    @Autowired
    private PostRepo postrepo;

    public List<Post> getAllPosts() {
        return postrepo.findAll();
    }

    public void  CreatePost(Post post){
        postrepo.save(post);
    }

}