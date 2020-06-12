package com.revature.ams.domain;

public class AssignmentTemplate {
	
	private int assignmentTemplateId; //SERIAL PRIMARY KEY
	private String assignmentType;
	private String assignmentTitle;
	//private LocalDateTime assignmentCreationDatetime //TIMESTAMP WITH TIMEZONE
	//private LocalDateTime assignmentDueDatetime //TIMESTAMP WITH TIMEZONE
	private double assignmentMaxpoints; //check (assignment_maxpoints = 100.00)
	
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
	public double getAssignmentMaxpoints() {
		return assignmentMaxpoints;
	}
	public void setAssignmentMaxpoints(double assignmentMaxpoints) {
		this.assignmentMaxpoints = assignmentMaxpoints;
	}

}
