package com.revature.ams.dao;

import com.revature.ams.domain.Answers;

public interface AnswersDAO {

	public void createAnswer(Answers answer);
	public void deleteAnswer(Answers answer);
	public void updateAnswer(Answers answer);
	public Answers getAnswer(int answersId);
	public Answers getAnswer(String value, String column);

}
