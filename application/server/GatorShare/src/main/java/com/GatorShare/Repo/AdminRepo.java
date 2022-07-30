package com.GatorShare.Repo;

import java.util.List;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;
import com.GatorShare.Dto.Admin;



@EntityScan
@Repository

public interface AdminRepo extends JpaRepository<Admin, Long> {


}
