package com.GatorShare.Excpetions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


import com.GatorShare.Dto.ResponesImageMessage;

@ControllerAdvice
public class ImageUploadExecption extends ResponseEntityExceptionHandler{

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<ResponesImageMessage> handleMaxSizeException(MaxUploadSizeExceededException exc) {
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponesImageMessage("File is too large. Try again!"));
    }
}
