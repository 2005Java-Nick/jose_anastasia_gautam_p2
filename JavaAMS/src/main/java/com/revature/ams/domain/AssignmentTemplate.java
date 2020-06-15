package com.revature.ams.domain;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "ams.assignment_template")
public class AssignmentTemplate implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -849227214843531351L;

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
	
	@OneToMany(mappedBy="assignmentTemplate",  
            targetEntity=Question.class, 
            fetch=FetchType.EAGER, 
            cascade = CascadeType.ALL)
    private Set<Question> questions = new HashSet<Question>();
	
	@OneToMany(mappedBy="assignmentTemplate",  
            targetEntity=AssignmentInstance.class, 
            fetch=FetchType.EAGER, 
            cascade = CascadeType.ALL)
	private Set<AssignmentInstance> assignmentInstances = new HashSet<AssignmentInstance>();
	
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
	
	public Set<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}
}
