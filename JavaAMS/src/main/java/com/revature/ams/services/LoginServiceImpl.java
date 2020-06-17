package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.StudentDAOHibernate;
import com.revature.ams.dao.TeacherDAOHibernate;
import com.revature.ams.domain.Student;
import com.revature.ams.domain.Teacher;
import com.revature.ams.dto.Message;
import com.revature.ams.util.TokenGenerator;

@Service
public class LoginServiceImpl implements LoginService {
	
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
	public Message login(int userId, String password) {
		Student s = this.studentDao.getStudent(userId);
		Teacher t = this.teacherDao.getTeacher(userId);
		
		if(s!=null && tokenGenerator.correctPassword(password, s.getStudentPassword())) {
			s.setToken(tokenGenerator.generateRandomToken());
			studentDao.updateStudent(s);
			Message mSuccess = new Message(true, "Student Login Successful!", s.getToken());
			return mSuccess;
		} 
		
		if(t!=null && tokenGenerator.correctPassword(password, t.getTeacherPassword())) {
			t.setToken(tokenGenerator.generateRandomToken());
			teacherDao.updateTeacher(t);
			Message mSuccess = new Message(true, "Teacher Login Successful!", t.getToken());
			return mSuccess;
		}
			
		Message mFail = new Message(false, "Your login attempt has failed. Make sure the userID and password are correct.", null);
		return mFail;
	}
	
	
	
}
