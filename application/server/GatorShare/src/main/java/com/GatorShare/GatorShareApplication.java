package com.GatorShare;

import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.GatorShare.Dto.Post;
import com.GatorShare.Dto.User;

//import com.GatorShare.Service.postService;
//import com.GatorShare.Dto.Post;
//import com.GatorShare.Service.postService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.*;
import com.GatorShare.Dto.AboutUsDto;

//import com.GatorShare.Repo.PostRepo;
import com.GatorShare.Service.AboutUsService;
import com.GatorShare.Service.UserService;
import com.GatorShare.Service.postService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

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
	// private postService postService;

	@Autowired
	private postService PostService;

	public static void main(String[] args) {
		SpringApplication.run(GatorShareApplication.class, args);
	}
	// @RequestMapping("/test")
	// public String test(){
	// return "{Test: test}";
	// }

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

	@PostMapping(value = "login/save")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		this.userService.saveUser(user);
		return new ResponseEntity<User>(user, HttpStatus.CREATED);
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
	@GetMapping(value = "posts")
	public ResponseEntity<List<Post>> getAllPosts() {
		List<Post> posts = this.PostService.getAllPosts();
		return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
	}

	@PostMapping("/post/create")
	public ResponseEntity<Post> CreatePost(@RequestBody Post post) {
		this.PostService.CreatePost(post);
		return new ResponseEntity<Post>(post, HttpStatus.CREATED);
	}



	@GetMapping(value = "signup")
	public String signup() {
		return "{userName: userName" + "Email: Email" + "Password: password" + "ConformPassword:ConformPassword" + "}";
	}

	@GetMapping("login/{userName}/post")
	public String post() {
		return "{Title: title" + "Description: description" + "attachedImage: []" + "}";
	}

	@GetMapping("login/{UserID}/search")
	public String search() {
		return "{SELECT * FROM <tableName> WHERE <Name Of attribute>='%' or <Name Of attribute>=\"+\"'\"+\"%\"+\"';"
				+ "}";
	}

	@GetMapping(value = "login/{UserID}/Message")
	public String Message() {
		return "{[Message input]" + "}";
	}

	@GetMapping(value = "login/{userID}/comment")
	public String Comment() {
		return "{[commnet input]" + "}";
	}




	// @GetMapping("/search")
	// public ResponseEntity<List<AboutUsDto>> searchPost(@RequestParam("query")
	// String query){
	// return ResponseEntity.ok(userService.searchPost(query));
	// }

}
