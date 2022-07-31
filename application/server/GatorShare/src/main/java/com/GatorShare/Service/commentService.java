//package com.GatorShare.Service;
//
//import com.GatorShare.Dto.Post;
////import com.GatorShare.Dto.comments;
////import com.GatorShare.Repo.CommentRepo;
//import com.GatorShare.Repo.UserRepository;
//import com.GatorShare.Repo.PostRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.util.StringUtils;
//import org.springframework.web.multipart.MultipartFile;
//import java.io.ByteArrayOutputStream;
//import java.util.List;
//
//@Service
//public class commentService {
//
//    @Autowired
//    private static CommentRepo commentRepo;
//
//
//    public List<comments> getallpostsbyid(int postId)
//    {
//        try{
//            List<comments> comment = commentRepo.getAllCommentByPost_Id(postId);
//            return comment;
//        }catch (Exception e){
//            return null;
//        }
//
//    }
//}
