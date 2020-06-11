package com.revature.ams.domain;

public class AssignmentTemplate {
	
	assignment_template_id serial primary key,
	assignment_type varchar not null,
	assignment_title varchar not null,
	assignment_creation_datetime timestamp with time zone not null, -- w/ or w/out timezone?
	assignment_due_datetime timestamp with time zone not null,
	assignment_maxpoints numeric(5,2) check (assignment_maxpoints = 100.00) not null

}
