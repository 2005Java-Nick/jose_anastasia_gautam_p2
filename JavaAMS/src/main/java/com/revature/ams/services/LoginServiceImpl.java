package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.StudentDAOHibernate;
import com.revature.ams.dao.TeacherDAOHibernate;
import com.revature.ams.domain.Student;
import com.revature.ams.domain.Teacher;
import com.revature.ams.dto.Message;

@Service
public class LoginServiceImpl implements LoginService {
	
	private TeacherDAOHibernate teacherDao;
	private StudentDAOHibernate studentDao;

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
	
	@Override
	public Message login(int userId, String password) {
		Student s = this.studentDao.getStudent(userId);
		if(s!=null) {
			if(s.getStudentPassword().equals(password)) {
				Message mSuccess = new Message(true, "Student Login Successful!");
				return mSuccess;
			}
			Message mFail = new Message(false, "Your login attempt has failed. Make sure the userID and password are correct.");
			return mFail;
		}
		else {
			Teacher t = this.teacherDao.getTeacher(userId);
			if(t!=null && t.getTeacherPassword().equals(password)) {
				Message mSuccess = new Message(true, "Teacher Login Successful!");
				return mSuccess;
			}
			
			Message mFail = new Message(false, "Your login attempt has failed. Make sure the userID and password are correct.");
			return mFail;
		}
	}
	
	
	
}
