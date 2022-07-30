package com.GatorShare.Dto;



public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;





    public String getfirstName(){
        return firstName;
    }

    public String getlastName(){
        return lastName;
    }

    public String getEmail(){
        return email;
    }

    public String getPassword(){
        return password;
    }

    public void setID(Long id){
        this.id = id;
    }

    public void SetFirstName(String firstName){
        this.firstName = firstName;
    }

    public void SetLastName(String lastName){
        this.lastName = lastName;
    }

    public void SetEmailAddress(String email){
        this.email = email;
    }


    public UserDTO(String firstName, String lastName, String email,String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

    }

    public UserDTO (){

    }
}
