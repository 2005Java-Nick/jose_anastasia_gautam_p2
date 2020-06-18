package com.revature.ams.dto;
import java.util.List;

public class AssignedAssignmentDTO {
	private int teacherId;
	private String assignmentType;
	private String assignmentTitle;
	private String assignmentClass;
	private String dueDate;
	private String dueTime;
	List<String> questions;
	List<Double> maxpoints;
	String token;
	
	public int getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}
	public String getAssignmentType() {
		return assignmentType;
	}
	public void setAssignmentType(String assignmentType) {
		this.assignmentType = assignmentType;
	}
	public String getAssignmentTitle() {
		return assignmentTitle;
	}
	public void setAssignmentTitle(String assignmentTitle) {
		this.assignmentTitle = assignmentTitle;
	}
	public String getAssignmentClass() {
		return assignmentClass;
	}
	public void setAssignmentClass(String assignmentClass) {
		this.assignmentClass = assignmentClass;
	}
	public String getDueDate() {
		return dueDate;
	}
	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	public String getDueTime() {
		return dueTime;
	}
	public void setDueTime(String dueTime) {
		this.dueTime = dueTime;
	}
	public List<String> getQuestions() {
		return questions;
	}
	public void setQuestions(List<String> questions) {
		this.questions = questions;
	}
	public List<Double> getMaxpoints() {
		return maxpoints;
	}
	public void setMaxpoints(List<Double> maxpoints) {
		this.maxpoints = maxpoints;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	
	
	
	
}
