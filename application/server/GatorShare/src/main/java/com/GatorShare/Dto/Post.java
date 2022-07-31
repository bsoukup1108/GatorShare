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

//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "user_id",referencedColumnName = "id")
//	private User users;

	@Column(columnDefinition="TEXT")
	private String Title;

	@Column(columnDefinition = "TEXT")
	private String Tag;
	@Column(columnDefinition = "TEXT")

	private String Description;



	@Column(name = "picByte")
	private byte[] picByte;



	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Column(columnDefinition = "integer")
	private Integer photo_Like;

	private String name;

	private String type;

	@Column(name="createdDate", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date createdDate;



	public Post() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setTag(String tag){
		this.Tag = tag;
	}

//	public Long getUser_id(){
//		return users.getID();
//	}



//	public User getUser() {
//		return users;
//	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}



	public String getTitle(){
		return Title;
	}

//	public void setUser(User user) {
//		this.users = user;
//	}

	public String getContent() {
		return Description;
	}

	public void setContent(String Description) {
		this.Description = Description;
	}

	public void SetTitle(String Title){
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

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}



	public Integer getPhoto_Like() {
		return photo_Like;
	}

	public void setPhoto_Like(Integer photo_Like) {
		this.photo_Like = photo_Like;
	}




	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}

}