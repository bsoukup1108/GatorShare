package com.GatorShare.Repo;
import java.util.List;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.GatorShare.Dto.Post;
import com.GatorShare.Dto.User;
import javax.persistence.Table;


@EntityScan
@Repository
@Table(name = "posts")
public interface PostRepo extends
JpaRepository<Post, Integer>{

    List<Post> findPostByUserOrderById(User user);

    List<Post> findAllByOrderByIdDesc();


//    @Query("SELECT description FROM posts")
////    @Query("SELECT * FROM posts p WHERE title='%' or description="+"'"+"%"+"'")
//    List<Post> searchPost(String query);


}


