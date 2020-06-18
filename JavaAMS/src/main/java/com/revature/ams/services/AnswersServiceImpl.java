package com.revature.ams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.AnswersDAOHibernate;
import com.revature.ams.domain.Answers;
import com.revature.ams.dto.Message;

@Service
public class AnswersServiceImpl implements AnswersService {
private AnswersDAOHibernate answerDao;
	
	public AnswersDAOHibernate getAnswerDao() {
		return answerDao;
	}

	@Autowired
	public void setAnswerDao(AnswersDAOHibernate answerDao) {
		this.answerDao = answerDao;
	}
	@Override
	public Message createAnswer(Answers a) {
		Message mSuccess = new Message(true, "Student created an Answer "+a.toString()+".", null);
		Message mFail = new Message(false, "Student FAILED to create an answer "+a.toString()+".", null);
		answerDao.createAnswer(a);
		Answers aJustMade = answerDao.getAnswer(a.getAnswersId());
		
		if(aJustMade != null) {
			return mSuccess;
		}else {
			return mFail;
		}
	}

}
