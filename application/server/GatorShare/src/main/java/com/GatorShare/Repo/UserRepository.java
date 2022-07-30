package com.GatorShare.Repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GatorShare.Dto.User;




@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);


}