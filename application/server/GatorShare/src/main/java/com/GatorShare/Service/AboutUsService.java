package com.GatorShare.Service;


import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GatorShare.Dto.AboutUsDto;
import com.GatorShare.Repo.AboutUsRepo;

@Service
@Transactional
public class  AboutUsService{
    @Autowired
    private AboutUsRepo useRepository;

    public List<AboutUsDto> listAll() 
    {
        return useRepository.findAll();
    }
    public void save(AboutUsDto user) 
    {
        useRepository.save(user);
    }
    public AboutUsDto get(Long id) 
    {
        return useRepository.findById(id).get();
    }
    public void delete(Long id) 
    {
        useRepository.deleteById(id);
    }
//    public List<AboutUsDto> searchPost(String query) {
//        List<AboutUsDto> posts = useRepository.searchPost(query);
//        return posts;
//    }


    }