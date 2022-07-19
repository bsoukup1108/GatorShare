package com.GatorShare.Dto;

public class postResponse {

    private String PostName;
    private String PostUrl;
    private String PostDescription;
    private String image;

    public postResponse(String PostName, String PostURL, String PostDescription, String image){
        this.PostName = PostName;
        this.PostUrl = PostURL;
        this.PostDescription = PostDescription;
        this.image = image;
    }

    public String getPostName(){
        return PostName;
    }
    public String getPostUrl(){
        return PostUrl;
    }
    public String getPostDescription(){
        return PostDescription;
    }
    public String getImage(){
        return image;
    }

    public void setPostName(String PostName){
        this.PostName = PostName;
    }

    public void setPostUrl(String PostURL){
        this.PostUrl = PostURL;
    }

    public void setPostDescription(String PostDesc){
        this.PostDescription = PostDesc;
    }

    public void setPostSize(String PostSize){
        this.image = PostSize;
    }
}
