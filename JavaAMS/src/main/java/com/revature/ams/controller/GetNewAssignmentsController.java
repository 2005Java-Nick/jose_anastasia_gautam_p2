package com.revature.ams.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ams.dto.AssignmentInstanceDTO;
import com.revature.ams.services.*;

@Controller
public class GetNewAssignmentsController {
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

	@RequestMapping(path = "/student/new-assignments", method = RequestMethod.GET)
	@ResponseBody
	public List<AssignmentInstanceDTO> getNewAssignments(@RequestParam(name = "studentId",required = true) int studentId, @RequestParam(name = "token",required = true) String token){
		if(aService.authorizeStudent(studentId, token)) {
			return aiService.getNewAssignmentInstancesByStudent(studentId);
		}else {
			return null;
		}
	}
  
}
