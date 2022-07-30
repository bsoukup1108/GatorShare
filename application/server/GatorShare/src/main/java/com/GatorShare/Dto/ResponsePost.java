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


    public ResponsePost(String name, String url, String type) {
        this.name = name;
        this.url = url;
        this.type = type;

    }
}
