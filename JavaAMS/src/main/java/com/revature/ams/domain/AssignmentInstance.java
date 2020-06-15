package com.revature.ams.domain;

import java.io.Serializable;
import java.sql.Timestamp;
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
	
	@Column(name = "assignment_completion_datetime")
	private java.sql.Timestamp assignmentCompletionDatetime; //TIMESTAMP
	
	@Column(name = "assignment_graded_datetime")
	private java.sql.Timestamp assignmentGradedDatetime; //TIMESTAMP
	
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
	
	public int getAssignmentInstanceId() {
		return assignmentInstanceId;
	}
	public void setAssignmentInstanceId(int assignmentInstanceId) {
		this.assignmentInstanceId = assignmentInstanceId;
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

	public Set<Answers> getAnswers() {
		return answers;
	}

	public void setAnswers(Set<Answers> answers) {
		this.answers = answers;
	}

}
