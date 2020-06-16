package com.revature.ams.dao;

import com.revature.ams.domain.Question;

public interface QuestionDAO {
	public void createQuestion(Question question);
	public void deleteQuestion(Question question);
	public void updateQuestion(Question question);
	public Question getQuestion(int questionId);
	public Question getQuestion(String value, String column);
}
