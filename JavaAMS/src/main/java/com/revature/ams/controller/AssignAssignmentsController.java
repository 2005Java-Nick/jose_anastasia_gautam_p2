package com.revature.ams.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import com.fasterxml.jackson.databind.JsonNode;

import java.sql.*;

import com.revature.ams.domain.*;
import com.revature.ams.dto.*;
import com.revature.ams.services.*;

@RestController
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
	/*
	@RequestMapping(path = "/teacher/create-assignment", method = RequestMethod.POST)
	@ResponseBody
	public Message assignAssignmentsToClass(
			@RequestParam(name = "teacherId",required =true) int teacherId,
			@RequestParam(name = "assignmentType",required=true) String assignmentType,
			@RequestParam(name = "assignmentTitle",required=true) String assignmentTitle,
			@RequestParam(name = "assignmentClass",required=true) String assignmentClass,
			@RequestParam(name = "dueDate",required=true) Date dueDate,
			@RequestParam(name = "dueTime",required=true) Time dueTime,
			@RequestParam(name = "questions", required=true) List<String> questions,
			@RequestParam(name = "maxpoints", required=true) List<Double> maxpoints,
			@RequestParam(name = "token",required =true) String token) 
	{
		Message mSuccess = new Message(true, "Teacher successfully assigned new assignment", token);
		Message mFail = new Message(true, "Teacher FAILED to assign new assignment", null);
		Message mNotAuthorized = new Message(true, "User NOT Authorized!", null);
		Message message;
		if(aService.authorizeTeacher(teacherId, token)) {
			AssignmentTemplate at = new AssignmentTemplate(assignmentType, assignmentTitle, dueDate, dueTime);
			
			message = atService.createAssignmentTemplate(at);
			if(!message.isSuccessStatus()) {
				return message;
			}
			
			for (int i = 0; i < questions.size(); i++) {
				Question q = new Question();
				q.setAssignmentTemplate(at);
				q.setQuestion_number(i+1);
				q.setQuestionMaxpoints(maxpoints.get(i));
				q.setQuestionString(questions.get(i));
				message = qService.createQuestion(q);
				if(!message.isSuccessStatus()) {
					return message;
				}
			}
			
			Teacher t = tService.getTeacher(teacherId);
			message = aiService.assigningAssignment(assignmentClass, at, t);
			if(!message.isSuccessStatus()) {
				return message;
			}
			
			return mSuccess;
			
		}else {
			return mNotAuthorized;
		}
	}
	*/
	@RequestMapping(path = "/teacher-create-assignment", method = RequestMethod.POST, headers = "Accepted=application/json")
	@ResponseBody
	public Message assignAssignmentsToClass(@RequestBody AssignedAssignmentDTO aaDTO) {
		Message mSuccess = new Message(true, "Teacher successfully assigned new assignment", aaDTO.getToken());
		//Message mFail = new Message(true, "Teacher FAILED to assign new assignment", null);
		Message mNotAuthorized = new Message(true, "User NOT Authorized!", null);
		Message message;
		if(aService.authorizeTeacher(aaDTO.getTeacherId(), aaDTO.getToken())) {
			AssignmentTemplate at = new AssignmentTemplate(aaDTO.getAssignmentType(),aaDTO.getAssignmentTitle(), java.sql.Date.valueOf(aaDTO.getDueDate()),java.sql.Time.valueOf(aaDTO.getDueTime()));

			message = atService.createAssignmentTemplate(at);
			if(!message.isSuccessStatus()) {
				return message;
			}
			
			for (int i = 0; i < aaDTO.getQuestions().size(); i++) {
				Question q = new Question();
				q.setAssignmentTemplate(at);
				q.setQuestion_number(i+1);
				q.setQuestionMaxpoints(aaDTO.getMaxpoints().get(i));
				q.setQuestionString(aaDTO.getQuestions().get(i));
				message = qService.createQuestion(q);
				if(!message.isSuccessStatus()) {
					return message;
				}
			}
			
			Teacher t = tService.getTeacher(aaDTO.getTeacherId());
			message = aiService.assigningAssignment(aaDTO.getAssignmentClass(), at, t);
			if(!message.isSuccessStatus()) {
				return message;
			}
			
			return mSuccess;
			
		}else {
			return mNotAuthorized;
		}
	}
	
}
