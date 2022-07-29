package com.GatorShare.Repo;

import com.GatorShare.Dto.comments;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface CommentRepo extends JpaRepository<comments, Integer> {


}

