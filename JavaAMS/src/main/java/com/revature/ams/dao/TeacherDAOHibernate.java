package com.revature.ams.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.ams.domain.Student;
import com.revature.ams.domain.Teacher;

@Component
public class TeacherDAOHibernate {
	
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Teacher getTeacher(int teacherId) {
		Session sess = sessionFactory.openSession();
		Teacher t = sess.get(Teacher.class, teacherId);
		sess.close();
		return t;	
	}

}
