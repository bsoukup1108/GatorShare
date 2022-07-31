package com.GatorShare.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.GatorShare.Dto.AboutUsDto;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
@Repository
public interface AboutUsRepo  extends
JpaRepository<AboutUsDto, Long> {


}

