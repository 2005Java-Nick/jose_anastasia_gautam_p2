package com.revature.ams.dto;

import java.util.ArrayList;
import java.util.List;

public class AssignmentInstanceDTO {
	private int instanceId;
	private String subject;
	private String assignmentType;
	private String assignmentStatus;
	private String assignmentName;
	private String teacherName;
	private String studentName;
	private String dueDate;
	private String dueTime;
	private String completionDate;
	private String completionTime;
	private String gradedDate;
	private String gradedTime;
	private Double grade;
	private List<QuestionContent> questionContent = new ArrayList<QuestionContent>();
	
	public int getInstanceId() {
		return instanceId;
	}
	public void setInstanceId(int instanceId) {
		this.instanceId = instanceId;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getAssignmentType() {
		return assignmentType;
	}
	public void setAssignmentType(String assignmentType) {
		this.assignmentType = assignmentType;
	}
	public String getAssignmentStatus() {
		return assignmentStatus;
	}
	public void setAssignmentStatus(String assignmentStatus) {
		this.assignmentStatus = assignmentStatus;
	}
	public String getAssignmentName() {
		return assignmentName;
	}
	public void setAssignmentName(String assignmentName) {
		this.assignmentName = assignmentName;
	}
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
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
	public String getCompletionDate() {
		return completionDate;
	}
	public void setCompletionDate(String completionDate) {
		this.completionDate = completionDate;
	}
	public String getCompletionTime() {
		return completionTime;
	}
	public void setCompletionTime(String completionTime) {
		this.completionTime = completionTime;
	}
	public String getGradedDate() {
		return gradedDate;
	}
	public void setGradedDate(String gradedDate) {
		this.gradedDate = gradedDate;
	}
	public String getGradedTime() {
		return gradedTime;
	}
	public void setGradedTime(String gradedTime) {
		this.gradedTime = gradedTime;
	}
	public Double getGrade() {
		return grade;
	}
	public void setGrade(Double grade) {
		this.grade = grade;
	}
	public List<QuestionContent> getQuestionContent() {
		return questionContent;
	}
	public void setQuestionContent(List<QuestionContent> questionContent) {
		this.questionContent = questionContent;
	}
	
}
