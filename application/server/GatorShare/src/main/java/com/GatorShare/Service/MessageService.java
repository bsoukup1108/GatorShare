package com.GatorShare.Service;

import com.GatorShare.Dto.Message;
import com.GatorShare.Dto.Post;
import com.GatorShare.Repo.MessageRepo;
import org.aspectj.bridge.IMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepo messageRepo;


    public void StoreMessage(int user_id, String UserName, String message){

        Message message1 = new Message();
        Date date = new Date();
        message1.setDateSent(date);
        message1.setUser_id(user_id);
        message1.setMessage(message);
        message1.setUserName(UserName);

        messageRepo.save(message1);

    }

    public List<Message> getAllMessages() {
        List<Message> message = messageRepo.findAll();
        return message;
    }


    public void delete(Integer id)
    {
        messageRepo.deleteById(id);
    }
}
