package com.GatorShare.Message;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
public class MessageService
{

    @Autowired
    public MessageDao messageDao;

    @Transactional
    public void sendMessage(MessageDto massageDto){
        messageDao.sendMessage(massageDto);

    }

    public List<Message> getMessages(String email, Integer User_ID){
        return messageDao.getMessages(email, User_ID);
    }

    public void updatedMessageTobeSeen(String email, Integer User_id){
        messageDao.updateMessagesToBeSeen(email, User_id);
    }

}
