//package com.GatorShare.Service;
//
//
//import com.GatorShare.Dto.Imageupload;
//import com.GatorShare.Repo.ImageRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.util.StringUtils;
//
//import java.io.IOException;
//import java.util.stream.Stream;
//
//
//@Service
//public class ImageStorageService {
//
//    @Autowired
//    private ImageRepo imageRepo;
//
//    public Imageupload store(MultipartFile file) throws IOException{
//        String filename = StringUtils.cleanPath(file.getOriginalFilename());
//        Imageupload imageupload = new Imageupload(filename, file.getContentType(), file.getBytes());
//
//        return imageRepo.save(imageupload);
//    }
//
//    public Imageupload getfile(String id){
//        return imageRepo.findById(id).get();
//    }
//
//
//}
