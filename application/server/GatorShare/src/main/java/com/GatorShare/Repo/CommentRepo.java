package com.GatorShare.Repo;

import com.GatorShare.Dto.Post;
import com.GatorShare.Dto.Comments;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CommentRepo extends JpaRepository<Comments, Integer> {

    @Query("SELECT c FROM Comments c WHERE c.PostID LIKE CONCAT('%',:query, '%')")
    List<Comments> getAllCommentByPost_Id(int query);


}

