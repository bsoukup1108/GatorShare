package com.GatorShare.Dto;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import javax.persistence.Table;
import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "posts")
@Data
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	private Long id;
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_Name")
	private String lastName;
	@Column(name = "title")
	private String title;
	@Column(name = "description")
	private String description;

	// After the final table is desineg retrive the image and other infromation from the database

}