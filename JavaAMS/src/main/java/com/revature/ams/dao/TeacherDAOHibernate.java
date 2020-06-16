package com.revature.ams.dao;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.ams.domain.Teacher;

@Component
public class TeacherDAOHibernate implements TeacherDAO{
	
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public void createTeacher(Teacher teacher) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(teacher);
		tx.commit();
		sess.close();
	}
	
	@Override
	public void deleteTeacher(Teacher teacher) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.delete(teacher);
		tx.commit();
		sess.close();
	}
	
	@Override
	public void updateTeacher(Teacher teacher) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.update(teacher);
		tx.commit();
		sess.close();
	}
	
	@Override
	public Teacher getTeacher(int teacherId) {
		Session sess = sessionFactory.openSession();
		Teacher t = sess.get(Teacher.class, teacherId);
		sess.close();
		return t;	
	}
	
	@Override
	public Teacher getTeacher(String value, String column) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Teacher> cq = cb.createQuery(Teacher.class);
		Root<Teacher> rootEntry = cq.from(Teacher.class);
		CriteriaQuery<Teacher> all = cq.select(rootEntry).where(cb.equal(rootEntry.get(column), value));
		TypedQuery<Teacher> allQuery = sess.createQuery(all);
		List<Teacher> list = allQuery.getResultList();
		tx.commit();
		sess.close();
		return list.get(0);	
	}

}
