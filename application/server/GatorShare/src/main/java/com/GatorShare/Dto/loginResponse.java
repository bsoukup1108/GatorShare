package com.GatorShare.Dto;

public class loginResponse {
    private String token;
    private String status;

    public String getStatus(){
        return status;
    }

    public String getToken(){
        return token;
    }

    public void setStatus(String status){
        this.status= status;
    }

    public void setToken(String token){
        this.token = token;
    }

    public loginResponse(String status, String token){
        this.token = token;
        this.status= status;
    }
}
