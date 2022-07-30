package com.GatorShare;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;


import com.GatorShare.Dto.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.GatorShare.Excpetions.AuthenticationFailException;
import com.GatorShare.Excpetions.CustomeException;
import com.GatorShare.Repo.PostRepo;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.GatorShare.Service.postService;
import com.GatorShare.Dto.postResponse;
import com.GatorShare.Dto.Post;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.*;
import com.GatorShare.Repo.PostRepo;
import com.GatorShare.Service.AboutUsService;
import com.GatorShare.Service.UserService;
import com.GatorShare.Excpetions.FileResponseMassage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Slf4j

@EntityScan

@RestController
@SpringBootApplication
@ComponentScan(basePackages = { "com.GatorShare" })
@RequestMapping("/api/")
@EnableJpaRepositories

@CrossOrigin(origins = "http://localhost:3000/")
public class GatorShareApplication {
	@Autowired
	private AboutUsService userServicetDto;
	@Autowired
	private UserService userService;


	@Autowired
	private postService PostService;



	public static void main(String[] args) {
		SpringApplication.run(GatorShareApplication.class, args);
	}


	@GetMapping(value = "aboutus")
	public ResponseEntity<List<AboutUsDto>> listAllUsers() {
		List<AboutUsDto> Aboutusers = this.userServicetDto.listAll();
		return new ResponseEntity<List<AboutUsDto>>(Aboutusers, HttpStatus.OK);
	}

	@GetMapping("aboutus/id/{id}")
	public ResponseEntity<AboutUsDto> getUserById(
			@PathVariable(name = "id") final Long userId) {
		try {
			final AboutUsDto user = this.userServicetDto.get(userId);
			return new ResponseEntity<AboutUsDto>(user, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<AboutUsDto>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "aboutus/save")
	public ResponseEntity<AboutUsDto> save(@RequestBody AboutUsDto user) {
		this.userServicetDto.save(user);
		return new ResponseEntity<AboutUsDto>(user,
				HttpStatus.CREATED);
	}

	@DeleteMapping("aboutus/delete/id/{id}")
	public ResponseEntity<AboutUsDto> delete(@PathVariable(name = "id") final Long userId) {
		this.userServicetDto.delete(userId);
		return new ResponseEntity<AboutUsDto>(HttpStatus.NO_CONTENT);
	}

	@GetMapping(value = "login")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = this.userService.getAllUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}

	@PostMapping(value = "/login")
	public loginResponse login(@RequestBody loginDTO logindto) throws CustomeException, AuthenticationFailException {
		return userService.login(logindto);
	}


	@GetMapping("login/id/{id}")
	public ResponseEntity<User> getUserByID( @PathVariable(name = "id") final Long userId)
	{
		String userNotFound = "{Wrong Entry: Try Some Thing Else}";
		try {
				final User user = this.userService.getUserByID(userId);
				return new ResponseEntity<User>(user, HttpStatus.OK);
		   } catch (NoSuchElementException e) {
				return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping(value = "/posts")
	public ResponseEntity<List<Post>> getAllPost() {
		List<Post> posts = this.PostService.getAllPosts();
		return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
	}

	@GetMapping("search")
	public ResponseEntity<List<Post>> searchPosts(@RequestParam("query") String query){
		return ResponseEntity.ok(PostService.searchPosts(query));
	}

	@PostMapping("post")
	public ResponseEntity<FileResponseMassage> UploadPost(@RequestPart(required = false) MultipartFile posts, @RequestParam("postTitle") String Titile, @RequestParam("Descrption") String DEsc, @RequestParam("number of like") Integer like, @RequestParam("tag") String tag) {
		String message = "";
		try{
			PostService.store(posts, Titile, DEsc,like,tag);
			message = "uploaded the post successfully: "+ posts.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new FileResponseMassage(message));
		} catch (Exception e){
			message = "Post could not be uploaded " + posts.getOriginalFilename() + ".";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new FileResponseMassage(message));
		}
	}



	@PostMapping("/changePostTitle")
	public String changePname(@RequestParam("id") Integer id,
							  @RequestParam("newPostname") String name)
	{
		String message = "";
		try{
			PostService.ChangePostTitle(id, name);

			message = "Post updated";
		} catch (Exception e){
			message = "Post could not be uploaded " + ".";

		}
		return message;



	}
	@PostMapping("/changePostDescription")
	public String changeDescription(@RequestParam("id") Integer id ,
									@RequestParam("newDescription") String description)

	{
		String message = "";
		try {
			PostService.ChangePostDesc(id, description);
			message = "Post description updated";
		} catch (Exception e){
			message = "Post could not be uploaded " + ".";
		}
		return message;
	}





	@PostMapping("/signup")
	public singupResponse signup(@RequestBody signupDTO signupdto) throws CustomeException{
		return userService.signUp(signupdto);
	}








}
