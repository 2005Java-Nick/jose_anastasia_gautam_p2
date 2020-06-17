package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.StudentDAOHibernate;
import com.revature.ams.dao.TeacherDAOHibernate;
import com.revature.ams.domain.*;
import com.revature.ams.dto.Message;
import com.revature.ams.util.TokenGenerator;

@Service
public class RegisterServiceImpl implements RegisterService {
	private TeacherDAOHibernate teacherDao;
	private StudentDAOHibernate studentDao;
	private TokenGenerator tokenGenerator;

	public TeacherDAOHibernate getTeacherDao() {
		return teacherDao;
	}

	@Autowired
	public void setTeacherDao(TeacherDAOHibernate teacherDao) {
		this.teacherDao = teacherDao;
	}

	public StudentDAOHibernate getStudentDao() {
		return studentDao;
	}

	@Autowired
	public void setStudentDao(StudentDAOHibernate studentDao) {
		this.studentDao = studentDao;
	}
	
	public TokenGenerator getTokenGenerator() {
		return tokenGenerator;
	}

	@Autowired
	public void setTokenGenerator(TokenGenerator tokenGenerator) {
		this.tokenGenerator = tokenGenerator;
	}
	
	@Override
	public Message registerStudent(int studentId, String firstname, String lastname, String email, String password,
			String studentClass, String school) {
		try {
			Student s = new Student(studentId, firstname, lastname, email, tokenGenerator.encryptPassword(password), studentClass, school, null);
			studentDao.createStudent(s);
			Message mSuccess = new Message(true, "Student ("+ studentId +") Registration Successful!", null);
			
			return mSuccess;
		}catch(Exception e){
			Message mFail = new Message(false, e.getMessage(), null);
			return mFail;
		}

	}

	@Override
	public Message registerTeacher(int teacherId, String firstname, String lastname, String email, String password,
			String subject, String school) {
		try {
			Teacher t = new Teacher(teacherId, firstname, lastname, email, tokenGenerator.encryptPassword(password), subject, school, null);
			teacherDao.createTeacher(t);
			Message mSuccess = new Message(true, "Teacher ("+ teacherId +") Registration Successful!", null);
			
			return mSuccess;
		}catch(Exception e){
			Message mFail = new Message(false, e.getMessage(), null);
			return mFail;
		}
	}

}
