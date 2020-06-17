package com.revature.ams.dao;

import java.util.List;

import com.revature.ams.domain.Student;

public interface StudentDAO {
	public void createStudent(Student student);
	public void deleteStudent(Student student);
	public void updateStudent(Student student);
	public Student getStudent(int studentId);
	public Student getStudent(String value, String column);
	public List<Student> getAllStudentsByColumn(String value, String column);
}
