package com.hackathon.safeheaven.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.safeheaven.model.Posts;
import com.hackathon.safeheaven.model.Reports;

@Repository
public interface ReportsRepository extends JpaRepository<Reports,Integer>{

	List<Reports> findByUserId(int id);

}