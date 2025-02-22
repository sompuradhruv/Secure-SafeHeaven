package com.hackathon.safeheaven.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Reports {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String description;
	private String location;
	
	private String abuseType;
	private String whoAbused;
	private String evidence;
	
	@ManyToOne
	User user;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getAbuseType() {
		return abuseType;
	}
	public void setAbuseType(String abuseType) {
		this.abuseType = abuseType;
	}
	public String getWhoAbused() {
		return whoAbused;
	}
	public void setWhoAbused(String whoAbused) {
		this.whoAbused = whoAbused;
	}
	public String getEvidence() {
		return evidence;
	}
	public void setEvidence(String evidence) {
		this.evidence = evidence;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

}
