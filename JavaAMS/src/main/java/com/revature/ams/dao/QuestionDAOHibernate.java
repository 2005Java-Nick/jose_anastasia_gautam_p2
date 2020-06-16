package com.revature.ams.dao;
import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.ams.domain.*;

@Component
public class QuestionDAOHibernate implements QuestionDAO{
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public void createQuestion(Question question) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(question);
		tx.commit();
		sess.close();
	}
	
	@Override
	public void deleteQuestion(Question question) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.delete(question);
		tx.commit();
		sess.close();
	}
	
	@Override
	public void updateQuestion(Question question) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.update(question);
		tx.commit();
		sess.close();
	}
	
	@Override
	public Question getQuestion(int questionId) {
		Session sess = sessionFactory.openSession();
		Question q = sess.get(Question.class, questionId);
		sess.close();
		return q;		
	}
	
	@Override
	public Question getQuestion(String value, String column) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<Question> cq = cb.createQuery(Question.class);
		Root<Question> rootEntry = cq.from(Question.class);
		CriteriaQuery<Question> all = cq.select(rootEntry).where(cb.equal(rootEntry.get(column), value));
		TypedQuery<Question> allQuery = sess.createQuery(all);
		List<Question> list = allQuery.getResultList();
		tx.commit();
		sess.close();
		return list.get(0);	
	}
}
