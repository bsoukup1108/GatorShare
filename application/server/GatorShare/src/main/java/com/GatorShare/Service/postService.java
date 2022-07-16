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

    public void store(Integer id, MultipartFile file, String Title, String description) throws IOException {
        Post newPost = new Post();
        String PostName = StringUtils.cleanPath(file.getOriginalFilename());
        if(PostName.contains("..")){
            System.out.println("post is not valid");
        }
        try {
            newPost.setContent(Base64.getEncoder().encodeToString(file.getBytes()));
        } catch (IOException e){
            e.printStackTrace();
        }
        newPost.setContent(description);
        newPost.SetTitle(Title);
        postrepo.save(newPost);
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