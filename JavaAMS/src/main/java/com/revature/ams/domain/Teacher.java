package com.revature.ams.domain;

public class Teacher {
	
	private int teacherId; //PRIMARY KEY
	private String teacherFirstname; 
	private String teacherLastname; 
	private String teacherEmail; 
	private String teacherPassword;
	private String teacherSubject;
	private String teacherSchool;
	
	public Teacher() {
		super();
	}
		
	
	public Teacher(int teacherId, String teacherFirstname, String teacherLastname, String teacherEmail,
		String teacherPassword, String teacherSubject, String teacherSchool) {
		super();
		this.teacherId = teacherId;
		this.teacherFirstname = teacherFirstname;
		this.teacherLastname = teacherLastname;
		this.teacherEmail = teacherEmail;
		this.teacherPassword = teacherPassword;
		this.teacherSubject = teacherSubject;
		this.teacherSchool = teacherSchool;
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


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((teacherEmail == null) ? 0 : teacherEmail.hashCode());
		result = prime * result + ((teacherFirstname == null) ? 0 : teacherFirstname.hashCode());
		result = prime * result + teacherId;
		result = prime * result + ((teacherLastname == null) ? 0 : teacherLastname.hashCode());
		result = prime * result + ((teacherPassword == null) ? 0 : teacherPassword.hashCode());
		result = prime * result + ((teacherSchool == null) ? 0 : teacherSchool.hashCode());
		result = prime * result + ((teacherSubject == null) ? 0 : teacherSubject.hashCode());
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
		Teacher other = (Teacher) obj;
		if (teacherEmail == null) {
			if (other.teacherEmail != null)
				return false;
		} else if (!teacherEmail.equals(other.teacherEmail))
			return false;
		if (teacherFirstname == null) {
			if (other.teacherFirstname != null)
				return false;
		} else if (!teacherFirstname.equals(other.teacherFirstname))
			return false;
		if (teacherId != other.teacherId)
			return false;
		if (teacherLastname == null) {
			if (other.teacherLastname != null)
				return false;
		} else if (!teacherLastname.equals(other.teacherLastname))
			return false;
		if (teacherPassword == null) {
			if (other.teacherPassword != null)
				return false;
		} else if (!teacherPassword.equals(other.teacherPassword))
			return false;
		if (teacherSchool == null) {
			if (other.teacherSchool != null)
				return false;
		} else if (!teacherSchool.equals(other.teacherSchool))
			return false;
		if (teacherSubject == null) {
			if (other.teacherSubject != null)
				return false;
		} else if (!teacherSubject.equals(other.teacherSubject))
			return false;
		return true;
	}
	

}
