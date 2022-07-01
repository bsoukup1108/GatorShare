package com.GatorShare;

import java.util.List;
import java.util.NoSuchElementException;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.GatorShare.Dto.AboutUsDto;
import com.GatorShare.Service.AboutUsService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j

@RestController
@SpringBootApplication
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")

public class GatorShareApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatorShareApplication.class, args);
	}
	@RequestMapping("/test")
	public String test(){
		return "{Test: test}";
	}
	@Autowired
	private AboutUsService userService;
	@GetMapping(value = "aboutus")
	public ResponseEntity<List<AboutUsDto>> listAllUsers()
	{
		List<AboutUsDto> users = this.userService.listAll();
		return new ResponseEntity<List<AboutUsDto>>(users,HttpStatus.OK);
	}

	@GetMapping("aboutus/id/{id}")
	public ResponseEntity<AboutUsDto> getUserById(
			@PathVariable(name = "id") final Long userId) {
			try {
				final AboutUsDto user = this.userService.
					get(userId);
				return new ResponseEntity<AboutUsDto>
					(user, HttpStatus.OK);
			} catch (NoSuchElementException e) {
				return new ResponseEntity<AboutUsDto>
					(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "aboutus/save")
	public ResponseEntity<AboutUsDto> save(@RequestBody AboutUsDto user) {
		this.userService.save(user);
		return new ResponseEntity<AboutUsDto>(user,
				HttpStatus.CREATED);
	}

	@DeleteMapping("aboutus/delete/id/{id}")
	public ResponseEntity<AboutUsDto> delete(@PathVariable (name = "id") final Long userId) {
		this.userService.delete(userId);
		return new ResponseEntity<AboutUsDto>(HttpStatus.NO_CONTENT);
	}
}




