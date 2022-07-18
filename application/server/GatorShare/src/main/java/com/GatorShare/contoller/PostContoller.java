//package com.GatorShare.contoller;
//import java.util.List;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//
//
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import com.GatorShare.Dto.Post;
//
//import com.GatorShare.Service.postService;
//
//@CrossOrigin(origins = "http://localhost:3000/")
//@RestController
//@RequestMapping("/api/")
//public class PostContoller {
//
//    @Autowired
//    private postService postService;
//
//
//    @GetMapping("/search")
//    public ResponseEntity<List<Post>> searchPost(@RequestParam("query") String query){
//        return ResponseEntity.ok(postService.searchPost(query));
//    }
//
//    @PostMapping
//    public Post createPost(@RequestBody Post post){
//        return postService.createPost(post);
//    }
//
//
//}