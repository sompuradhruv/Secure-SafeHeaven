package com.hackathon.safeheaven.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.safeheaven.model.Posts;
import com.hackathon.safeheaven.model.PostsComments;
import com.hackathon.safeheaven.model.Reports;
import com.hackathon.safeheaven.model.ReportsComments;
import com.hackathon.safeheaven.model.User;
import com.hackathon.safeheaven.service.UserService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {
	
	@Autowired
	private UserService userService;
		
	@GetMapping("/userAll")
	public List<User> getAll(){
		return userService.getAllUsers();
	}
	
	@PostMapping("/userAdd")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
	@GetMapping("/reportsAll")
	public List<Reports> reportAll(){
		return userService.getAllReports();
	}
	
	@PostMapping("/reportsAdd")
	public Reports reportAdd(@RequestBody Reports reports) {
		return userService.addReport(reports);
	}
	
	@GetMapping("/postsAll")
	public List<Posts> postAll(){
		return userService.getAllPosts();
	}
	
	@PostMapping("/postsAdd")
	public Posts postAdd(@RequestBody Posts posts) {
		return userService.addPost(posts);
	}
	
	@GetMapping("/getPostByUserId/{id}")
	public List<Posts> getPostById(@PathVariable int id){
		return userService.getPostByUserId(id);
	}
	
	@GetMapping("/getReportByUserId/{id}")
	public List<Reports> getReportById(@PathVariable int id){
		return userService.getReportByUserId(id);
	}
	
	@GetMapping("/getReportsCommentsById/{id}")
	public List<ReportsComments> reportsCommentsAll(@PathVariable int id){
		return userService.getReportsCommentsById(id);
	}
	
	@PostMapping("/reportsCommentsAdd")
	public ReportsComments reportAdd(@RequestBody ReportsComments reportsComments) {
		return userService.addReportsComments(reportsComments);
	}
	
	@GetMapping("/getPostsCommentsById/{id}")
	public List<PostsComments> postCommentsAll(@PathVariable int id){
		return userService.getPostsCommentsById(id);
	}
	
	@PostMapping("/postsCommentsAdd")
	public PostsComments postsCommentsAdd(@RequestBody PostsComments postComments) {
		return userService.addPostsComments(postComments);
	}
	
	@GetMapping("/getPostByActualId/{id}")
	public Optional<Posts> getActualPostById(@PathVariable int id){
		return userService.getActualPostById(id);
	}
	
}
