package com.GatorShare.Excpetions;

public class AuthenticationFailException extends Exception{
    public AuthenticationFailException(String message){
        super(message);
    }
}
