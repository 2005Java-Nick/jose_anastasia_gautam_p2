package com.revature.ams.domain;

import java.io.Serializable;
import java.sql.*;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "ams.assignment_instance")
public class AssignmentInstance implements Serializable{ //many to one with assignment_template, many to one with teacher, many to one with student
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5612723644835373175L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "assignment_instance_id")
	private int assignmentInstanceId; //SERIAL PRIMARY KEY
	
	//private int assignmentTemplateId; //FOREIGN KEY
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "assignment_template_id")
	private AssignmentTemplate assignmentTemplate;
	
	//private int assignmentTeacherId;-- FOREIGN KEY
	@ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "assignment_teacher_id")
	private Teacher teacher;
	//private int assignmentStudentId;-- FOREIGN KEY
	@ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "assignment_student_id")
	private Student student;
	
	@Column(name = "assignment_completion_date")
	private java.sql.Date assignmentCompletionDate; //DATE
	
	@Column(name = "assignment_completion_time")
	private java.sql.Time assignmentCompletionTime; //TIME
	
	@Column(name = "assignment_graded_date")
	private java.sql.Date assignmentGradedDate; //DATE
	
	@Column(name = "assignment_graded_time")
	private java.sql.Time assignmentGradedTime; //TIME
	
	@Column(name = "assignment_finalgrade")
	private double assignmentFinalGrade; //check(assignment_finalgrade <= 100.00)
	
	@Column(name = "assignment_status")
	private String assignmentStatus; //TYPE status AS ENUM('NEW', 'COMPLETED', 'GRADED')
	
	@OneToMany(mappedBy="assignmentInstance",  
            targetEntity=Answers.class, 
            fetch=FetchType.EAGER, 
            cascade = CascadeType.ALL)
	private Set<Answers> answers = new HashSet<Answers>();
	
	public AssignmentInstance() {
		super();
	}
	
	//Can be used to get an AssignmentInstance that already exists
	public AssignmentInstance(int assignmentInstanceId, AssignmentTemplate assignmentTemplate,
			Date assignmentCompletionDate, Time assignmentCompletionTime, Date assignmentGradedDate,
			Time assignmentGradedTime, double assignmentFinalGrade, String assignmentStatus) {
		super();
		this.assignmentInstanceId = assignmentInstanceId;
		this.assignmentTemplate = assignmentTemplate;
		this.assignmentCompletionDate = assignmentCompletionDate;
		this.assignmentCompletionTime = assignmentCompletionTime;
		this.assignmentGradedDate = assignmentGradedDate;
		this.assignmentGradedTime = assignmentGradedTime;
		this.assignmentFinalGrade = assignmentFinalGrade;
		this.assignmentStatus = assignmentStatus;
	}
	
	//Can be used to create a new AssignmentInstance 
	public AssignmentInstance(AssignmentTemplate assignmentTemplate,String assignmentStatus) {
		super();
		//this.assignmentInstanceId = assignmentInstanceId;
		this.assignmentTemplate = assignmentTemplate;
		this.assignmentCompletionDate = null;
		this.assignmentCompletionTime = null;
		this.assignmentGradedDate = null;
		this.assignmentGradedTime = null;
		this.assignmentStatus = "NEW";
	}
	
	//Constructor contains Set of Answers
	public AssignmentInstance(int assignmentInstanceId, AssignmentTemplate assignmentTemplate, Teacher teacher,
			Student student, Date assignmentCompletionDate, Time assignmentCompletionTime,
			Date assignmentGradedDate, Time assignmentGradedTime, double assignmentFinalGrade, String assignmentStatus,
			Set<Answers> answers) {
		super();
		this.assignmentInstanceId = assignmentInstanceId;
		this.assignmentTemplate = assignmentTemplate;
		this.teacher = teacher;
		this.student = student;
		this.assignmentCompletionDate = assignmentCompletionDate;
		this.assignmentCompletionTime = assignmentCompletionTime;
		this.assignmentGradedDate = assignmentGradedDate;
		this.assignmentGradedTime = assignmentGradedTime;
		this.assignmentFinalGrade = assignmentFinalGrade;
		this.assignmentStatus = assignmentStatus;
		this.answers = answers;
	}

	public int getAssignmentInstanceId() {
		return assignmentInstanceId;
	}
	
	public void setAssignmentInstanceId(int assignmentInstanceId) {
		this.assignmentInstanceId = assignmentInstanceId;
	}
	
	public java.sql.Date getAssignmentCompletionDate() {
		return assignmentCompletionDate;
	}
	
	public void setAssignmentCompletionDate(java.sql.Date assignmentCompletionDate) {
		this.assignmentCompletionDate = assignmentCompletionDate;
	}
	
	public java.sql.Time getAssignmentCompletionTime() {
		return assignmentCompletionTime;
	}
	
	public void setAssignmentCompletionTime(java.sql.Time assignmentCompletionTime) {
		this.assignmentCompletionTime = assignmentCompletionTime;
	}
	
	public java.sql.Date getAssignmentGradedDate() {
		return assignmentGradedDate;
	}
	
	public void setAssignmentGradedDate(java.sql.Date assignmentGradedDate) {
		this.assignmentGradedDate = assignmentGradedDate;
	}
	
	public java.sql.Time getAssignmentGradedTime() {
		return assignmentGradedTime;
	}
	
	public void setAssignmentGradedTime(java.sql.Time assignmentGradedTime) {
		this.assignmentGradedTime = assignmentGradedTime;
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

	public Set<Answers> getAnswers() {
		return answers;
	}

	public void setAnswers(Set<Answers> answers) {
		this.answers = answers;
	}

}
