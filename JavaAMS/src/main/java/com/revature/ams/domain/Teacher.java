package com.revature.ams.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "ams.teacher")
public class Teacher implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 64958239155936918L;

	@Id
	@Column(name = "teacher_id")
	private int teacherId; //PRIMARY KEY
	
	@Column(name = "teacher_firstname")
	private String teacherFirstname; 
	
	@Column(name = "teacher_lastname")
	private String teacherLastname; 
	
	@Column(name = "teacher_email")
	private String teacherEmail; 
	
	@Column(name = "teacher_pw")
	private String teacherPassword;
	
	@Column(name = "teacher_subject")
	private String teacherSubject;
	
	@Column(name = "teacher_school")
	private String teacherSchool;
	
	@Column(name = "session_token")
	private String token;
	
	@OneToMany(mappedBy="teacher",  
            targetEntity=AssignmentInstance.class, 
            fetch=FetchType.EAGER, 
            cascade = CascadeType.ALL)
	private Set<AssignmentInstance> assignmentInstances = new HashSet<AssignmentInstance>();
	
	public Teacher() {
		super();
	}
		
	
	public Teacher(int teacherId, String teacherFirstname, String teacherLastname, String teacherEmail,
		String teacherPassword, String teacherSubject, String teacherSchool, String token) {
		super();
		this.teacherId = teacherId;
		this.teacherFirstname = teacherFirstname;
		this.teacherLastname = teacherLastname;
		this.teacherEmail = teacherEmail;
		this.teacherPassword = teacherPassword;
		this.teacherSubject = teacherSubject;
		this.teacherSchool = teacherSchool;
		this.token = token;
	}



	public int getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}
	public String getTeacherFirstname() {
		return teacherFirstname;
	}
	public void setTeacherFirstname(String teacherFirstname) {
		this.teacherFirstname = teacherFirstname;
	}
	public String getTeacherLastname() {
		return teacherLastname;
	}
	public void setTeacherLastname(String teacherLastname) {
		this.teacherLastname = teacherLastname;
	}
	public String getTeacherEmail() {
		return teacherEmail;
	}
	public void setTeacherEmail(String teacherEmail) {
		this.teacherEmail = teacherEmail;
	}
	public String getTeacherPassword() {
		return teacherPassword;
	}
	public void setTeacherPassword(String teacherPassword) {
		this.teacherPassword = teacherPassword;
	}
	public String getTeacherSubject() {
		return teacherSubject;
	}
	public void setTeacherSubject(String teacherSubject) {
		this.teacherSubject = teacherSubject;
	}
	public String getTeacherSchool() {
		return teacherSchool;
	}

	public void setTeacherSchool(String teacherSchool) {
		this.teacherSchool = teacherSchool;
	}
	
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}


	public Set<AssignmentInstance> getAssignmentInstances() {
		return assignmentInstances;
	}


	public void setAssignmentInstances(Set<AssignmentInstance> assignmentInstances) {
		this.assignmentInstances = assignmentInstances;
	}


}
