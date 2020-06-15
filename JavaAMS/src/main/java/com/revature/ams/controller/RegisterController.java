package com.revature.ams.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegisterController {
	@RequestMapping(path = "/register", method = RequestMethod.GET)
	//TODO: FILL IN CORRECT PARAMS!!
	public boolean register(@RequestParam(name="userId", required=true) String userId,@RequestParam(name="userPassword", required=true) String password) {
		//TODO:LOGIC
		return true;
	}
}
