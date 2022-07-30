package com.GatorShare.Dto;

public class loginResponse {
    private String token;
    private String status;

    private Long id;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    private String firstName;

    private String lastname;

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



    public loginResponse(String status, String token, Long Id, String firstName){
        this.firstName = firstName;
        this.id = Id;
        this.token = token;
        this.status= status;
    }
}
