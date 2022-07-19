package com.GatorShare.Excpetions;

public class FileResponseMassage {

    private String massage;

    public FileResponseMassage(String message){
        this.massage = message;
    }

    public String getMassage(){
        return massage;
    }

    public void SetMessage(String massage){
        this.massage = massage;
    }
}
