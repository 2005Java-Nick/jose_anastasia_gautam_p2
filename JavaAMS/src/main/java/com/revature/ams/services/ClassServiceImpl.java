package com.revature.ams.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.StudentDAOHibernate;
import com.revature.ams.domain.Student;

@Service
public class ClassServiceImpl implements ClassService {
	private StudentDAOHibernate studentDao;

	public StudentDAOHibernate getStudentDao() {
		return studentDao;
	}

	@Autowired
	public void setStudentDao(StudentDAOHibernate studentDao) {
		this.studentDao = studentDao;
	}
	
	@Override
	public HashSet<String> getAllClasses(String school) {
		List<Student> students = studentDao.getAllStudentsByColumn(school, "studentSchool");
		HashSet<String> classes = new HashSet<String>();
		for(Student s: students) {
			String studentClass = new String();
			studentClass = s.getStudentClass();
			classes.add(studentClass);
		}
		return classes;
	}

}
