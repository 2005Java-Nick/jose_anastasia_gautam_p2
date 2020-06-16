package com.revature.ams.dao;

import com.revature.ams.domain.AssignmentTemplate;

public interface AssignmentTemplateDAO {
	public void createAssignmentTemplate(AssignmentTemplate assignmentTemplate);
	public void deleteAssignmentTemplate(AssignmentTemplate assignmentTemplate);
	public void updateAssignmentTemplate(AssignmentTemplate assignmentTemplate);
	public AssignmentTemplate getAssignmentTemplate(int assignmentTemplateId);
	public AssignmentTemplate getAssignmentTemplate(String value, String column);
}
