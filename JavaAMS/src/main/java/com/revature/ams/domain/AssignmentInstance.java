package com.revature.ams.domain;

public class AssignmentInstance {
	
	assignment_instance_id serial primary key,
	assignment_template_id bigint not null, --fk
	assignment_teacher_id bigint not null, --fk
	assignment_student_id bigint not null, --fk
	assignment_completion_datetime timestamp with time zone,
	assignment_graded_datetime timestamp with time zone,
	assignment_finalgrade numeric(5,2) check(assignment_finalgrade <= 100.00),
	assignment_status status not null

}
