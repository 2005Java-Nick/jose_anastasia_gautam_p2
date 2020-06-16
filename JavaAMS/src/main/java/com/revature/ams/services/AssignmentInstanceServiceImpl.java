package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.AssignmentInstanceDAOHibernate;

@Service
public class AssignmentInstanceServiceImpl implements AssignmentInstanceService{
	
	private AssignmentInstanceDAOHibernate assignmentInstanceDao;

	public AssignmentInstanceDAOHibernate getAssignmentInstanceDao() {
		return assignmentInstanceDao;
	}

	@Autowired
	public void setAssignmentInstanceDao(AssignmentInstanceDAOHibernate assignmentInstanceDao) {
		this.assignmentInstanceDao = assignmentInstanceDao;
	}
	
	

}
