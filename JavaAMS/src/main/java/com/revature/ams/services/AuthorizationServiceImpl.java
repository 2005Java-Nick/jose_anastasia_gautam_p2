package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.StudentDAOHibernate;
import com.revature.ams.dao.TeacherDAOHibernate;
import com.revature.ams.domain.*;

@Service
public class AuthorizationServiceImpl implements AuthorizationService {
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
	public boolean authorizeStudent(int studentId, String token) {
		Student s = studentDao.getStudent(studentId);
		return s.getToken().equals(token);
	}

	@Override
	public boolean authorizeTeacher(int teacherId, String token) {
		Teacher t = teacherDao.getTeacher(teacherId);
		return t.getToken().equals(token);
	}

}
