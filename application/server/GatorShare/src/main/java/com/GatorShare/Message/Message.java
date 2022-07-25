package com.GatorShare.Message;

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

    @Column(name = "from_user_id")
    Long fromUserId;

    @Column(name = "to_user_id")
    Long toUserId;
    @Column
    String message;

    @Column(name = "message_seen")
    Boolean messageSeen;

    @Column(name = "Date_sent")
    LocalDateTime dateSent;

    public Boolean getMessageSeen() {
        return messageSeen;
    }

    public void setMessageSeen(Boolean messageSeen) {
        this.messageSeen = messageSeen;
    }

    public Long getToUserId() {
        return toUserId;
    }

    public void setToUserId(Long toUserId) {
        this.toUserId = toUserId;
    }
    public Long getFromId() {
        return fromUserId;
    }

    public void setFromId(Long tofromId) {
        this.fromUserId = tofromId;
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

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", fromUserId=" + fromUserId +
                ", toUserId=" + toUserId +
                ", message='" + message + '\'' +
                ", dateSent=" + dateSent +
                '}';
    }

}
