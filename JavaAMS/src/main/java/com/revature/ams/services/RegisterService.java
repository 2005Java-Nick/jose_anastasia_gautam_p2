package com.revature.ams.services;

import com.revature.ams.dto.Message;

public interface RegisterService {
	public Message registerStudent(int studentId,String firstname,String lastname,String email,String password,String studentClass,String school);
	public Message registerTeacher(int teacherId,String firstname,String lastname,String email,String password,String subject,String school);
}
