package com.GatorShare.Service;

import java.util.List;

import javax.transaction.Transactional;

import com.GatorShare.Dto.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GatorShare.Dto.User;
import com.GatorShare.Repo.UserRepository;

@Service
@Transactional
public class UserService {

   @Autowired
   private UserRepository userRepository; 

   public List<User> getAllUsers() {
      return userRepository.findAll();
   }

   public void saveUser(User user) {
      userRepository.save(user);
   }

   public User getUserByID(Long id) {
      return userRepository.findById(id).get();
   }

   private void deleteUser(Long id) {
      userRepository.deleteById(id);
   }

}

