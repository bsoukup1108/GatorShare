package com.GatorShare.Repo;

import com.GatorShare.Dto.Imageupload;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ImageRepo extends JpaRepository<Imageupload, String> {


}
