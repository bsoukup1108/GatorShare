package com.GatorShare.Dto;

public class loginResponse {
    private String token;
    private String status;

    private Long id;

    public String getStatus(){
        return status;
    }

    public String getToken(){
        return token;
    }

    public Long getID(){
        return id;
    }

    public void setStatus(String status){
        this.status= status;
    }

    public void setToken(String token){
        this.token = token;
    }



    public loginResponse(String status, String token, Long Id){
        this.id = Id;
        this.token = token;
        this.status= status;
    }
}
