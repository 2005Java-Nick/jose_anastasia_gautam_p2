package com.revature.ams.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
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
			if(a==null) {
				qc.setAnswer(null);
				qc.setComment(null);
				qc.setQuestionPoints(0.0);
			}else {
				qc.setAnswer(a.getAnswersString());
				qc.setComment(a.getAnswersComments());
				qc.setQuestionPoints(a.getAnswersPoints());
			}
			qc.setMaxPoints(q.getQuestionMaxpoints());
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
		
		if(ai.getAssignmentCompletionDate() == null) {
			aiDTO.setCompletionDate(null);
		}else {
			aiDTO.setCompletionDate(ai.getAssignmentCompletionDate().toString());
		}
		
		if(ai.getAssignmentCompletionTime() == null) {
			aiDTO.setCompletionTime(null);
		}else {
			aiDTO.setCompletionTime(ai.getAssignmentCompletionTime().toString());
		}
		
		if(ai.getAssignmentTemplate().getAssignmentDueDate() == null) {
			aiDTO.setDueDate(null);
		}else {
			aiDTO.setDueDate(ai.getAssignmentTemplate().getAssignmentDueDate().toString());
		}
		
		if(ai.getAssignmentTemplate().getAssignmentDueDate() == null) {
			aiDTO.setDueDate(null);
		}else {
			aiDTO.setDueDate(ai.getAssignmentTemplate().getAssignmentDueDate().toString());
		}
		
		if(ai.getAssignmentTemplate().getAssignmentDueTime() == null) {
			aiDTO.setDueTime(null);
		}else {
			aiDTO.setDueTime(ai.getAssignmentTemplate().getAssignmentDueTime().toString());
		}
		
		if(ai.getAssignmentGradedDate() == null) {
			aiDTO.setGradedDate(null);
		}else {
			aiDTO.setGradedDate(ai.getAssignmentGradedDate().toString());
		}
		
		if(ai.getAssignmentGradedTime() == null) {
			aiDTO.setGradedTime(null);
		}else {
			aiDTO.setGradedTime(ai.getAssignmentGradedTime().toString());
		}
		
		aiDTO.setGrade(ai.getAssignmentFinalGrade());
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
	//Generic method to convert list to set 
	public static <T> Set<T> convertListToSet(List<T> list) 
    { 
        // create a set from the List 
        return list.stream().collect(Collectors.toSet()); 
    }

	@Override
	public Message gradingCompletedAssignment(String aiId,String comments,String maxpoints) {
		
		AssignmentInstance ai = assignmentInstanceDao.getAssignmentInstance(Integer.valueOf(aiId));
		
		Message mSuccess = new Message(true, "Teacher ("+ai.getTeacher().getTeacherId()+")" + "graded an assignment: " +ai.toString()+".",ai.getTeacher().getToken());
		Message mFail = new Message(false, "Teacher ("+ai.getTeacher().getTeacherId()+")" + "graded an assignment: " +ai.toString()+".",null);
		
		if(ai.getAssignmentStatus().equals("COMPLETED")) {
			comments = comments.replaceAll("^\\[|]$","");
			List<String> cList = new ArrayList<String>(Arrays.asList(comments.split(",")));
			
			maxpoints = maxpoints.replaceAll("^\\[|]$","");
			List<String> maxPointsListStrings = new ArrayList<String>(Arrays.asList(maxpoints.split(",")));
			List<Double> maxPointsList = new ArrayList<Double>();
			for(String point:maxPointsListStrings){
				maxPointsList.add(Double.valueOf(point));
			}
			
			Set<Answers> answers = ai.getAnswers();
			List<Answers> aList = new ArrayList<Answers>(answers.stream().collect(Collectors.toList()));
			for(int i =0; i<answers.size();i++) {
				aList.get(i).setAnswersPoints(maxPointsList.get(i));
				aList.get(i).setAnswersComments(cList.get(i));
				aList.get(i).setAnswersPoints(maxPointsList.get(i));
			}
			answers = convertListToSet(aList);
			
			Double finalGrade = 0.0;
			for(Double point:maxPointsList) {
				finalGrade += point;
			}
			
			ai.setAnswers(answers);
			ai.setAssignmentFinalGrade(finalGrade);
			ai.setAssignmentStatus("GRADED");
			assignmentInstanceDao.updateAssignmentInstance(ai);
			
			return mSuccess;
		}else {
			return mFail;
		}
		
	}

	@Override
	public Message takeNewAssignment(String aiId, String answers) {
		AssignmentInstance ai = assignmentInstanceDao.getAssignmentInstance(Integer.valueOf(aiId));
		String token = ai.getStudent().getToken();
		
		Message mSuccess = new Message(true, "Student ("+ai.getStudent().getStudentId()+")" + "completed a new assignment: " +ai.toString()+".",token);
		Message mFail = new Message(false, "Student ("+ai.getStudent().getStudentId()+")" + "FAILED to complete a new assignment: " +ai.toString()+".",null);
		
		if(ai.getAssignmentStatus().equals("NEW")) {
			answers = answers.replaceAll("^\\[|]$","");
			List<String> aList = new ArrayList<String>(Arrays.asList(answers.split(",")));
			
			Set<Answers> answerSet = ai.getAnswers();
			List<Answers> answerList = new ArrayList<Answers>(answerSet.stream().collect(Collectors.toList()));
			
			for(int i =0; i<answerSet.size();i++) {
				answerList.get(i).setAnswersString(aList.get(i));
			}
			answerSet = convertListToSet(answerList);
			ai.setAnswers(answerSet);
			
			ai.setAssignmentStatus("COMPLETED");
			assignmentInstanceDao.updateAssignmentInstance(ai);
			
			return mSuccess;
		}else {
			return mFail;
		}
	
	}

}
