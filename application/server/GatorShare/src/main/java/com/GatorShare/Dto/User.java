package com.GatorShare.Dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity

@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_Name")
    private String lastName;
    @Column(name = "password")
    private String password;
    @Column(name = "email")
    private String email;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable( name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public Long getID(){
        return id;
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

    public Set<Role> getRole_name(){
        return roles;
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

    public void setRoles(Set<Role> roles){
        this.roles = roles;
    }



//    getter and setter
    public User(String firstName, String lastName, String email,String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

    }

    public User (){

    }

    public String getFirstname() {
        return firstName;
    }


    public String getFirstName() {
        return firstName;
    }
}
