package com.revature.ams.dao;

import com.revature.ams.domain.Teacher;

public interface TeacherDAO {
	public void createTeacher(Teacher teacher);
	public void deleteTeacher(Teacher teacher);
	public void updateTeacher(Teacher teacher);
	public Teacher getTeacher(int teacherId);
	public Teacher getTeacher(String value, String column);
}
