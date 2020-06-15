package com.revature.ams.dto;

public class Message {
	private boolean successStatus;
	private String info;
	
	public Message() {
		super();
	};
	
	public Message(boolean successStatus, String info) {
		super();
		this.successStatus = successStatus;
		this.info = info;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((info == null) ? 0 : info.hashCode());
		result = prime * result + (successStatus ? 1231 : 1237);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Message other = (Message) obj;
		if (info == null) {
			if (other.info != null)
				return false;
		} else if (!info.equals(other.info))
			return false;
		if (successStatus != other.successStatus)
			return false;
		return true;
	}
	
}
