package com.revature.ams.domain;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "ams.question")
public class Question implements Serializable{ //one-to-many with assignment_template
	
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
    //@JoinColumn(name = "assignmentTemplateId", foreignKey = @ForeignKey(name = "FK_question_assignment_template_id"), nullable = false, insertable=false, updatable=false)
	@JoinColumn(name = "assignment_template_id")
	private AssignmentTemplate assignmentTemplate;
	
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((assignmentTemplate == null) ? 0 : assignmentTemplate.hashCode());
		result = prime * result + questionId;
		long temp;
		temp = Double.doubleToLongBits(questionMaxpoints);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((questionString == null) ? 0 : questionString.hashCode());
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
		if (assignmentTemplate == null) {
			if (other.assignmentTemplate != null)
				return false;
		} else if (!assignmentTemplate.equals(other.assignmentTemplate))
			return false;
		if (questionId != other.questionId)
			return false;
		if (Double.doubleToLongBits(questionMaxpoints) != Double.doubleToLongBits(other.questionMaxpoints))
			return false;
		if (questionString == null) {
			if (other.questionString != null)
				return false;
		} else if (!questionString.equals(other.questionString))
			return false;
		if (question_number != other.question_number)
			return false;
		return true;
	}
	
	
	

}
