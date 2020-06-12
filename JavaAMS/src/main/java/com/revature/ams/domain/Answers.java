package com.revature.ams.domain;

public class Answers {
	
	private int answersId; //serial primary key,
	private int answersQuestionsId; //fk
	private int answersStudentId; //fk
	private  int answersAssignmentInstanceId; //fk
	private String answersString;
	private double answersPoints; //check(answers_points<=100.00),
	private String answersComments;
	
	
	public Answers() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Answers(int answersId, int answersQuestionsId, int answersStudentId, int answersAssignmentInstanceId,
			String answersString, double answersPoints, String answersComments) {
		super();
		this.answersId = answersId;
		this.answersQuestionsId = answersQuestionsId;
		this.answersStudentId = answersStudentId;
		this.answersAssignmentInstanceId = answersAssignmentInstanceId;
		this.answersString = answersString;
		this.answersPoints = answersPoints;
		this.answersComments = answersComments;
	}


	public int getAnswersId() {
		return answersId;
	}
	public void setAnswersId(int answersId) {
		this.answersId = answersId;
	}
	public int getAnswersQuestionsId() {
		return answersQuestionsId;
	}
	public void setAnswersQuestionsId(int answersQuestionsId) {
		this.answersQuestionsId = answersQuestionsId;
	}
	public int getAnswersStudentId() {
		return answersStudentId;
	}
	public void setAnswersStudentId(int answersStudentId) {
		this.answersStudentId = answersStudentId;
	}
	public int getAnswersAssignmentInstanceId() {
		return answersAssignmentInstanceId;
	}
	public void setAnswersAssignmentInstanceId(int answersAssignmentInstanceId) {
		this.answersAssignmentInstanceId = answersAssignmentInstanceId;
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + answersAssignmentInstanceId;
		result = prime * result + ((answersComments == null) ? 0 : answersComments.hashCode());
		result = prime * result + answersId;
		long temp;
		temp = Double.doubleToLongBits(answersPoints);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + answersQuestionsId;
		result = prime * result + ((answersString == null) ? 0 : answersString.hashCode());
		result = prime * result + answersStudentId;
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
		Answers other = (Answers) obj;
		if (answersAssignmentInstanceId != other.answersAssignmentInstanceId)
			return false;
		if (answersComments == null) {
			if (other.answersComments != null)
				return false;
		} else if (!answersComments.equals(other.answersComments))
			return false;
		if (answersId != other.answersId)
			return false;
		if (Double.doubleToLongBits(answersPoints) != Double.doubleToLongBits(other.answersPoints))
			return false;
		if (answersQuestionsId != other.answersQuestionsId)
			return false;
		if (answersString == null) {
			if (other.answersString != null)
				return false;
		} else if (!answersString.equals(other.answersString))
			return false;
		if (answersStudentId != other.answersStudentId)
			return false;
		return true;
	}
	
	

}
