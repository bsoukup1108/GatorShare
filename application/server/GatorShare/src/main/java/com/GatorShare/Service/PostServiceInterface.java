package com.GatorShare.Service;

import com.GatorShare.Dto.Post;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface PostServiceInterface {

    List<Post> searchPosts(String query);
    List<Post> getAllPosts();

    List<Post> getallpostsbyid(int query);

}
