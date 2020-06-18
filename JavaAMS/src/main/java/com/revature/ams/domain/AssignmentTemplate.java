package com.revature.ams.domain;

import java.io.Serializable;
import java.sql.*;
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
	
	@Column(name = "assignment_creation_date")
	private java.sql.Date assignmentCreationDate; //DATE
	
	@Column(name = "assignment_creation_time")
	private java.sql.Time assignmentCreationTime; //TIME
	
	@Column(name = "assignment_due_date")
	private java.sql.Date assignmentDueDate; //DATE
	
	@Column(name = "assignment_due_time")
	private java.sql.Time assignmentDueTime; //TIME
	
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
	
	//Can be used to get an AssignmentTemplate that already exists
	public AssignmentTemplate(int assignmentTemplateId, String assignmentType, String assignmentTitle,
			Date assignmentCreationDate, Time assignmentCreationTime, Date assignmentDueDate, Time assignmentDueTime,
			double assignmentMaxpoints) {
		super();
		this.assignmentTemplateId = assignmentTemplateId;
		this.assignmentType = assignmentType;
		this.assignmentTitle = assignmentTitle;
		this.assignmentCreationDate = assignmentCreationDate;
		this.assignmentCreationTime = assignmentCreationTime;
		this.assignmentDueDate = assignmentDueDate;
		this.assignmentDueTime = assignmentDueTime;
		this.assignmentMaxpoints = assignmentMaxpoints;
	}
	
	//Can be used to create a new AssignmentTemplate (the creation dates and creation times refer to the CURRENT dates and CURRENT times)
			public AssignmentTemplate(String assignmentType, String assignmentTitle, Date assignmentDueDate, Time assignmentDueTime) {
				super();
				//this.assignmentTemplateId = assignmentTemplateId;
				this.assignmentType = assignmentType;
				this.assignmentTitle = assignmentTitle;
				this.assignmentCreationDate = java.sql.Date.valueOf(java.time.LocalDate.now());
				this.assignmentCreationTime = java.sql.Time.valueOf(java.time.LocalTime.now());
				this.assignmentDueDate = assignmentDueDate;
				this.assignmentDueTime = assignmentDueTime;
				this.assignmentMaxpoints = 100;
			}
	
	//Constructor contains Set of Questions and Assignment Instances
	public AssignmentTemplate(int assignmentTemplateId, String assignmentType, String assignmentTitle,
			Date assignmentCreationDate, Time assignmentCreationTime, Date assignmentDueDate, Time assignmentDueTime,
			double assignmentMaxpoints, Set<Question> questions, Set<AssignmentInstance> assignmentInstances) {
		super();
		this.assignmentTemplateId = assignmentTemplateId;
		this.assignmentType = assignmentType;
		this.assignmentTitle = assignmentTitle;
		this.assignmentCreationDate = assignmentCreationDate;
		this.assignmentCreationTime = assignmentCreationTime;
		this.assignmentDueDate = assignmentDueDate;
		this.assignmentDueTime = assignmentDueTime;
		this.assignmentMaxpoints = assignmentMaxpoints;
		this.questions = questions;
		this.assignmentInstances = assignmentInstances;
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
	
	public java.sql.Date getAssignmentCreationDate() {
		return assignmentCreationDate;
	}
	
	public void setAssignmentCreationDate(java.sql.Date assignmentCreationDate) {
		this.assignmentCreationDate = assignmentCreationDate;
	}
	
	public java.sql.Time getAssignmentCreationTime() {
		return assignmentCreationTime;
	}
	
	public void setAssignmentCreationTime(java.sql.Time assignmentCreationTime) {
		this.assignmentCreationTime = assignmentCreationTime;
	}
	
	public java.sql.Date getAssignmentDueDate() {
		return assignmentDueDate;
	}
	
	public void setAssignmentDueDate(java.sql.Date assignmentDueDate) {
		this.assignmentDueDate = assignmentDueDate;
	}
	
	public java.sql.Time getAssignmentDueTime() {
		return assignmentDueTime;
	}
	
	public void setAssignmentDueDatetime(java.sql.Time assignmentDueTime) {
		this.assignmentDueTime = assignmentDueTime;
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

	public Set<AssignmentInstance> getAssignmentInstances() {
		return assignmentInstances;
	}

	public void setAssignmentInstances(Set<AssignmentInstance> assignmentInstances) {
		this.assignmentInstances = assignmentInstances;
	}
}
