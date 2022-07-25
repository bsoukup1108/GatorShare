package com.GatorShare;

import java.util.List;
import java.util.NoSuchElementException;


import com.GatorShare.Dto.*;
import com.GatorShare.Service.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.multipart.MultipartFile;

import com.GatorShare.Excpetions.AuthenticationFailException;
import com.GatorShare.Excpetions.CustomeException;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.GatorShare.Dto.Post;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.GatorShare.Excpetions.FileResponseMassage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


import javax.servlet.http.HttpServletRequest;

@Slf4j

@EntityScan

@RestController
@SpringBootApplication
@ComponentScan(basePackages = {"com.GatorShare"})
@RequestMapping("/api/")
@EnableJpaRepositories
@CrossOrigin(origins = { "https://gatorshare.com", "http://gatorshare1.s3-website-us-west-1.amazonaws.com", "http://gatorshare.com"})


public class GatorShareApplication {
	@Autowired
	private AboutUsService userServicetDto;
	@Autowired
	private UserService userService;

	@Autowired
	private RequestService requestService;


	@Autowired
	private postService PostService;

	@Autowired
	private AdminService adminService;
	@Autowired
	public HttpServletRequest request;
	public static void main(String[] args) {
		SpringApplication.run(GatorShareApplication.class, args);
	}
	// @RequestMapping("/test")
	// public String test(){
	// return "{Test: test}";
	// }
	@GetMapping("/")
	public String index(HttpServletRequest request) {

		adminService.store_userinfo(request);

		return "client info saved in the database";
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

	@GetMapping("posts/{id}")
	public ResponseEntity<Post> getPostByID( @PathVariable(name = "id") final Integer postId)
	{
		String PostNotFound = "{Wrong Entry: Try Some Thing Else}";
		try {
			final Post post = this.PostService.getPost(postId);
			return new ResponseEntity<Post>(post, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Post>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("search")
	public ResponseEntity<List<Post>> searchPosts(@RequestParam("query") String query){
		return ResponseEntity.ok(PostService.searchPosts(query));
	}

	@GetMapping("search/{ArtAndFilm}")
	public ResponseEntity<List<Post>> SearchWhereInputIsArtAndFilm(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsArtAndFilm());
	}

	@GetMapping("search/{Article}")
	public ResponseEntity<List<Post>> SearchWhereInputIsArticle(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsArticle());
	}

	@GetMapping("search/{Discord}")
	public ResponseEntity<List<Post>> SearchWhereInputIsDiscords(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsDiscords());
	}

	@GetMapping("search/{ASC}")
	public ResponseEntity<List<Post>> SortAlphabetically(){
		return ResponseEntity.ok(PostService.SortAlphabetically());
	}

	@GetMapping("search/{Tutoring}")
	public ResponseEntity<List<Post>> SearchWhereInputIsTutoring(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsTutoring());
	}

	@GetMapping("search/{ESSAY}")
	public ResponseEntity<List<Post>> SearchWhereInputIsAEssay(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsAEssa());
	}
	@GetMapping("search/{Clubs}")
	public ResponseEntity<List<Post>> SearchWhereInputIsClubs(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsClub());
	}
	@GetMapping("search/{Others}")
	public ResponseEntity<List<Post>> SearchWhereInputIsOthers(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsOthers());
	}




	@PostMapping("post")
	public ResponseEntity<FileResponseMassage> UploadPost(@RequestPart("Image") MultipartFile Image, @RequestParam("Tag") String tag, @RequestParam("postTitle") String Titile, @RequestParam("Descrption") String DEsc) {
		String message = "";
		try{
			PostService.store(Image, tag, Titile, DEsc);
			message = "uploaded the post successfully: "+ Image.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new FileResponseMassage(message));
		} catch (Exception e){
			message = "Post could not be uploaded " + Image.getOriginalFilename() + ".";
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













	// @GetMapping("/search")
	// public ResponseEntity<List<AboutUsDto>> searchPost(@RequestParam("query")
	// String query){
	// return ResponseEntity.ok(userService.searchPost(query));
	// }

}
