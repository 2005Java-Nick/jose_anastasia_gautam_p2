package com.revature.ams.services;

import com.revature.ams.dto.Message;

public interface LoginService {
	public Message login(int userId, String password);
}
