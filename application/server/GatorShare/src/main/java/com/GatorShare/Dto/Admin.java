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

@Table(name = "Admin")
@Data
public class Admin {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "Admin_Name")
    private String Admin;

    @Column(name = "Admin_email")
    private String Admin_email;

    @Column(name = "Admin_password")
    private String Admin_password;

    @Column(name = "Details")
    private String Details;

    public Long getId() {
        return id;
    }

    public String getAdmin_email(){
        return Admin_email;
    }

    public String get_password(){
        return Admin_password;
    }

    public String get_name(){
        return Admin;
    }

    public String user_details(){
        return Details;
    }

    public void set_details(String details){
        this.Details = details;
    }

    public void set_name(String name){
        this.Admin = name;
    }

    public void set_password(String password){
        this.Admin_password = password;
    }
    public void set_email(String email){
        this.Admin_email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Admin(){

    }
}
