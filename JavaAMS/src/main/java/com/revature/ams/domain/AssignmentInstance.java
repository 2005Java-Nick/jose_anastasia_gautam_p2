package com.revature.ams.domain;

public class AssignmentInstance { //many to one with assignment_template, many to one with teacher, many to one with student
	
	private int assignmentInstanceId; //SERIAL PRIMARY KEY
	private int assignmentTemplateId; //FOREIGN KEY
	private int assignmentTeacherId; //FOREIGN KEY
	private int assignmentStudentId; //FOREIGN KEY
	//private LocalDateTime assignmentCompletionDatetime; //TIMESTAMP WITH TIMEZONE
	//private LocalDateTime assignmentGradedDatetime; //TIMESTAMP WITH TIMEZONE
	private double assignmentFinalGrade; //check(assignment_finalgrade <= 100.00)
	private String assignmentStatus; //TYPE status AS ENUM('NEW', 'COMPLETED', 'GRADED')
	
	
	public int getAssignmentInstanceId() {
		return assignmentInstanceId;
	}
	public void setAssignmentInstanceId(int assignmentInstanceId) {
		this.assignmentInstanceId = assignmentInstanceId;
	}
	public int getAssignmentTemplateId() {
		return assignmentTemplateId;
	}
	public void setAssignmentTemplateId(int assignmentTemplateId) {
		this.assignmentTemplateId = assignmentTemplateId;
	}
	public int getAssignmentTeacherId() {
		return assignmentTeacherId;
	}
	public void setAssignmentTeacherId(int assignmentTeacherId) {
		this.assignmentTeacherId = assignmentTeacherId;
	}
	public int getAssignmentStudentId() {
		return assignmentStudentId;
	}
	public void setAssignmentStudentId(int assignmentStudentId) {
		this.assignmentStudentId = assignmentStudentId;
	}
	public double getAssignmentFinalGrade() {
		return assignmentFinalGrade;
	}
	public void setAssignmentFinalGrade(double assignmentFinalGrade) {
		this.assignmentFinalGrade = assignmentFinalGrade;
	}
	public String getAssignmentStatus() {
		return assignmentStatus;
	}
	public void setAssignmentStatus(String assignmentStatus) {
		this.assignmentStatus = assignmentStatus;
	}

}
