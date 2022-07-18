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

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
public class postService implements PostServiceInterface{

    private PostRepo postrepo;

    public postService(PostRepo postrepo){
        this.postrepo = postrepo;
    }
    @Autowired
    private UserRepository userRepository;


    public void store(MultipartFile file, String Title, String description) throws IOException {
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
//    public Post savePost(UserDTO userDTO, String content){
//        Post post = new Post();
//        User user = userRepository.findByEmail(userDTO.getEmail());
//        post.setUser(user);
//        post.setContent(content);
//        return postrepo.save(post);
//    }
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