package com.revature.ams.domain;

public class Question {
	
	private int questionId;  //SERIAL PRIMARY KEY
	private int assignmentTemplateId; //FOREIGN KEY
	private int question_number; 
	private String questionString;
	private double question_maxpoints;

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
		this.question_maxpoints = question_maxpoints;
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
	public double getQuestion_maxpoints() {
		return question_maxpoints;
	}
	public void setQuestion_maxpoints(double question_maxpoints) {
		this.question_maxpoints = question_maxpoints;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + assignmentTemplateId;
		result = prime * result + questionId;
		result = prime * result + ((questionString == null) ? 0 : questionString.hashCode());
		long temp;
		temp = Double.doubleToLongBits(question_maxpoints);
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
		if (Double.doubleToLongBits(question_maxpoints) != Double.doubleToLongBits(other.question_maxpoints))
			return false;
		if (question_number != other.question_number)
			return false;
		return true;
	}
	
	

}
