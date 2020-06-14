package com.revature.ams.domain;

import java.sql.Timestamp;

import javax.persistence.*;

@Entity
@Table(name = "ams.assignment_template")
public class AssignmentTemplate {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "assignment_template_id")
	private int assignmentTemplateId; //SERIAL PRIMARY KEY
	
	@Column(name = "assignment_type")
	private String assignmentType;
	
	@Column(name = "assignment_title")
	private String assignmentTitle;
	
	@Column(name = "assignment_creation_datetime")
	private java.sql.Timestamp assignmentCreationDatetime; //TIMESTAMP
	
	@Column(name = "assignment_due_datetime")
	private java.sql.Timestamp assignmentDueDatetime; //TIMESTAMP
	
	@Column(name = "assignment_maxpoints")
	private double assignmentMaxpoints; //check (assignment_maxpoints = 100.00)
	
	public AssignmentTemplate() {
		super();
	}
	
	public AssignmentTemplate(int assignmentTemplateId, String assignmentType, String assignmentTitle,
			Timestamp assignmentCreationDatetime, Timestamp assignmentDueDatetime, double assignmentMaxpoints) {
		super();
		this.assignmentTemplateId = assignmentTemplateId;
		this.assignmentType = assignmentType;
		this.assignmentTitle = assignmentTitle;
		this.assignmentCreationDatetime = assignmentCreationDatetime;
		this.assignmentDueDatetime = assignmentDueDatetime;
		this.assignmentMaxpoints = assignmentMaxpoints;
	}
	
	public int getAssignmentTemplateId() {
		return assignmentTemplateId;
	}
	public void setAssignmentTemplateId(int assignmentTemplateId) {
		this.assignmentTemplateId = assignmentTemplateId;
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
	public java.sql.Timestamp getAssignmentCreationDatetime() {
		return assignmentCreationDatetime;
	}
	public void setAssignmentCreationDatetime(java.sql.Timestamp assignmentCreationDatetime) {
		this.assignmentCreationDatetime = assignmentCreationDatetime;
	}
	public java.sql.Timestamp getAssignmentDueDatetime() {
		return assignmentDueDatetime;
	}
	public void setAssignmentDueDatetime(java.sql.Timestamp assignmentDueDatetime) {
		this.assignmentDueDatetime = assignmentDueDatetime;
	}
	public double getAssignmentMaxpoints() {
		return assignmentMaxpoints;
	}
	public void setAssignmentMaxpoints(double assignmentMaxpoints) {
		this.assignmentMaxpoints = assignmentMaxpoints;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((assignmentCreationDatetime == null) ? 0 : assignmentCreationDatetime.hashCode());
		result = prime * result + ((assignmentDueDatetime == null) ? 0 : assignmentDueDatetime.hashCode());
		long temp;
		temp = Double.doubleToLongBits(assignmentMaxpoints);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + assignmentTemplateId;
		result = prime * result + ((assignmentTitle == null) ? 0 : assignmentTitle.hashCode());
		result = prime * result + ((assignmentType == null) ? 0 : assignmentType.hashCode());
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
		AssignmentTemplate other = (AssignmentTemplate) obj;
		if (assignmentCreationDatetime == null) {
			if (other.assignmentCreationDatetime != null)
				return false;
		} else if (!assignmentCreationDatetime.equals(other.assignmentCreationDatetime))
			return false;
		if (assignmentDueDatetime == null) {
			if (other.assignmentDueDatetime != null)
				return false;
		} else if (!assignmentDueDatetime.equals(other.assignmentDueDatetime))
			return false;
		if (Double.doubleToLongBits(assignmentMaxpoints) != Double.doubleToLongBits(other.assignmentMaxpoints))
			return false;
		if (assignmentTemplateId != other.assignmentTemplateId)
			return false;
		if (assignmentTitle == null) {
			if (other.assignmentTitle != null)
				return false;
		} else if (!assignmentTitle.equals(other.assignmentTitle))
			return false;
		if (assignmentType == null) {
			if (other.assignmentType != null)
				return false;
		} else if (!assignmentType.equals(other.assignmentType))
			return false;
		return true;
	}
}
