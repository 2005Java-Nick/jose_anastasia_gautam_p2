package com.revature.ams.domain;

public class Student {
	
	private int studentId; //PRIMARY KEY
	private String studentFirstname; 
	private String studentLastname; 
	private String studentEmail; 
	private String studentPassword;
	private String studentClass;
	
	
	public Student() {
		super();
	}
	
	public Student(int studentId, String studentFirstname, String studentLastname, String studentEmail, String studentPassword, String studentClass) {
		this.studentId = studentId;
		this.studentFirstname = studentFirstname;
		this.studentLastname = studentLastname;
		this.studentEmail = studentEmail;
		this.studentPassword = studentPassword;
		this.studentClass = studentClass;
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
	public void setStudentGradeLevel(String studentClass) {
		this.studentClass = studentClass;
	} 
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((studentEmail == null) ? 0 : studentEmail.hashCode());
		result = prime * result + ((studentFirstname == null) ? 0 : studentFirstname.hashCode());
		result = prime * result + ((studentClass == null) ? 0 : studentClass.hashCode());
		result = prime * result + studentId;
		result = prime * result + ((studentLastname == null) ? 0 : studentLastname.hashCode());
		result = prime * result + ((studentPassword == null) ? 0 : studentPassword.hashCode());
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
		if (studentClass == null) {
			if (other.studentClass != null)
				return false;
		} else if (!studentClass.equals(other.studentClass))
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
		return true;
	}
	

}