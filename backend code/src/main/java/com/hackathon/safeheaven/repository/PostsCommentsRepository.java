package com.hackathon.safeheaven.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hackathon.safeheaven.model.PostsComments;

@Repository
public interface PostsCommentsRepository extends JpaRepository<PostsComments,Integer>{

	@Query("SELECT p FROM PostsComments p WHERE p.posts.id = :id")
	List<PostsComments> findByIdList(int id);

}