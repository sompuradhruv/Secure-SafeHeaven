package com.hackathon.safeheaven.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hackathon.safeheaven.model.User;
import com.hackathon.safeheaven.repository.UserRepository;

@Service
public class UserSecurityService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
  /*  @Autowired
    private BCryptPasswordEncoder passEncoder;*/

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optional = userRepository.findByUsername(username);
		if (optional.isEmpty())
			throw new UsernameNotFoundException ("Invalid Username");
			
		User user = optional.get();
				
		return user;
	}


}