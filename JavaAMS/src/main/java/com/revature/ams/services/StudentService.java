package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.StudentDAOHibernate;
import com.revature.ams.domain.Student;

@Service
public class StudentService {
	
	private StudentDAOHibernate studentDao;

	public StudentDAOHibernate getStudentDao() {
		return studentDao;
	}

	@Autowired
	public void setStudentDao(StudentDAOHibernate studentDao) {
		this.studentDao = studentDao;
	}
	
	public Student getStudent(int studentId) {
		return this.studentDao.getStudent(studentId);
	}
	

}
