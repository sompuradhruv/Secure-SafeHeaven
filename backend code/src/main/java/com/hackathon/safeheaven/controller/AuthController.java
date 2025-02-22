package com.hackathon.safeheaven.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.safeheaven.JwtUtil;
import com.hackathon.safeheaven.dto.JwtDto;
import com.hackathon.safeheaven.dto.ResponseMessageDto;
import com.hackathon.safeheaven.exception.InvalidUsernameException;
import com.hackathon.safeheaven.model.User;
import com.hackathon.safeheaven.service.UserSecurityService;
import com.hackathon.safeheaven.service.UserService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private UserSecurityService userSecurityService;
	
	@Autowired
	private UserService userService;
		
	@PostMapping("/api/token")
	public ResponseEntity<?> getToken(@RequestBody User user, JwtDto dto) {
		try {
			Authentication auth = new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());
			authenticationManager.authenticate(auth);
			
			// Check if username is in DB
			user = (User) userSecurityService.loadUserByUsername(user.getUsername());
			
			String jwt = jwtUtil.generateToken(user.getUsername());
			
			dto.setUsername(user.getUsername());
			dto.setToken(jwt);
			
			return ResponseEntity.ok(dto);
		} catch (AuthenticationException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}
	

	@GetMapping("/api/hello")
	public String sayHello(Principal principal) {
		String user = "";
		if(principal == null) {
			user = "TEMP_USER";
		}
		else {
			user = principal.getName();
		}
		return "api accessed by: " + user;
	}
	
	@PostMapping("/auth/sign-up")
	public ResponseEntity<?> signUp(@RequestBody User user,ResponseMessageDto dto){
		try {
			return ResponseEntity.ok(userService.signUp(user));
		} catch (InvalidUsernameException e) {
			dto.setMsg(e.getMessage());
			 return ResponseEntity.badRequest().body(dto);
		}
	}
	
	
	@GetMapping("/auth/user")
	public User getUserDetails(Principal principal) {
		String loggedInUsername = principal.getName();
		User user  = (User)userSecurityService.loadUserByUsername(loggedInUsername);
		return user; 
	}
	
}