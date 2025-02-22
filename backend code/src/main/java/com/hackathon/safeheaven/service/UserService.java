package com.hackathon.safeheaven.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.hackathon.safeheaven.exception.InvalidUsernameException;
import com.hackathon.safeheaven.model.Posts;
import com.hackathon.safeheaven.model.PostsComments;
import com.hackathon.safeheaven.model.Reports;
import com.hackathon.safeheaven.model.ReportsComments;
import com.hackathon.safeheaven.model.User;
import com.hackathon.safeheaven.repository.PostsCommentsRepository;
import com.hackathon.safeheaven.repository.PostsRepository;
import com.hackathon.safeheaven.repository.ReportsCommentsRepository;
import com.hackathon.safeheaven.repository.ReportsRepository;
import com.hackathon.safeheaven.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PostsRepository postsRepository;
	
	@Autowired
	ReportsRepository reportsRepository;
	
	@Autowired
	ReportsCommentsRepository reportsCommentsRepository;
	
	@Autowired
	PostsCommentsRepository postsCommentsRepository;
		
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	public User addUser(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}

	public List<Reports> getAllReports() {
		// TODO Auto-generated method stub
		return reportsRepository.findAll();
	}

	public Reports addReport(Reports reports) {
		// TODO Auto-generated method stub
		return reportsRepository.save(reports);
	}

	public List<Posts> getAllPosts() {
		// TODO Auto-generated method stub
		return postsRepository.findAll();
	}

	public Posts addPost(Posts posts) {
		// TODO Auto-generated method stub
		return postsRepository.save(posts);
	}

	@Autowired
	private BCryptPasswordEncoder passEncoder;

	public User signUp(User user) throws InvalidUsernameException {
		//check for username duplicacy 
		Optional<User> optional = userRepository.findByUsername(user.getUsername());
		if(optional.isPresent()) {
			throw new InvalidUsernameException("Username already in use");
		}
		
		//encrypt the password 
		String encryptedPass = passEncoder.encode(user.getPassword());
		user.setPassword(encryptedPass);
		
		 
		return userRepository.save(user);
	}

	public List<Posts> getPostByUserId(int id) {
		// TODO Auto-generated method stub
		return postsRepository.findByUserId(id);
	}

	public List<Reports> getReportByUserId(int id) {
		// TODO Auto-generated method stub
		return reportsRepository.findByUserId(id);	
		}

	public List<ReportsComments> getReportsCommentsById(int id) {
		// TODO Auto-generated method stub
		return reportsCommentsRepository.findByIdl(id);
	}

	public ReportsComments addReportsComments(ReportsComments reportsComments) {
		// TODO Auto-generated method stub
		return reportsCommentsRepository.save(reportsComments);
	}

	public List<PostsComments> getPostsCommentsById(int id) {
		// TODO Auto-generated method stub
		return postsCommentsRepository.findByIdList(id);
	}

	public PostsComments addPostsComments(PostsComments postComments) {
		// TODO Auto-generated method stub
		return postsCommentsRepository.save(postComments);
	}

	public Optional<Posts> getActualPostById(int id) {
		// TODO Auto-generated method stub
		return postsRepository.findById(id);
	}

}
