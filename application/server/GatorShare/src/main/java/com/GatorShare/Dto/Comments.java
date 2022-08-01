package com.GatorShare.Dto;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;

@Entity
@Table(name = "comments")
public class Comments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;



    @Column(columnDefinition = "TEXT")
    private String text;


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
        user.getID();
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "postid", referencedColumnName = "id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user;




    public Integer getId() {
        return id;
    }



    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
