package com.revature.ams.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ParameterMode;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.procedure.ProcedureCall;
import org.hibernate.procedure.ProcedureOutputs;
import org.hibernate.result.ResultSetOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.ams.domain.AssignmentInstance;

@Component
public class AssignmentInstanceDAOHibernate implements AssignmentInstanceDAO{
	
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}
	
	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public void createAssignmentInstance(AssignmentInstance assignmentInstance) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(assignmentInstance);
		tx.commit();
		sess.close();
	}

	@Override
	public void deleteAssignmentInstance(AssignmentInstance assignmentInstance) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.delete(assignmentInstance);
		tx.commit();
		sess.close();
		
	}

	@Override
	public void updateAssignmentInstance(AssignmentInstance assignmentInstance) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		sess.update(assignmentInstance);
		tx.commit();
		sess.close();
		
	}

	@Override
	public AssignmentInstance getAssignmentInstance(int assignmentInstanceId) {
		Session sess = sessionFactory.openSession();
		AssignmentInstance ai = sess.get(AssignmentInstance.class, assignmentInstanceId);
		sess.close();
		return ai;
	}

	@Override
	public AssignmentInstance getAssignmentInstance(String value, String column) {
		Session sess = sessionFactory.openSession();
		Transaction tx = sess.beginTransaction();
		CriteriaBuilder cb = sess.getCriteriaBuilder();
		CriteriaQuery<AssignmentInstance> cq = cb.createQuery(AssignmentInstance.class);
		Root<AssignmentInstance> rootEntry = cq.from(AssignmentInstance.class);
		CriteriaQuery<AssignmentInstance> all = cq.select(rootEntry).where(cb.equal(rootEntry.get(column), value));
		TypedQuery<AssignmentInstance> allQuery = sess.createQuery(all);
		List<AssignmentInstance> list = allQuery.getResultList();
		tx.commit();
		sess.close();
		return list.get(0);
	}
	
	@Override
	public List<AssignmentInstance> getNewAssignmentInstancesByStudent(int studentId) {
		Session sess = sessionFactory.openSession();
		ProcedureCall procedureCall = sess.createStoredProcedureCall("all_new_assignments_student");
		procedureCall.registerParameter("student_id", Integer.class, ParameterMode.IN);
		procedureCall.getParameterRegistration("student_id").bindValue(studentId);                
		ProcedureOutputs procedureOutputs = procedureCall.getOutputs();
		ResultSetOutput resultSetOutput = (ResultSetOutput) procedureOutputs.getCurrent();
		List<AssignmentInstance> results = (List<AssignmentInstance>) resultSetOutput.getResultList();
		List<AssignmentInstance> assignmentInstances = new ArrayList<AssignmentInstance>();
		for(int i=0;i<results.size();i++) {
			assignmentInstances.add(results.get(i));
		}
		return assignmentInstances;
	}
	
	@Override
	public List<AssignmentInstance> getCompletedAssignmentInstancesByStudent(int studentId) {
		Session sess = sessionFactory.openSession();
		ProcedureCall procedureCall = sess.createStoredProcedureCall("all_completed_assignments_student");
		procedureCall.registerParameter("student_id", Integer.class, ParameterMode.IN);
		procedureCall.getParameterRegistration("student_id").bindValue(studentId);                
		ProcedureOutputs procedureOutputs = procedureCall.getOutputs();
		ResultSetOutput resultSetOutput = (ResultSetOutput) procedureOutputs.getCurrent();
		List<AssignmentInstance> results = (List<AssignmentInstance>) resultSetOutput.getResultList();
		List<AssignmentInstance> assignmentInstances = new ArrayList<AssignmentInstance>();
		for(int i=0;i<results.size();i++) {
			assignmentInstances.add(results.get(i));
		}
		return assignmentInstances;
	}
	
	@Override
	public List<AssignmentInstance> getGradedAssignmentInstancesByStudent(int studentId) {
		Session sess = sessionFactory.openSession();
		ProcedureCall procedureCall = sess.createStoredProcedureCall("all_graded_assignments_student");
		procedureCall.registerParameter("student_id", Integer.class, ParameterMode.IN);
		procedureCall.getParameterRegistration("student_id").bindValue(studentId);                
		ProcedureOutputs procedureOutputs = procedureCall.getOutputs();
		ResultSetOutput resultSetOutput = (ResultSetOutput) procedureOutputs.getCurrent();
		List<AssignmentInstance> results = (List<AssignmentInstance>) resultSetOutput.getResultList();
		List<AssignmentInstance> assignmentInstances = new ArrayList<AssignmentInstance>();
		for(int i=0;i<results.size();i++) {
			assignmentInstances.add(results.get(i));
		}
		return assignmentInstances;
	}
	
	@Override
	public List<AssignmentInstance> getCompletedAssignmentInstancesByTeacher(int teacherId) {
		Session sess = sessionFactory.openSession();
		ProcedureCall procedureCall = sess.createStoredProcedureCall("all_completed_assignments_teacher");
		procedureCall.registerParameter("teacher_id", Integer.class, ParameterMode.IN);
		procedureCall.getParameterRegistration("teacher_id").bindValue(teacherId);                
		ProcedureOutputs procedureOutputs = procedureCall.getOutputs();
		ResultSetOutput resultSetOutput = (ResultSetOutput) procedureOutputs.getCurrent();
		List<AssignmentInstance> results = (List<AssignmentInstance>) resultSetOutput.getResultList();
		List<AssignmentInstance> assignmentInstances = new ArrayList<AssignmentInstance>();
		for(int i=0;i<results.size();i++) {
			assignmentInstances.add(results.get(i));
		}
		return assignmentInstances;
	}
	
	@Override
	public List<AssignmentInstance> getGradedAssignmentInstancesByTeacher(int teacherId) {
		Session sess = sessionFactory.openSession();
		ProcedureCall procedureCall = sess.createStoredProcedureCall("all_graded_assignments_teacher");
		procedureCall.registerParameter("teacher_id", Integer.class, ParameterMode.IN);
		procedureCall.getParameterRegistration("teacher_id").bindValue(teacherId);                
		ProcedureOutputs procedureOutputs = procedureCall.getOutputs();
		ResultSetOutput resultSetOutput = (ResultSetOutput) procedureOutputs.getCurrent();
		List<AssignmentInstance> results = (List<AssignmentInstance>) resultSetOutput.getResultList();
		List<AssignmentInstance> assignmentInstances = new ArrayList<AssignmentInstance>();
		for(int i=0;i<results.size();i++) {
			assignmentInstances.add(results.get(i));
		}
		return assignmentInstances;
	}
	
	
}
