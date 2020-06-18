package com.revature.ams.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.revature.ams.dto.Message;
import com.revature.ams.services.*;

public class AssignAssignmentsController {
	private AssignmentInstanceService aiService;
	private AssignmentTemplateService atService;
	private TeacherService tService;
	private QuestionService qService;
	private AuthorizationService aService;
	

	public AssignmentInstanceService getAiService() {
		return aiService;
	}
	
	@Autowired
	public void setAiService(AssignmentInstanceService aiService) {
		this.aiService = aiService;
	}

	public AssignmentTemplateService getATService() {
		return atService;
	}
	
	@Autowired
	public void setATService(AssignmentTemplateService atService) {
		this.atService = atService;
	}

	public TeacherService getTService() {
		return tService;
	}
	
	@Autowired
	public void setTService(TeacherService tService) {
		this.tService = tService;
	}

	public QuestionService getQService() {
		return qService;
	}
	
	@Autowired
	public void setQService(QuestionService qService) {
		this.qService = qService;
	}
	
	public AuthorizationService getAService() {
		return aService;
	}
	
	@Autowired
	public void setAService(AuthorizationService aService) {
		this.aService = aService;
	}
	
	@RequestMapping(path = "/teacher/assign-assignment", method = RequestMethod.POST)
	@ResponseBody
	public Message assignAssignmentsToClass(@RequestParam(name = "teacherId",required =true) int teacherId,@RequestParam(name = "token",required =true) String token) {
		Message mSuccess = new Message(true, "Teacher successfully assigned new assignment", token);
		Message mFail = new Message(true, "Teacher FAILED to assign new assignment", null);
		Message mNotAuthorized = new Message(true, "User NOT Authorized!", null);
		if(aService.authorizeTeacher(teacherId, token)) {
			//TODO: fix conditional "TRUE" placeholder
			if(true) {
				//TODO: ADD LOGIC!
				return mSuccess;
			}else {
				return mFail;
			}
		}else {
			return mNotAuthorized;
		}
	}
	
}
