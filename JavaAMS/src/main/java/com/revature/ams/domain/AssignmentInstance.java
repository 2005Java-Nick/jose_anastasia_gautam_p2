package com.revature.ams.domain;

import java.sql.Timestamp;

import javax.persistence.*;

@Entity
@Table(name = "ams.assignment_instance")
public class AssignmentInstance { //many to one with assignment_template, many to one with teacher, many to one with student
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "assignment_instance_id")
	private int assignmentInstanceId; //SERIAL PRIMARY KEY
	
	
	private int assignmentTemplateId; //FOREIGN KEY
	
	
	private int assignmentTeacherId; //FOREIGN KEY
	
	
	private int assignmentStudentId; //FOREIGN KEY
	
	@Column(name = "assignment_completion_datetime")
	private java.sql.Timestamp assignmentCompletionDatetime; //TIMESTAMP
	
	@Column(name = "assignment_graded_datetime")
	private java.sql.Timestamp assignmentGradedDatetime; //TIMESTAMP
	
	@Column(name = "assignment_finalgrade")
	private double assignmentFinalGrade; //check(assignment_finalgrade <= 100.00)
	
	@Column(name = "assignment_status")
	private String assignmentStatus; //TYPE status AS ENUM('NEW', 'COMPLETED', 'GRADED')
	
	public AssignmentInstance() {
		super();
	}
	
	public AssignmentInstance(int assignmentInstanceId, int assignmentTemplateId, int assignmentTeacherId,
			int assignmentStudentId, Timestamp assignmentCompletionDatetime, Timestamp assignmentGradedDatetime,
			double assignmentFinalGrade, String assignmentStatus) {
		super();
		this.assignmentInstanceId = assignmentInstanceId;
		this.assignmentTemplateId = assignmentTemplateId;
		this.assignmentTeacherId = assignmentTeacherId;
		this.assignmentStudentId = assignmentStudentId;
		this.assignmentCompletionDatetime = assignmentCompletionDatetime;
		this.assignmentGradedDatetime = assignmentGradedDatetime;
		this.assignmentFinalGrade = assignmentFinalGrade;
		this.assignmentStatus = assignmentStatus;
	}
	
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
	public java.sql.Timestamp getAssignmentCompletionDatetime() {
		return assignmentCompletionDatetime;
	}
	public void setAssignmentCompletionDatetime(java.sql.Timestamp assignmentCompletionDatetime) {
		this.assignmentCompletionDatetime = assignmentCompletionDatetime;
	}
	public java.sql.Timestamp getAssignmentGradedDatetime() {
		return assignmentGradedDatetime;
	}
	public void setAssignmentGradedDatetime(java.sql.Timestamp assignmentGradedDatetime) {
		this.assignmentGradedDatetime = assignmentGradedDatetime;
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((assignmentCompletionDatetime == null) ? 0 : assignmentCompletionDatetime.hashCode());
		long temp;
		temp = Double.doubleToLongBits(assignmentFinalGrade);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((assignmentGradedDatetime == null) ? 0 : assignmentGradedDatetime.hashCode());
		result = prime * result + assignmentInstanceId;
		result = prime * result + ((assignmentStatus == null) ? 0 : assignmentStatus.hashCode());
		result = prime * result + assignmentStudentId;
		result = prime * result + assignmentTeacherId;
		result = prime * result + assignmentTemplateId;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AssignmentInstance other = (AssignmentInstance) obj;
		if (assignmentCompletionDatetime == null) {
			if (other.assignmentCompletionDatetime != null)
				return false;
		} else if (!assignmentCompletionDatetime.equals(other.assignmentCompletionDatetime))
			return false;
		if (Double.doubleToLongBits(assignmentFinalGrade) != Double.doubleToLongBits(other.assignmentFinalGrade))
			return false;
		if (assignmentGradedDatetime == null) {
			if (other.assignmentGradedDatetime != null)
				return false;
		} else if (!assignmentGradedDatetime.equals(other.assignmentGradedDatetime))
			return false;
		if (assignmentInstanceId != other.assignmentInstanceId)
			return false;
		if (assignmentStatus == null) {
			if (other.assignmentStatus != null)
				return false;
		} else if (!assignmentStatus.equals(other.assignmentStatus))
			return false;
		if (assignmentStudentId != other.assignmentStudentId)
			return false;
		if (assignmentTeacherId != other.assignmentTeacherId)
			return false;
		if (assignmentTemplateId != other.assignmentTemplateId)
			return false;
		return true;
	}

}
