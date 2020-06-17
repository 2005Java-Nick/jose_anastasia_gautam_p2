package com.revature.ams.services;

import java.util.ArrayList;
import java.util.Set;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.ams.dao.AssignmentInstanceDAOHibernate;
import com.revature.ams.dao.StudentDAOHibernate;
import com.revature.ams.domain.*;
import com.revature.ams.dto.AssignmentInstanceDTO;
import com.revature.ams.dto.Message;
import com.revature.ams.dto.QuestionContent;

@Service
public class AssignmentInstanceServiceImpl implements AssignmentInstanceService{
	
	private AssignmentInstanceDAOHibernate assignmentInstanceDao;
	private StudentDAOHibernate studentDao;

	public AssignmentInstanceDAOHibernate getAssignmentInstanceDao() {
		return assignmentInstanceDao;
	}

	@Autowired
	public void setAssignmentInstanceDao(AssignmentInstanceDAOHibernate assignmentInstanceDao) {
		this.assignmentInstanceDao = assignmentInstanceDao;
	}

	public StudentDAOHibernate getStudentDao() {
		return studentDao;
	}

	@Autowired
	public void setStudentDao(StudentDAOHibernate studentDao) {
		this.studentDao = studentDao;
	}

	@Override
	public List<AssignmentInstanceDTO> getAssignmentInstancesDTO(
			List<AssignmentInstance> assignmentInstances) {
		List<AssignmentInstanceDTO> aiDTOList = new ArrayList<AssignmentInstanceDTO>();
		
		for(AssignmentInstance ai: assignmentInstances) {
			aiDTOList.add(convertAssignmentInstanceToDTO(ai));
		}
		return aiDTOList;
	}
	
	public Answers getAnswer(Question q, Set<Answers> answers){
		for(Answers a: answers) {
			if(a.getQuestion().getQuestionId()==q.getQuestionId()) {
				return a;
			}
		}
		return null;
	}
	
	public List<QuestionContent> createQuestionContent(AssignmentInstance ai) {
		List<QuestionContent> qcList = new ArrayList<QuestionContent>();
		for(Question q: ai.getAssignmentTemplate().getQuestions()) {
			QuestionContent qc = new QuestionContent();
			Answers a = getAnswer(q,ai.getAnswers());
			qc.setAnswer(a.getAnswersString());
			qc.setComment(a.getAnswersComments());
			qc.setMaxPoints(q.getQuestionMaxpoints());
			qc.setQuestionPoints(a.getAnswersPoints());
			qc.setQuestionString(q.getQuestionString());
			qcList.add(qc);
		}
		return qcList;
	}

	@Override
	public AssignmentInstanceDTO convertAssignmentInstanceToDTO(AssignmentInstance ai) {
		AssignmentInstanceDTO aiDTO = new AssignmentInstanceDTO();
		aiDTO.setAssignmentName(ai.getAssignmentTemplate().getAssignmentTitle());
		aiDTO.setAssignmentStatus(ai.getAssignmentStatus());
		aiDTO.setAssignmentType(ai.getAssignmentTemplate().getAssignmentType());
		aiDTO.setCompletionDate(ai.getAssignmentCompletionDate().toString());
		aiDTO.setCompletionTime(ai.getAssignmentCompletionTime().toString());
		aiDTO.setDueDate(ai.getAssignmentTemplate().getAssignmentDueDate().toString());
		aiDTO.setDueTime(ai.getAssignmentTemplate().getAssignmentDueTime().toString());
		aiDTO.setGrade(ai.getAssignmentFinalGrade());
		aiDTO.setGradedDate(ai.getAssignmentGradedDate().toString());
		aiDTO.setGradedTime(ai.getAssignmentGradedTime().toString());
		aiDTO.setInstanceId(ai.getAssignmentInstanceId());
		aiDTO.setStudentName(ai.getStudent().getStudentFirstname() +" "+ ai.getStudent().getStudentLastname());
		aiDTO.setTeacherName(ai.getTeacher().getTeacherFirstname() +" "+ ai.getTeacher().getTeacherLastname());
		aiDTO.setSubject(ai.getTeacher().getTeacherSubject());
		aiDTO.setQuestionContent(createQuestionContent(ai));
		
		return aiDTO;
	}
	
	@Override
	public List<AssignmentInstanceDTO> getNewAssignmentInstancesByStudent(int studentId) {
		List<AssignmentInstance> aiList = assignmentInstanceDao.getNewAssignmentInstancesByStudent(studentId);
		return getAssignmentInstancesDTO(aiList);
	}
	

	@Override
	public List<AssignmentInstanceDTO> getCompletedAssignmentInstancesByStudent(int studentId) {
		List<AssignmentInstance> aiList = assignmentInstanceDao.getCompletedAssignmentInstancesByStudent(studentId);
		return getAssignmentInstancesDTO(aiList);
	}

	@Override
	public List<AssignmentInstanceDTO> getGradedAssignmentInstancesByStudent(int studentId) {
		List<AssignmentInstance> aiList = assignmentInstanceDao.getGradedAssignmentInstancesByStudent(studentId);
		return getAssignmentInstancesDTO(aiList);
	}

	@Override
	public List<AssignmentInstanceDTO> getCompletedAssignmentInstancesByTeacher(int teacherId) {
		List<AssignmentInstance> aiList = assignmentInstanceDao.getCompletedAssignmentInstancesByTeacher(teacherId);
		return getAssignmentInstancesDTO(aiList);
	}

	@Override
	public List<AssignmentInstanceDTO> getGradedAssignmentInstancesByTeacher(int teacherId) {
		List<AssignmentInstance> aiList = assignmentInstanceDao.getGradedAssignmentInstancesByTeacher(teacherId);
		return getAssignmentInstancesDTO(aiList);
	}

	@Override
	public Message assigningAssignment(String studentClass, AssignmentTemplate at,Teacher t) {
		List<Student> students = studentDao.getAllStudentsByColumn(studentClass, "studentClass");
		for(Student s: students){
			AssignmentInstance ai = new AssignmentInstance();
			ai.setAssignmentTemplate(at);
			ai.setStudent(s);
			ai.setAssignmentStatus("NEW");
			ai.setTeacher(t);
			assignmentInstanceDao.createAssignmentInstance(ai);
		}
		if(students.size()>0) {
			String successfullyAssigned = "Teacher("+t.getTeacherId()+") assigned "+at.toString()+" to Class("+ studentClass+")";
			Message mSuccess = new Message(true,successfullyAssigned,t.getToken());
			return mSuccess;
		}else {
			String failedToAssign = "Teacher("+t.getTeacherId()+") FAILED to assign "+at.toString()+" to Class("+ studentClass+")";
			Message mFail = new Message(false, failedToAssign, t.getToken());
			return mFail;
		}
	}
	
	
	
	
	
	
	

}
