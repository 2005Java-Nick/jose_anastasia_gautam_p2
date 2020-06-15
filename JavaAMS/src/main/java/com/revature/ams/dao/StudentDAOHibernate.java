package com.revature.ams.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.ams.domain.Student;

@Component
public class StudentDAOHibernate {
	
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public Student getStudent(int studentId) {
		Session sess = sessionFactory.openSession();
		Student s = sess.get(Student.class, studentId);
		sess.close();
		return s;		
	}

}
