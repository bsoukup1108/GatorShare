package com.GatorShare.Dto;

import javax.persistence.Column;
import javax.persistence.Lob;
import java.util.Date;

public class ResponsePost {



    private String Title;
    private String Tag;
    private String Description;
    private Integer photo_Like;
    private String name;
    private String type;

    private Date createdDate;



    private byte[] data;



    private String url;



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getTag() {
        return Tag;
    }

    public void setTag(String tag) {
        Tag = tag;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Integer getPhoto_Like() {
        return photo_Like;
    }

    public void setPhoto_Like(Integer photo_Like) {
        this.photo_Like = photo_Like;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }


    public ResponsePost(byte [] data, String name, String url, String type) {
        this.data = data;
        this.name = name;
        this.url = url;
        this.type = type;

    }
}
