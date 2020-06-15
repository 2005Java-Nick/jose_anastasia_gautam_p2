package com.revature.ams.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "ams.student")
public class Student implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8117655951434001717L;

	@Id
	@Column(name = "student_id")
	private int studentId; //PRIMARY KEY
	
	@Column(name = "student_firstname")
	private String studentFirstname;
	
	@Column(name = "student_lastname")
	private String studentLastname; 
	
	@Column(name = "student_email")
	private String studentEmail; 
	
	@Column(name = "student_pw")
	private String studentPassword;
	
	@Column(name = "student_class")
	private String studentClass;
	
	@Column(name = "student_school")
	private String studentSchool;
	
	@OneToMany(mappedBy="student",  
            targetEntity=AssignmentInstance.class, 
            fetch=FetchType.EAGER, 
            cascade = CascadeType.ALL)
	private Set<AssignmentInstance> assignmentInstances = new HashSet<AssignmentInstance>();
	
	@OneToMany(mappedBy="student",  
            targetEntity=Answers.class, 
            fetch=FetchType.EAGER, 
            cascade = CascadeType.ALL)
	private Set<Answers> answers = new HashSet<Answers>();
	
	
	public Student() {
		super();
	}
	
	public Student(int studentId, String studentFirstname, String studentLastname, String studentEmail, String studentPassword, String studentClass, String studentSchool) {
		this.studentId = studentId;
		this.studentFirstname = studentFirstname;
		this.studentLastname = studentLastname;
		this.studentEmail = studentEmail;
		this.studentPassword = studentPassword;
		this.studentClass = studentClass;
		this.studentSchool = studentSchool;
	}
	
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentFirstname() {
		return studentFirstname;
	}
	public void setStudentFirstname(String studentFirstname) {
		this.studentFirstname = studentFirstname;
	}
	public String getStudentLastname() {
		return studentLastname;
	}
	public void setStudentLastname(String studentLastname) {
		this.studentLastname = studentLastname;
	}
	public String getStudentEmail() {
		return studentEmail;
	}
	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}
	public String getStudentPassword() {
		return studentPassword;
	}
	public void setStudentPassword(String studentPassword) {
		this.studentPassword = studentPassword;
	}
	public String getStudentClass() {
		return studentClass;
	}
	public void setStudentClass(String studentClass) {
		this.studentClass = studentClass;
	}
	public String getStudentSchool() {
		return studentSchool;
	}
	public void setStudentSchool(String studentSchool) {
		this.studentSchool = studentSchool;
	}

	public Set<AssignmentInstance> getAssignmentInstances() {
		return assignmentInstances;
	}

	public void setAssignmentInstances(Set<AssignmentInstance> assignmentInstances) {
		this.assignmentInstances = assignmentInstances;
	}

	public Set<Answers> getAnswers() {
		return answers;
	}

	public void setAnswers(Set<Answers> answers) {
		this.answers = answers;
	}

	

}
