package com.revature.ams.dto;

public class QuestionContent {
	private String questionString;
	private double maxPoints;
	private String answer;
	private double questionPoints;
	private String comment;
	
	public String getQuestionString() {
		return questionString;
	}
	public void setQuestionString(String questionString) {
		this.questionString = questionString;
	}
	public double getMaxPoints() {
		return maxPoints;
	}
	public void setMaxPoints(double maxPoints) {
		this.maxPoints = maxPoints;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public double getQuestionPoints() {
		return questionPoints;
	}
	public void setQuestionPoints(double questionPoints) {
		this.questionPoints = questionPoints;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	
}
