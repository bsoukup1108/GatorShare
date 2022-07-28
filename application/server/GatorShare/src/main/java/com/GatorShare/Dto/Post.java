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

	@Column(columnDefinition = "TEXT")
	private String Description;

	@Column(columnDefinition = "integer")
	private Integer photo_Like;

	@Column(name = "picture", length = Integer.MAX_VALUE, nullable = true)
	private byte [] photos;

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

	public void setPhotos(byte [] Photo){
		this.photos = Photo;
	}

	public User getUser() {
		return user;
	}

	public byte [] getPhoto(){
		return photos;
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
}