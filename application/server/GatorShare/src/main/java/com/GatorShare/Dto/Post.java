package com.GatorShare.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
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

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id",referencedColumnName = "id")
	private User user;

	@Column(columnDefinition="TEXT")
	private String Title;

	@Column(columnDefinition = "TEXT")
	private String Tag;
	@Column(columnDefinition="TEXT")
	private String Description;

	@Column(columnDefinition = "integer")
	private Integer photo_Like;
	@Column(name="createdDate", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date createdDate;

	@Lob
	@Column(name = "picByte")
	private byte[] picByte;

	public Post() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public String getTitle(){
		return Title;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getContent() {
		return Description;
	}

	public void setContent(String Description) {
		this.Description = Description;
	}

	public void SetTitle(String Title){
		this.Title = Title;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}

	public Integer getPhoto_Like() {
		return photo_Like;
	}

	public void setPhoto_Like(Integer photo_Like) {
		this.photo_Like = photo_Like;
	}
}