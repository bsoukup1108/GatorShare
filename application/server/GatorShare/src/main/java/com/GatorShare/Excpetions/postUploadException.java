package com.GatorShare.Excpetions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

@ControllerAdvice
public class postUploadException extends ResponseEntityExceptionHandler {
    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<FileResponseMassage> handleMaxSize(MaxUploadSizeExceededException exc){
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new FileResponseMassage("Size too large"));
    }
}
