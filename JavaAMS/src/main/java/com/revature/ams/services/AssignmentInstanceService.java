package com.revature.ams.services;

import java.util.List;

import com.revature.ams.domain.*;
import com.revature.ams.dto.*;
import com.revature.ams.dto.AssignmentInstanceDTO;

public interface AssignmentInstanceService {
	public AssignmentInstanceDTO convertAssignmentInstanceToDTO(AssignmentInstance ai);
	public List<AssignmentInstanceDTO> getAssignmentInstancesDTO(List<AssignmentInstance> assignmentInstances);
	
	public List<AssignmentInstanceDTO> getNewAssignmentInstancesByStudent(int studentId);
	public List<AssignmentInstanceDTO> getCompletedAssignmentInstancesByStudent(int studentId);
	public List<AssignmentInstanceDTO> getGradedAssignmentInstancesByStudent(int studentId);
	
	public List<AssignmentInstanceDTO> getCompletedAssignmentInstancesByTeacher(int teacherId);
	public List<AssignmentInstanceDTO> getGradedAssignmentInstancesByTeacher(int teacherId);
	
	public Message assigningAssignment(String studentClass,AssignmentTemplate at,Teacher t);
	public Message gradingCompletedAssignment(String aiId,String comments,String maxpoints);
	public Message takeNewAssignment(String aiId,String answers);//, String token);
}
