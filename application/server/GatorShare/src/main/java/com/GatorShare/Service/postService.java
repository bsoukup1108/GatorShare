package com.GatorShare.Service;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.GatorShare.Dto.Post;
import com.GatorShare.Dto.postimageDao;
import com.GatorShare.Service.UserService;
import com.GatorShare.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Value;
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



@Service
public class postService implements PostServiceInterface{

    private PostRepo postrepo;

    public postService(PostRepo postrepo){
        this.postrepo = postrepo;
    }
    @Autowired
    private UserRepository userRepository;


    private String uploadfolder;

    public HttpServletRequest request;

    public void store(MultipartFile image, String tag, String Title, String description, int photo_likes) throws IOException {
        String uploadDic = request.getServletContext().getRealPath(uploadfolder);
        String fileName = image.getOriginalFilename();
        String FilePath = Paths.get(uploadDic, fileName).toString();
        System.out.println("FileName: " + image.getOriginalFilename());
        try{
            File dir = new File(uploadDic);
            if(!dir.exists()){
                System.out.println("Folder created");
                dir.mkdir();
            }
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(FilePath)));
            stream.write(image.getBytes());
            stream.close();

        }catch (Exception e){
            System.out.println("in catch");
            e.printStackTrace();

        }
        Date createDate = new Date();
        byte [] imageData = image.getBytes();
        Post post = new Post();
        post.SetTitle(Title);
        post.setPhotos(imageData);
        post.setDescription(description);
        post.setTag(tag);
        post.setLikes(photo_likes);
        post.setCreatedDate(createDate);
        postrepo.save(post);
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