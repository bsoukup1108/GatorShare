//package com.GatorShare.Repo;
//
//import com.GatorShare.Dto.Post;
//import com.GatorShare.Dto.comments;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//
//@Repository
//public interface CommentRepo extends JpaRepository<comments, Integer> {
//
//    @Query("SELECT c FROM comments c WHERE c.id LIKE CONCAT('%',:query, '%')")
//    List<comments> getAllCommentByPost_Id(int query);
//
//
//}
//
