package com.GatorShare.Message;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class MessageDto {

    @JsonIgnoreProperties
    private String message;
    private int fromLogin;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getFromLogin() {
        return fromLogin;
    }

    public void setFromLogin(int fromLogin) {
        this.fromLogin = fromLogin;
    }

    @Override
    public String toString() {
        return "MessageDTO{" +
                "message='" + message + '\'' +
                ", fromLogin=" + fromLogin +
                '}';
    }

}
