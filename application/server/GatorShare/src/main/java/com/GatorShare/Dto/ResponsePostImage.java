package com.GatorShare.Dto;

public class ResponsePostImage {


    private String message;

    public ResponsePostImage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}