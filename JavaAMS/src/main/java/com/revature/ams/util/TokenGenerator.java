package com.revature.ams.util;

import java.util.Random;

import org.jasypt.util.password.StrongPasswordEncryptor;
import org.springframework.stereotype.Component;

@Component
public class TokenGenerator {
	public String generateRandomToken() {
		String s = Integer.toString((int)(Math.random() * 999999999));
		String token = (new StrongPasswordEncryptor()).encryptPassword(s);
		return token;
	}
	
	public String encryptPassword(String password) {
		return (new StrongPasswordEncryptor()).encryptPassword(password);
	}
	
	public boolean correctPassword(String userpwd, String encryptpwd) {
		return (new StrongPasswordEncryptor()).checkPassword(userpwd, encryptpwd);
	}

}
