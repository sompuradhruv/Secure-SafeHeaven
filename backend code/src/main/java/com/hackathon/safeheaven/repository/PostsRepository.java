package com.hackathon.safeheaven.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.safeheaven.model.Posts;

@Repository
public interface PostsRepository extends JpaRepository<Posts,Integer>{

	List<Posts> findByUserId(int id);

}
