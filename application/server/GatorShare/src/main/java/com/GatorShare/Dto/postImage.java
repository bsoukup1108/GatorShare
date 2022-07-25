package com.GatorShare.Dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "image", schema = "public")


public class postImage {

    @Id
    @GeneratedValue
    Long id;

    @Column(name = "user_id")
    Long userId;

    @Column
    String name;

    @Column(name = "date_created")
    LocalDateTime dateCreated;

    public postImage(Long userId, LocalDateTime dateCreated) {

        this.userId = userId;
        this.dateCreated = dateCreated;

    }

    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", userId=" + userId +
                ", dateCreated=" + dateCreated +
                '}';
    }

    public void setName(String filename) {
        this.name = filename;
    }
}



