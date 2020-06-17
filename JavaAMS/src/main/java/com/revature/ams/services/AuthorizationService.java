package com.revature.ams.services;

public interface AuthorizationService {
	public boolean authorizeStudent(int studentId, String token);
	public boolean authorizeTeacher(int teacherId, String token);
}
