package com.GatorShare.Message;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue
    Long id;

    @JsonIgnoreProperties
    @Column(name = "senderName")
    private String senderName;


    @JsonIgnoreProperties
    @Column(name = "receiverName")
    private String receiverName;

    @JsonIgnoreProperties
    @Column(name="message")
    private String message;

    @Column(name = "message_seen")
    private Boolean messageSeen;

    @Column(name = "status")
    private String status;


    @Column(name = "Date_sent")
    LocalDateTime dateSent;



    public Boolean getMessageSeen() {
        return messageSeen;
    }

    public void setMessageSeen(Boolean messageSeen) {
        this.messageSeen = messageSeen;
    }

    public String getSenderName() {
        return senderName;
    }



    public Long getMessageId() {
        return id;
    }

    public void setMessageId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }



    public String getReceiverName() {
        return receiverName;
    }
}
