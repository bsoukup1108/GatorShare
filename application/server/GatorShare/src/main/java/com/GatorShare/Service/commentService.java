package com.GatorShare.Service;

import com.GatorShare.Dto.AboutUsDto;
import com.GatorShare.Dto.Post;
import com.GatorShare.Dto.Comments;
import com.GatorShare.Repo.CommentRepo;
import com.GatorShare.Repo.UserRepository;
import com.GatorShare.Repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
public class commentService {

    @Autowired
    private CommentRepo commentRepo;

    public List<Comments> getCommetnsById(int postId) {
        List<Comments> comment = commentRepo.getAllCommentByPost_Id(postId);
        return comment;

    }

    public void storeComment(String text, Integer userId, Integer PostId) throws IOException {

        Comments comments = new Comments();

        comments.setText(text);
        comments.setUserID(userId);
        comments.setPostID(PostId);

        commentRepo.save(comments);

    }

    public void delete(int id)
    {
        commentRepo.deleteById(id);
    }
}
