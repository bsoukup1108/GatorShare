package com.GatorShare.Repo;
import java.util.List;
import java.util.Optional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.GatorShare.Dto.Post;
import com.GatorShare.Dto.User;
import javax.persistence.Table;



@Repository

public interface PostRepo extends
JpaRepository<Post, Integer>{


    @Query("SELECT p FROM Post p WHERE " +
            "p.Title LIKE CONCAT('%',:query, '%')" +
            "Or p.Description LIKE CONCAT('%', :query, '%')")
    List<Post> searchPosts(String query);

    @Query("SELECT p FROM Post p WHERE p.id LIKE CONCAT('%',:query, '%')")
    List<Post> getallpostsbyid(int query);

    @Query("SELECT p FROM Post p WHERE p.User_ID LIKE CONCAT('%',:query, '%')")
    List<Post> getallpostsUserid(int query);

    @Query("SELECT p FROM Post p where p.Tag LIke '%Article%'")
    List <Post> SearchWhereInputIsArticle();

    @Query("SELECT p FROM Post p where p.Tag LIke '%Essay%'")
    List <Post> SearchWhereInputIsAEssay();

    @Query("SELECT p FROM Post p where p.Tag LIke '%ArtAndFilm%'")
    List <Post> SearchWhereInputIsArtAndFilm();

    @Query("SELECT p FROM Post p where p.Tag LIke '%Discords%'")
    List <Post> SearchWhereInputIsDiscords();

    @Query("SELECT p FROM Post p where p.Tag LIke '%Tutoring%'")
    List <Post> SearchWhereInputIsTutoring();

    @Query("SELECT p FROM Post p where p.Tag LIke '%Clubs%'")
    List <Post> SearchWhereInputIsClubs();

    @Query("SELECT p FROM Post p where p.Tag LIke '%others%'")
    List <Post> SearchWhereInputIsOthers();

    @Query("SELECT p FROM Post p order by p.photo_Like Desc")
    List <Post> MostLikeImage();

    @Query("SELECT p FROM Post p order by p.createdDate Desc")
    List <Post> RecantDateFirst();

}


