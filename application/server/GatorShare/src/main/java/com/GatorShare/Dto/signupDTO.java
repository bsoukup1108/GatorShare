package com.GatorShare.Dto;

import java.util.HashSet;
import java.util.Set;

public class signupDTO {

    private String firstName;
    private String lastName;
    private String email;
    private String password;

    private Set<String> userRole;
    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public String getEmail(){
        return email;
    }

    public String getPassword(){
        return password;
    }
    public Set<String> getRole(){
        return userRole;
    }

    public void SetFirstName(String firstName){
        this.firstName = firstName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setPassword(String password){
        this.password = password;
    }

    public void setRole(Set<String> role){
        this.userRole = role;
    }

}
