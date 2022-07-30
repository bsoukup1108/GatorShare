package com.GatorShare.Dto;

import javax.persistence.*;
import com.GatorShare.Dto.AssignRole;

@Entity
@Table(name = "roles")

public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private AssignRole role_name;

    public Role(){

    }

    public Role(AssignRole role_name){
        this.role_name = role_name;
    }

    public Integer getRuleId(){
        return id;
    }

    public void setID(Integer id){
        this.id = id;
    }

    public AssignRole getRole_name(){
        return role_name;
    }

    public void setRole_name(AssignRole role_name){
        this.role_name = role_name;
    }
}
