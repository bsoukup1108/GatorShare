package com.GatorShare;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;


import com.GatorShare.Dto.*;

import com.GatorShare.Repo.CommentRepo;
import com.GatorShare.Repo.PostRepo;
//import com.GatorShare.Service.ImageStorageService;
import com.GatorShare.Service.commentService;
import com.GatorShare.Service.postService;
import com.GatorShare.Service.UserService;
import com.GatorShare.Service.AboutUsService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import javax.servlet.http.HttpServletRequest;

@Slf4j

@EntityScan

@RestController
@SpringBootApplication
@ComponentScan(basePackages = {"com.GatorShare"})
@RequestMapping("/api/")
@EnableJpaRepositories
@CrossOrigin(origins = { "https://gatorshare.com", "http://gatorshare1.s3-website-us-west-1.amazonaws.com", "http://gatorshare.com", "http://localhost:3000"})


public class GatorShareApplication {
	@Autowired
	private AboutUsService userServicetDto;
	@Autowired
	private UserService userService;

	@Autowired
	private commentService CommentService;

	@Autowired
	private postService PostService;


//	@Autowired
//	private ImageStorageService imageStorageService;


	@Autowired
	public HttpServletRequest request;

	@Autowired
	private PostRepo postRepo;

	@Autowired
	private CommentRepo commentRepo;


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



	@GetMapping(value = "search")
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



	@GetMapping("search/{Tutoring}")
	public ResponseEntity<List<Post>> SearchWhereInputIsTutoring(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsTutoring());
	}

	@GetMapping("search/{Essay}")
	public ResponseEntity<List<Post>> SearchWhereInputIsAEssay(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsAEssa());
	}
	@GetMapping("search/{Clubs}")
	public ResponseEntity<List<Post>> SearchWhereInputIsClubs(){
		return ResponseEntity.ok(PostService.SearchWhereInputIsClub());
	}

	@GetMapping("search/{Others}")
	public ResponseEntity<List<Post>> SearchWhereInputIsOthers()
	{
		return ResponseEntity.ok(PostService.SearchWhereInputIsOthers());
	}


	@GetMapping("posts")
	public ResponseEntity<List<Post>> getAllPosts()
	{

		return ResponseEntity.ok(PostService.getAllPosts());
	}




	@PostMapping("post")

	public ResponseEntity<FileResponseMassage> UploadPost(@RequestPart("image") MultipartFile image, @RequestParam("postTitle") String Titile, @RequestParam("Descrption") String DEsc, @RequestParam("likes") Integer like, @RequestParam("tag") String tag, @RequestParam(value = "user_id" , required = false) Long user_id) {
		String message = "";
		try{
			PostService.store(image, Titile, DEsc,tag, like, user_id);

			message = "uploaded the post successfully: "+ Titile;
			return ResponseEntity.status(HttpStatus.OK).body(new FileResponseMassage(message));
		} catch (Exception e){
			message = "Post could not be uploaded " + Titile + ".";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new FileResponseMassage(message));

		}
	}
	@GetMapping(value = "AllPosts/{id}")
	public ResponseEntity<List<Post>> getPostByID(@RequestParam("query") Integer query){
		return ResponseEntity.ok(PostService.getallpostsbyid(query));
	}

//	@PostMapping("post/{postID}/upload")
//	public ResponseEntity<ResponesImageMessage> uploadFile(@RequestPart("Image") MultipartFile file) {
//		String message = "";
//		try {
//			imageStorageService.store(file);
//
//			message = "Uploaded the file successfully: " + file.getOriginalFilename();
//			return ResponseEntity.status(HttpStatus.OK).body(new ResponesImageMessage(message));
//		} catch (Exception e) {
//			message = "Could not upload the file: " + file.getOriginalFilename() + "!";
//			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponesImageMessage(message));
//		}
//	}

	@GetMapping("postsImage")
	public ResponseEntity<List<ResponsePost>> getListFiles() {
		List<ResponsePost> files = postService.getAllfiles().map(dbFile -> {
			String fileDownloadUri = ServletUriComponentsBuilder
					.fromCurrentContextPath()
					.path("/files/")
					.path(String.valueOf(dbFile.getId()))
					.toUriString();

			return new ResponsePost(
					dbFile.getName(),
					fileDownloadUri,
					dbFile.getType());
		}).collect(Collectors.toList());

		return ResponseEntity.status(HttpStatus.OK).body(files);
	}

	@GetMapping("/Images/{id}")
	public ResponseEntity<byte[]> getFile(@PathVariable int id) {
		Post post = postService.getfile(id);

		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + post.getName() + "\"")
				.body(post.getData());
	}





	@PostMapping("post/{postid}/comments")
	public  comments createComment(@PathVariable (value = "postid") Integer postid, @RequestBody comments Comments){
		return postRepo.findById(postid).map(post -> {
			Comments.setPost(post);
			return commentRepo.save(Comments);
		}).orElseThrow();
	}

	@GetMapping("comment/{post_id}/post_id")
	public ResponseEntity<List<comments>> getCommentByPostID(@RequestParam("query") Integer query){
		return ResponseEntity.ok(CommentService.getallpostsbyid(query));
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
