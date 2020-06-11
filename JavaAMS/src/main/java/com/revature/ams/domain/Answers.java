package com.revature.ams.domain;

public class Answers {
	
	answers_id serial primary key,
	answers_questions_id bigint not null, --fk
	answers_student_id bigint not null, --fk
	answers_assignment_instance_id bigint not null, --fk
	answers_string text,
	answers_points numeric(5,2) check(answers_points<=100.00),
	answers_comments text

}
