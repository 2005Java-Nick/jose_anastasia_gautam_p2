package com.revature.ams.domain;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "ams.answers")
public class Answers implements Serializable{ //many-to-one with question, many-to-one with student, many-to-one with assignment_instance
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3893397961391251209L;


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "answers_id")
	private int answersId; //SERIAL PRIMARY KEY,
	
	
//	private int answersQuestionsId; //FOREIGN KEY
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "answers_questions_id")
	private Question question;
	
	//private int answersStudentId; //FOREIGN KEY
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "answers_student_id")
	private Student student;
	
	
	//private  int answersAssignmentInstanceId; //FOREIGN KEY
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "answers_assignment_instance_id")
	private AssignmentInstance assignmentInstance;
	
	
	@Column(name = "answers_string")
	private String answersString;
	
	@Column(name = "answers_points")
	private double answersPoints; //check(answers_points<=100.00)
	
	@Column(name = "answers_comments")
	private String answersComments;
	
	
	public Answers() {
		super();
		// TODO Auto-generated constructor stub
	}
	



	public int getAnswersId() {
		return answersId;
	}
	public void setAnswersId(int answersId) {
		this.answersId = answersId;
	}
	public String getAnswersString() {
		return answersString;
	}
	public void setAnswersString(String answersString) {
		this.answersString = answersString;
	}
	public double getAnswersPoints() {
		return answersPoints;
	}
	public void setAnswersPoints(double answersPoints) {
		this.answersPoints = answersPoints;
	}
	public String getAnswersComments() {
		return answersComments;
	}
	public void setAnswersComments(String answersComments) {
		this.answersComments = answersComments;
	}




	public Question getQuestion() {
		return question;
	}




	public void setQuestion(Question question) {
		this.question = question;
	}




	public Student getStudent() {
		return student;
	}




	public void setStudent(Student student) {
		this.student = student;
	}




	public AssignmentInstance getAssignmentInstance() {
		return assignmentInstance;
	}




	public void setAssignmentInstance(AssignmentInstance assignmentInstance) {
		this.assignmentInstance = assignmentInstance;
	}
	

}
