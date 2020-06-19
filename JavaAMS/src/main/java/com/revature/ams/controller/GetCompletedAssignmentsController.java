package com.revature.ams.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ams.dto.AssignmentInstanceDTO;
import com.revature.ams.services.AssignmentInstanceService;
import com.revature.ams.services.AuthorizationService;

@Controller
public class GetCompletedAssignmentsController {
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
	
	@RequestMapping(path = "/student-completed-assignments", method = RequestMethod.GET)
	@ResponseBody
	@CrossOrigin
	public List<AssignmentInstanceDTO> getStudentCompletedAssignments(@RequestParam(name = "studentId",required = true) Integer studentId){//, @RequestBody String token){
		System.out.println("GAUTAM HERE IS THE STUDENT COMPLETED LIST!!!!!!!: "+aiService.getCompletedAssignmentInstancesByStudent(studentId));
		//if(aService.authorizeStudent(studentId, token)) {
			System.out.println("GAUTAM HERE IS THE STUDENT COMPLETED LIST!!!!!!!: "+aiService.getCompletedAssignmentInstancesByStudent(studentId));
			return aiService.getCompletedAssignmentInstancesByStudent(studentId);
		//}else {
		//	return null;
		//}
	}
	
	@RequestMapping(path = "/teacher-completed-assignments", method = RequestMethod.GET)
	@ResponseBody
	@CrossOrigin
	public List<AssignmentInstanceDTO> getTeacherCompletedAssignments(@RequestParam(name = "teacherId",required =true) Integer teacherId){//, @RequestBody String token){
		System.out.println("GAUTAM HERE IS THE TEACHER COMPLETED LIST!!!!!!!: "+aiService.getCompletedAssignmentInstancesByTeacher(teacherId));
		//if(aService.authorizeTeacher(teacherId, token)) {
			System.out.println("GAUTAM HERE IS THE TEACHER COMPLETED LIST!!!!!!!: "+aiService.getCompletedAssignmentInstancesByTeacher(teacherId));
			return aiService.getCompletedAssignmentInstancesByTeacher(teacherId);
		//}
		//return null;
	}
}
