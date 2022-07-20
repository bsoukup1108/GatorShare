package com.GatorShare.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;

import javax.transaction.Transactional;
import javax.xml.bind.DatatypeConverter;

import com.GatorShare.Dto.*;
import com.GatorShare.Excpetions.AuthenticationFailException;
import com.GatorShare.Excpetions.CustomeException;
import com.GatorShare.config.messageString;
import lombok.SneakyThrows;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import com.GatorShare.Repo.UserRepository;

@Service

public class UserService {

   @Autowired
   private UserRepository userRepository;

   @Autowired
   private AuthenticationService authenticationService;
   public List<User> getAllUsers() {
      return userRepository.findAll();
   }
//
//   public void saveUser(User user) {
//      userRepository.save(user);
//   }
//
   public User getUserByID(Long id) {
      return userRepository.findById(id).get();
   }

   Logger logger = LoggerFactory.getLogger(UserService.class);

   public singupResponse signUp(signupDTO singUPDTO) throws CustomeException{
//      check if the email address in the database
      if(Objects.nonNull(userRepository.findByEmail(singUPDTO.getEmail()))){
         throw new CustomeException("Email already exists");
      }
//      create hashPassword function


//      encrypt the password
      String encryptpassword = singUPDTO.getPassword();
      try{
         encryptpassword = hashPassword(singUPDTO.getPassword());
      }catch (Exception e){
         e.printStackTrace();
         logger.error("Hashing password failed {} ", e.getMessage());
      }

      User user = new User(singUPDTO.getFirstName(), singUPDTO.getLastName(),singUPDTO.getEmail(),encryptpassword);
      try{
         userRepository.save(user);
         final AuthenticationToken authenticationToken = new AuthenticationToken(user);
         authenticationService.saveConformedToken(authenticationToken);
         return new singupResponse("success", "User was Created");

      }catch (Exception e){
         throw new CustomeException(e.getMessage());
      }


   }


   String hashPassword(String password) throws NoSuchAlgorithmException {
      MessageDigest md = MessageDigest.getInstance("MD5");
      md.update(password.getBytes());
      byte[] digest = md.digest();
      String myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();
      return myHash;
   }

   public loginResponse login(loginDTO logindto) throws AuthenticationFailException, CustomeException{
//      get the user by email

      User user = userRepository.findByEmail(logindto.getEmail());
      if(!Objects.nonNull(user)){
         throw new AuthenticationFailException("Account was not found");
      }
      try{
         System.out.println(logindto.getPassword());
         System.out.println(user.getPassword());
//         check the password matched
         if(!user.getPassword().equals(hashPassword(logindto.getPassword()))){
            throw new AuthenticationFailException(messageString.wrong_password);
         }

      }catch (Exception e){
         e.printStackTrace();
         logger.error("Hashing password failed {}", e.getMessage());
         throw new CustomeException(e.getMessage());
      }

      AuthenticationToken token = authenticationService.getTokens(user);

      if(!Objects.nonNull(token)){
         throw new CustomeException(messageString.Auth_Token_not_found);
      }
      return new loginResponse("sucess", token.getToken(), user.getID());
   }

   private void deleteUser(Long id) {
      userRepository.deleteById(id);
   }

}

