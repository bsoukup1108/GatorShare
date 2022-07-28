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



@Service
public class postService implements PostServiceInterface{

    private PostRepo postrepo;

    public postService(PostRepo postrepo){
        this.postrepo = postrepo;
    }
    @Autowired
    private UserRepository userRepository;




    public void store(MultipartFile file, String Title, String tag, String description,Integer likes) throws IOException {
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
        newPost.setLikes(likes);
        newPost.setTag(tag);
        newPost.setContent(description);
        newPost.SetTitle(Title);
        postrepo.save(newPost);
    }

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