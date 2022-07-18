package com.GatorShare.Repo;

import com.GatorShare.Dto.AuthenticationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.GatorShare.Dto.User;

@Repository
public interface TokenRepo extends JpaRepository<AuthenticationToken, Integer> {

    AuthenticationToken findTokenByUser(User user);
    AuthenticationToken findTokenByToken(String token);
}
