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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((studentClass == null) ? 0 : studentClass.hashCode());
		result = prime * result + ((studentEmail == null) ? 0 : studentEmail.hashCode());
		result = prime * result + ((studentFirstname == null) ? 0 : studentFirstname.hashCode());
		result = prime * result + studentId;
		result = prime * result + ((studentLastname == null) ? 0 : studentLastname.hashCode());
		result = prime * result + ((studentPassword == null) ? 0 : studentPassword.hashCode());
		result = prime * result + ((studentSchool == null) ? 0 : studentSchool.hashCode());
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
		Student other = (Student) obj;
		if (studentClass == null) {
			if (other.studentClass != null)
				return false;
		} else if (!studentClass.equals(other.studentClass))
			return false;
		if (studentEmail == null) {
			if (other.studentEmail != null)
				return false;
		} else if (!studentEmail.equals(other.studentEmail))
			return false;
		if (studentFirstname == null) {
			if (other.studentFirstname != null)
				return false;
		} else if (!studentFirstname.equals(other.studentFirstname))
			return false;
		if (studentId != other.studentId)
			return false;
		if (studentLastname == null) {
			if (other.studentLastname != null)
				return false;
		} else if (!studentLastname.equals(other.studentLastname))
			return false;
		if (studentPassword == null) {
			if (other.studentPassword != null)
				return false;
		} else if (!studentPassword.equals(other.studentPassword))
			return false;
		if (studentSchool == null) {
			if (other.studentSchool != null)
				return false;
		} else if (!studentSchool.equals(other.studentSchool))
			return false;
		return true;
	}
	

}
