package com.revature.ams.dao;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

//import org.hibernate.Transaction;
import org.hibernate.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.ams.domain.Student;

@Component
public class StudentDAOHibernate implements StudentDAO{
	
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public void createStudent(Student student) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(student);
		tx.commit();
		sess.close();
	}
	
	@Override
	public void deleteStudent(Student student) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.delete(student);
		tx.commit();
		sess.close();
	}
	
	@Override
	public void updateStudent(Student student) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.update(student);
		tx.commit();
		sess.close();
	}
	
	@Override
	public Student getStudent(int studentId) {
		Session sess = sessionFactory.openSession();
		Student s = sess.get(Student.class, studentId);
		sess.close();
		return s;		
	}
	
	@Override
	public Student getStudent(String value, String column) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Student> cq = cb.createQuery(Student.class);
		Root<Student> rootEntry = cq.from(Student.class);
		CriteriaQuery<Student> all = cq.select(rootEntry).where(cb.equal(rootEntry.get(column), value));
		TypedQuery<Student> allQuery = sess.createQuery(all);
		List<Student> list = allQuery.getResultList();
		tx.commit();
		sess.close();
		return list.get(0);	
	}

	@Override
	public List<Student> getAllStudentsByColumn(String value, String column) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Student> cq = cb.createQuery(Student.class);
		Root<Student> rootEntry = cq.from(Student.class);
		CriteriaQuery<Student> all = cq.select(rootEntry).where(cb.equal(rootEntry.get(column), value));
		TypedQuery<Student> allQuery = sess.createQuery(all);
		List<Student> list = allQuery.getResultList();
		tx.commit();
		sess.close();
		return list;	
	}

}
