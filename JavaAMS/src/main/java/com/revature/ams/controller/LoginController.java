package com.revature.ams.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.ams.dto.Message;
import com.revature.ams.services.LoginService;


@Controller
public class LoginController {
	
	private LoginService loginService;
	
	public LoginService getLoginService() {
		return loginService;
	}
	
	@Autowired
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}

	@RequestMapping(path = "/login", method = RequestMethod.POST)
	@ResponseBody
	public Message login(@RequestParam(name="userId", required=true) int userId,
			@RequestParam(name="userPassword", required=true) String password) {
		return loginService.login(userId, password);
		
	}
	
	
	
	
}
