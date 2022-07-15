package com.GatorShare.Service;

import com.GatorShare.Dto.Post;
import com.GatorShare.Repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
public class postService{
    @Autowired
    private PostRepo postrepo;

    public void store(MultipartFile file, String Title, String description) throws IOException {
        Post newPost = new Post();
        String PostName = StringUtils.cleanPath(file.getOriginalFilename());
        if(PostName.contains("..")){
            System.out.println("post is not valid");
        }
        try {
            newPost.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
        } catch (IOException e){
            e.printStackTrace();
        }
        newPost.setDescription(description);
        newPost.setImage(Title);
        postrepo.save(newPost);
    }

    public Post getPost(String id) {
        return postrepo.findById(id).get();
    }

    public List<Post> getAllPosts() {
        return postrepo.findAll();
    }

    public void ChangePostTitle(String id, String NewTitile){
        Post newTi = new Post();
        newTi = postrepo.findById(id).get();
        newTi.setImage(NewTitile);
        postrepo.save(newTi);
    }

    public void ChangePostDesc(String id, String Newdisc){
        Post newDEsc = new Post();
        newDEsc = postrepo.findById(id).get();
        newDEsc.setDescription(Newdisc);
        postrepo.save(newDEsc);
    }

}