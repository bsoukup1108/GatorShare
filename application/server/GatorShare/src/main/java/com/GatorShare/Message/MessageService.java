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
}
