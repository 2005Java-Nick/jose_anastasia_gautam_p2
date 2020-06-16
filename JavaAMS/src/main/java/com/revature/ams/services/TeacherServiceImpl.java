package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.TeacherDAOHibernate;
import com.revature.ams.domain.Student;
import com.revature.ams.domain.Teacher;

@Service
public class TeacherServiceImpl implements TeacherService{
	
	private TeacherDAOHibernate teacherDao;

	public TeacherDAOHibernate getTeacherDao() {
		return teacherDao;
	}

	@Autowired
	public void setTeacherDao(TeacherDAOHibernate teacherDao) {
		this.teacherDao = teacherDao;
	}
	
	@Override
	public Teacher getTeacher(int teacherId) {
		return this.teacherDao.getTeacher(teacherId);
	}
	

}
