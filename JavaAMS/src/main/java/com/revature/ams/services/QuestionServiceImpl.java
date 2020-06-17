package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.ams.dao.AssignmentTemplateDAOHibernate;
import com.revature.ams.dao.QuestionDAOHibernate;
import com.revature.ams.domain.AssignmentTemplate;
import com.revature.ams.domain.Question;
import com.revature.ams.dto.Message;

public class QuestionServiceImpl implements QuestionService {
	private QuestionDAOHibernate questionDao;
	
	public QuestionDAOHibernate getQuestionDao() {
		return questionDao;
	}

	@Autowired
	public void setQuestionDao(QuestionDAOHibernate questionDao) {
		this.questionDao = questionDao;
	}
	
	@Override
	public Message createQuestion(Question q) {
		Message mSuccess = new Message(true, "Teacher created a new Question "+q.toString()+".", null);
		Message mFail = new Message(false, "Teacher FAILED to create a new Assignment "+q.toString()+".", null);
		questionDao.createQuestion(q);
		Question qJustMade = questionDao.getQuestion(q.getQuestionId());
		
		if(qJustMade != null) {
			return mSuccess;
		}else {
			return mFail;
		}
	}

}
