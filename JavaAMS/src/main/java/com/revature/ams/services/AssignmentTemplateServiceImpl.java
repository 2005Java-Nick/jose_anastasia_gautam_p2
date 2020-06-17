package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.AssignmentTemplateDAOHibernate;
import com.revature.ams.domain.AssignmentTemplate;
import com.revature.ams.dto.Message;

@Service
public class AssignmentTemplateServiceImpl implements AssignmentTemplateService {
	private AssignmentTemplateDAOHibernate assignmentTemplateDao;
	
	public AssignmentTemplateDAOHibernate getAssignmentTemplateDao() {
		return assignmentTemplateDao;
	}

	@Autowired
	public void setAssignmentTemplateDao(AssignmentTemplateDAOHibernate assignmentTemplateDao) {
		this.assignmentTemplateDao = assignmentTemplateDao;
	}
	
	@Override
	public Message createAssignmentTemplate(AssignmentTemplate at) {
		Message mSuccess = new Message(true, "Teacher created a new Assignment "+at.toString()+".", null);
		Message mFail = new Message(false, "Teacher FAILED to create a new Assignment "+at.toString()+".", null);
		assignmentTemplateDao.createAssignmentTemplate(at);
		AssignmentTemplate atJustMade = assignmentTemplateDao.getAssignmentTemplate(at.getAssignmentTemplateId());
		
		if(atJustMade != null) {
			return mSuccess;
		}else {
			return mFail;
		}
	}

}
