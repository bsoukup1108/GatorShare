package com.GatorShare.Dto;

import javax.persistence.*;


import org.hibernate.annotations.GenericGenerator;


import lombok.Data;


@Entity
@Table(name = "posts")

public class Post {
	@Id
	@GeneratedValue(generator = "uuid", strategy = GenerationType.IDENTITY)
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "id")
	private String id;
	@Column(name = "Title")
	private String Title;

	@Column(name = "Description")
	private String Description;

	@Lob
	@Column(name = "IMAGE")
	private String image;

	public Post() {
	}

	public Post(String title, String description, String image) {
		this.Title = title;
		this.Description = description;
		this.image = image;
	}

	public String getId() {
		return id;
	}

	public String getTitle() {
		return Title;
	}



	public void SetTtitle(String title){
		this.Title = title;
	}


	public void setDescription(String description) {
		this.Description = description;
	}

	public String getIMage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

//	Evey post must be saved in the logo
	@Override
	public String toString(){
		return "Post Id" + id + "Post Title" + Title + "Post Description" + Description + "Post Image" + image;
	}


}