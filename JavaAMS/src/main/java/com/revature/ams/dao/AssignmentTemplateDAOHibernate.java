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

import com.revature.ams.domain.AssignmentTemplate;

@Component
public class AssignmentTemplateDAOHibernate implements AssignmentTemplateDAO{
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public void createAssignmentTemplate(AssignmentTemplate assignmentTemplate) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(assignmentTemplate);
		tx.commit();
		sess.close();
		
	}

	@Override
	public void deleteAssignmentTemplate(AssignmentTemplate assignmentTemplate) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.delete(assignmentTemplate);
		tx.commit();
		sess.close();
		
	}

	@Override
	public void updateAssignmentTemplate(AssignmentTemplate assignmentTemplate) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.update(assignmentTemplate);
		tx.commit();
		sess.close();
		
	}

	@Override
	public AssignmentTemplate getAssignmentTemplate(int assignmentTemplateId) {
		Session sess = sessionFactory.openSession();
		AssignmentTemplate at = sess.get(AssignmentTemplate.class, assignmentTemplateId);
		sess.close();
		return at;
	}

	@Override
	public AssignmentTemplate getAssignmentTemplate(String value, String column) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<AssignmentTemplate> cq = cb.createQuery(AssignmentTemplate.class);
		Root<AssignmentTemplate> rootEntry = cq.from(AssignmentTemplate.class);
		CriteriaQuery<AssignmentTemplate> all = cq.select(rootEntry).where(cb.equal(rootEntry.get(column), value));
		TypedQuery<AssignmentTemplate> allQuery = sess.createQuery(all);
		List<AssignmentTemplate> list = allQuery.getResultList();
		tx.commit();
		sess.close();
		return list.get(0);
	}
	
}
