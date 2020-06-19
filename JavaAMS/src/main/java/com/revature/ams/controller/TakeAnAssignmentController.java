package com.revature.ams.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ams.dto.Message;
import com.revature.ams.services.AssignmentInstanceService;
import com.revature.ams.services.AuthorizationService;

@Controller
public class TakeAnAssignmentController {
	private AssignmentInstanceService aiService;
	private AuthorizationService aService;
	
	public AssignmentInstanceService getAiService() {
		return aiService;
	}
	
	@Autowired
	public void setAiService(AssignmentInstanceService aiService) {
		this.aiService = aiService;
	}
	
	public AuthorizationService getAService() {
		return aService;
	}
	
	@Autowired
	public void setAService(AuthorizationService aService) {
		this.aService = aService;
	}
	
	@RequestMapping(path = "/take-new-assignment", method = RequestMethod.POST)
	@ResponseBody
	@CrossOrigin
	public Message takeAssignment(
			@RequestParam(name = "studentId",required =true) String studentId,
			@RequestParam(name = "assignmentInstanceId",required=true) String aiId,
			@RequestParam(name = "answers",required=true) String answers,
			@RequestParam(name = "token",required =true) String token) 
	{
		Message mNotAuthorized = new Message(false, "User NOT Authorized!", null);
		//if(aService.authorizeStudent(Integer.valueOf(studentId), token)) {
			System.out.println("GAUTUM! STUDENT COMPLETED AN ASSIGNMENT: "+aiService.takeNewAssignment(aiId, answers, token));
			return aiService.takeNewAssignment(aiId, answers, token);
		//}else {
		//	System.out.println("GAUTUM! USER NOT AUTHORIZED: "+mNotAuthorized);
		//	return mNotAuthorized;
		//}
	}
}
