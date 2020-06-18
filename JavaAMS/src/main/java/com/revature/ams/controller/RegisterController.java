package com.revature.ams.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ams.dto.Message;
import com.revature.ams.services.RegisterService;

@Controller
public class RegisterController {
	
	private RegisterService registerService;
	
	public RegisterService getRegisterService() {
		return registerService;
	}
	
	@Autowired
	public void setRegisterService(RegisterService registerService) {
		this.registerService = registerService;
	}
	
	@RequestMapping(path = "/register-student", method = RequestMethod.POST)
	@ResponseBody
	public Message registerStudent(@RequestParam(name="studentId", required=true) Integer studentId,
			@RequestParam(name="studentFirstName", required=true) String firstname,
			@RequestParam(name="studentLastName", required=true) String lastname,
			@RequestParam(name="studentEmail", required=true) String email,
			@RequestParam(name="studentPassword", required=true) String password,
			@RequestParam(name="studentClass", required=true) String studentClass,
			@RequestParam(name="studentSchool", required=true) String school
			) {
		return registerService.registerStudent(studentId, firstname, lastname, email, password, studentClass, school);
	}
	
	@RequestMapping(path = "/register-teacher", method = RequestMethod.POST)
	@ResponseBody
	public Message registerTeacher(@RequestParam(name="teacherId", required=true) Integer teacherId,
			@RequestParam(name="teacherFirstName", required=true) String firstname,
			@RequestParam(name="teacherLastName", required=true) String lastname,
			@RequestParam(name="teacherEmail", required=true) String email,
			@RequestParam(name="teacherPassword", required=true) String password,
			@RequestParam(name="teacherSubject", required=true) String subject,
			@RequestParam(name="teacherSchool", required=true) String school
			) {
		return registerService.registerTeacher(teacherId, firstname, lastname, email, password, subject, school);
	}
}
