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

import com.revature.ams.domain.*;

@Component
public class AnswersDAOHibernate implements AnswersDAO{
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public void createAnswer(Answers answer) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(answer);
		tx.commit();
		sess.close();
	}
	
	@Override
	public void deleteAnswer(Answers answer) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.delete(answer);
		tx.commit();
		sess.close();
	}
	
	@Override
	public void updateAnswer(Answers answer) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.update(answer);
		tx.commit();
		sess.close();
	}
	
	@Override
	public Answers getAnswer(int answersId) {
		Session sess = sessionFactory.openSession();
		Answers a = sess.get(Answers.class, answersId);
		sess.close();
		return a;		
	}
	
	@Override
	public Answers getAnswer(String value, String column) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Answers> cq = cb.createQuery(Answers.class);
		Root<Answers> rootEntry = cq.from(Answers.class);
		CriteriaQuery<Answers> all = cq.select(rootEntry).where(cb.equal(rootEntry.get(column), value));
		TypedQuery<Answers> allQuery = sess.createQuery(all);
		List<Answers> list = allQuery.getResultList();
		tx.commit();
		sess.close();
		return list.get(0);	
	}
	
	
}
