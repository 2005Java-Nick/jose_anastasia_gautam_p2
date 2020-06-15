package com.revature.ams.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "ams.question")
public class Question implements Serializable{ //many to one - assignment_template
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 599651000906892408L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private int questionId;  //SERIAL PRIMARY KEY
	
	//private int assignmentTemplateId;-- FOREIGN KEY
	@ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "assignment_template_id")
	private AssignmentTemplate assignmentTemplate;
	
	@Column(name = "question_number")
	private int question_number; 
	
	@Column(name = "question_string")
	private String questionString;
	
	//Max number of points you can get for question
	@Column(name = "question_maxpoints")
	private double questionMaxpoints; //check(question_maxpoints<=100.00)
	
	@OneToMany(mappedBy="question",  
            targetEntity=Answers.class, 
            fetch=FetchType.EAGER, 
            cascade = CascadeType.ALL)
	private Set<Answers> answers = new HashSet<Answers>();
									  
	public Question() {
		super();
	}

	public int getQuestionId() {
		return questionId;
	}
	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}
	
	public AssignmentTemplate getAssignmentTemplate() {
		return assignmentTemplate;
	}

	public void setAssignmentTemplate(AssignmentTemplate assignmentTemplate) {
		this.assignmentTemplate = assignmentTemplate;
	}
	
	public int getQuestion_number() {
		return question_number;
	}
	public void setQuestion_number(int question_number) {
		this.question_number = question_number;
	}
	public String getQuestionString() {
		return questionString;
	}
	public void setQuestionString(String questionString) {
		this.questionString = questionString;
	}
	public double getQuestionMaxpoints() {
		return questionMaxpoints;
	}
	public void setQuestionMaxpoints(double question_maxpoints) {
		this.questionMaxpoints = question_maxpoints;
	}

	public Set<Answers> getAnswers() {
		return answers;
	}

	public void setAnswers(Set<Answers> answers) {
		this.answers = answers;
	}

	

}
