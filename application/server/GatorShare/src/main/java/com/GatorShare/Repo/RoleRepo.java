package com.GatorShare.Repo;



import com.GatorShare.Dto.User;
import org.springframework.data.jpa.repository.JpaRepository;
import com.GatorShare.Dto.Role;

import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<Role, Long> {


}
