package com.revature.ams.dto;

public class Message {
	private boolean successStatus;
	private String info;
	private String token;
	
	public Message() {
		super();
	};
	
	public Message(boolean successStatus, String info, String token) {
		super();
		this.successStatus = successStatus;
		this.info = info;
		this.token = token;
	}
	
	public boolean isSuccessStatus() {
		return successStatus;
	}
	public void setSuccessStatus(boolean successStatus) {
		this.successStatus = successStatus;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
}
