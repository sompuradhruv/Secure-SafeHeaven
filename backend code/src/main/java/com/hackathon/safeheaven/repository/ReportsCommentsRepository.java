package com.hackathon.safeheaven.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hackathon.safeheaven.model.ReportsComments;


@Repository
public interface ReportsCommentsRepository extends JpaRepository<ReportsComments,Integer>{

	@Query("SELECT r FROM ReportsComments r WHERE r.reports.id = :id")
	List<ReportsComments> findByIdl(int id);

}