package com.revature.ams.dao;

import java.util.List;

import com.revature.ams.domain.AssignmentInstance;

public interface AssignmentInstanceDAO {
	public void createAssignmentInstance(AssignmentInstance assignmentInstance);
	public void deleteAssignmentInstance(AssignmentInstance assignmentInstance);
	public void updateAssignmentInstance(AssignmentInstance assignmentInstance);
	public AssignmentInstance getAssignmentInstance(int assignmentInstanceId);
	public AssignmentInstance getAssignmentInstance(String value, String column);
	List<AssignmentInstance> getGradedAssignmentInstancesByTeacher(int teacherId);
	List<AssignmentInstance> getCompletedAssignmentInstancesByTeacher(int teacherId);
	List<AssignmentInstance> getGradedAssignmentInstancesByStudent(int studentId);
	List<AssignmentInstance> getCompletedAssignmentInstancesByStudent(int studentId);
	List<AssignmentInstance> getNewAssignmentInstancesByStudent(int studentId);
}
