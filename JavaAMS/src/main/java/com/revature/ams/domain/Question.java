package com.revature.ams.domain;

import javax.persistence.*;

@Entity
@Table(name = "ams.question")
public class Question { //one-to-many with assignment_template
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "question_id")
	private int questionId;  //SERIAL PRIMARY KEY
	
	//FINISH
	private int assignmentTemplateId; //FOREIGN KEY
	
	@Column(name = "question_number")
	private int question_number; 
	
	@Column(name = "question_string")
	private String questionString;
	
	//Max number of points you can get for question
	
	@Column(name = "question_maxpoints")
	private double questionMaxpoints; //check(question_maxpoints<=100.00)
									  
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Question(int questionId, int assignmentTemplateId, int question_number, String questionString,
			double question_maxpoints) {
		super();
		this.questionId = questionId;
		this.assignmentTemplateId = assignmentTemplateId;
		this.question_number = question_number;
		this.questionString = questionString;
		this.questionMaxpoints = question_maxpoints;
	}


	public int getQuestionId() {
		return questionId;
	}
	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}
	public int getAssignmentTemplateId() {
		return assignmentTemplateId;
	}
	public void setAssignmentTemplateId(int assignmentTemplateId) {
		this.assignmentTemplateId = assignmentTemplateId;
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + assignmentTemplateId;
		result = prime * result + questionId;
		result = prime * result + ((questionString == null) ? 0 : questionString.hashCode());
		long temp;
		temp = Double.doubleToLongBits(questionMaxpoints);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + question_number;
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
		Question other = (Question) obj;
		if (assignmentTemplateId != other.assignmentTemplateId)
			return false;
		if (questionId != other.questionId)
			return false;
		if (questionString == null) {
			if (other.questionString != null)
				return false;
		} else if (!questionString.equals(other.questionString))
			return false;
		if (Double.doubleToLongBits(questionMaxpoints) != Double.doubleToLongBits(other.questionMaxpoints))
			return false;
		if (question_number != other.question_number)
			return false;
		return true;
	}
	
	

}
