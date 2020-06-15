package com.revature.ams.controller;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.revature.ams.domain.Student;
import com.revature.ams.domain.Teacher;
import com.revature.ams.services.StudentService;
import com.revature.ams.services.TeacherService;

@Controller
public class LoginController {
	
	private StudentService studentService;
	
	public StudentService getStudentService() {
		return studentService;
	}
	
	@Autowired
	public void setStudentService(StudentService studentService) {
		this.studentService = studentService;
	}
	
	private TeacherService teacherService;
	
	public TeacherService getTeacherService() {
		return teacherService;
	}

	@Autowired
	public void setTeacherService(TeacherService teacherService) {
		this.teacherService = teacherService;
	}
	
	//TODO: FIX METHOD RETURN TYPE!!
	@RequestMapping(path = "/login", method = RequestMethod.GET)
	public Serializable login(@RequestParam(name="userId", required=true) int userId,
			@RequestParam(name="userPassword", required=true) String password) {
		Student s = this.studentService.getStudent(userId);
		if(s!=null) {
			if(s.getStudentPassword().equals(password)) {
				return s;
			}
			return null;
		}
		else {
			Teacher t = this.teacherService.getTeacher(userId);
			if(t.getTeacherPassword().equals(password)) {
				return t;
			}
			return null;
		}
		
	}
	
	
	
	
}