package com.GatorShare.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor

@Entity
@Table(name = "posts")
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;




	@Column(columnDefinition = "TEXT")
	private String Title;

	@Column(columnDefinition = "TEXT")
	private String Tag;
	@Column(columnDefinition = "TEXT")

	private String Description;



	@Column(columnDefinition = "integer")
	private Integer photo_Like;

	public Integer getUser_ID() {
		return User_ID;
	}

	public void setUser_ID(Integer user_ID) {
		User_ID = user_ID;
	}

	@Column(columnDefinition = "integer")
	private Integer User_ID;





	@Column(name = "createdDate", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date createdDate;


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setTag(String tag) {
		this.Tag = tag;
	}





	public String getTitle() {
		return Title;
	}

	public String getContent() {
		return Description;
	}

	public void setContent(String Description) {
		this.Description = Description;
	}

	public void SetTitle(String Title) {
		this.Title = Title;
	}

	public int getLikes() {
		return photo_Like;
	}

	public void setLikes(int likes) {
		photo_Like = likes;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	Date date = new Date();


	public void setCreatedDate() {
		this.createdDate = date;
	}

	public Integer getPhoto_Like() {
		return photo_Like;
	}

	public void setPhoto_Like(Integer photo_Like) {
		this.photo_Like = photo_Like;
	}

	public Post(){

	}

}