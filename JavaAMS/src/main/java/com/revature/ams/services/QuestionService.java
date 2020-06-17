package com.revature.ams.services;

import com.revature.ams.domain.Question;
import com.revature.ams.dto.Message;

public interface QuestionService {
	public Message createQuestion(Question q);
}
