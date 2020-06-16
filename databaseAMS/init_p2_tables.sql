/***********************************************************************************
* PROJECT 2 PRELIMINARY TABLES 
************************************************************************************/

--------------------------------------------------
-- CREATE SCHEMA
--------------------------------------------------
create schema ams;
--------------------------------------------------

--------------------------------------------------
-- DROP TABLES
--------------------------------------------------
-- drop table ams.student cascade;
-- drop table ams.teacher cascade;
-- drop table ams.question cascade;
-- drop table ams.answers cascade;
-- drop table ams.assignment_instance cascade;
-- drop table ams.assignment_template cascade;
--------------------------------------------------

--------------------------------------------------
-- DROP FUNCTIONS
--------------------------------------------------
-- drop function all_new_assignments();
-- drop function all_completed_assignments();
-- drop function all_graded_assignments();
-- drop function all_new_assignments_student(bigint);
-- drop function all_completed_assignments_student(bigint);
-- drop function all_graded_assignments_student(bigint);
-- drop function all_completed_assignments_teacher(bigint);
-- drop function all_graded_assignments_teacher(bigint);
--------------------------------------------------


--------------------------------------------------
-- CREATE TABLES
--------------------------------------------------

create table ams.student(
student_id bigint primary key,
student_firstname varchar not null,
student_lastname varchar not null,
student_email varchar not null,
student_pw varchar not null,
student_class varchar not null,
student_school varchar not null
);

create table ams.teacher(
teacher_id bigint primary key,
teacher_firstname varchar not null,
teacher_lastname varchar not null,
teacher_email varchar not null,
teacher_pw varchar not null,
teacher_subject varchar not null,
teacher_school varchar not null
);

create table ams.question(-- many-to-one with assignment_template
question_id serial primary key,
assignment_template_id bigint not null, --fk
question_number int not null,
question_string text not null,
question_maxpoints numeric(5,2) check(question_maxpoints<=100.00) not null -- Max number of points you can get for question
);

create table ams.answers(-- many-to-one with question, many-to-one with student, many-to-one with assignment_instance
answers_id serial primary key,
answers_questions_id bigint not null, --fk
answers_student_id bigint not null, --fk
answers_assignment_instance_id bigint not null, --fk
answers_string text,
answers_points numeric(5,2) check(answers_points<=100.00),
answers_comments text
);

--------------------------------------------------------
-- CREATE ENUM TYPE status
--------------------------------------------------------
create type status as enum('NEW', 'COMPLETED', 'GRADED');
--------------------------------------------------------

create table ams.assignment_instance(-- many-to-one with assignment_template, many-to-one with teacher, many-to-one with student
assignment_instance_id serial primary key,
assignment_template_id bigint not null, --fk
assignment_teacher_id bigint not null, --fk
assignment_student_id bigint not null, --fk
assignment_completion_date date,
assignment_completion_time time,
assignment_graded_date date,
assignment_graded_time time,
assignment_finalgrade numeric(5,2) check(assignment_finalgrade <= 100.00),
assignment_status status not null
);

create table ams.assignment_template(
assignment_template_id serial primary key,
assignment_type varchar not null,
assignment_title varchar not null,
assignment_creation_date date not null,
assignment_creation_time time not null,
assignment_due_date date not null,
assignment_due_time time not null,
assignment_maxpoints numeric(5,2) check (assignment_maxpoints = 100.00) not null
);

------------------------------------------------------------------------------------------------------------
--  CREATE FOREIGN KEYS
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
-- question TABLE FKs
------------------------------------------------------------------------------------------------------------
alter table ams.question add constraint FK_question_assignment_template_id
	foreign key (assignment_template_id) references ams.assignment_template (assignment_template_id) on delete cascade on update cascade;
create index i_FK_question_assignment_template_id on ams.question (assignment_template_id);
------------------------------------------------------------------------------------------------------------
-- answers TABLE FKs
------------------------------------------------------------------------------------------------------------
alter table ams.answers add constraint FK_answers_questions_id
	foreign key (answers_questions_id) references ams.question (question_id) on delete cascade on update cascade;
create index i_FK_answers_questions_id on ams.answers (answers_questions_id);

alter table ams.answers add constraint FK_answers_student_id
	foreign key (answers_student_id) references ams.student (student_id) on delete cascade on update cascade;
create index i_FK_answers_student_id on ams.answers (answers_student_id);

alter table ams.answers add constraint FK_answers_assignment_instance_id
	foreign key (answers_assignment_instance_id) references ams.assignment_instance (assignment_instance_id) on delete cascade on update cascade;
create index i_FK_answers_assignment_instance_id on ams.answers (answers_assignment_instance_id);
------------------------------------------------------------------------------------------------------------
-- assignment_instance TABLE FKs
------------------------------------------------------------------------------------------------------------
alter table ams.assignment_instance add constraint FK_assignment_template_id
	foreign key (assignment_template_id) references ams.assignment_template (assignment_template_id) on delete cascade on update cascade;
create index i_FK_assignment_template_id on ams.assignment_instance (assignment_template_id);

alter table ams.assignment_instance add constraint FK_assignment_teacher_id
	foreign key (assignment_teacher_id) references ams.teacher (teacher_id) on delete cascade on update cascade;
create index i_FK_assignment_teacher_id on ams.assignment_instance (assignment_teacher_id);

alter table ams.assignment_instance add constraint FK_assignment_student_id
	foreign key (assignment_student_id) references ams.student (student_id) on delete cascade on update cascade;
create index i_FK_assignment_student_id on ams.assignment_instance (assignment_student_id);
------------------------------------------------------------------------------------------------------------


------------------------------------------------------------------------------------------------------------
-- CREATE FUNCTIONS
------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------
-- Retrieve all new assignments 
------------------------------------------------------------------------------------------------------------
create or replace function all_new_assignments() returns 
table(assignment_instance_id bigint, assignment_template_id bigint, 
assignment_teacher_id bigint, assignment_student_id bigint, assignment_completion_date date,
assignment_completion_time time, assignment_graded_date date, assignment_graded_time time,
assignment_finalgrade numeric(5,2), assignment_status status) as 
$new_assignments$
begin
	return query (select * from assignment_instance ai where ai.assignment_status = 'NEW');
end;
$new_assignments$ language plpgsql;

-- select * from all_new_assignments();

------------------------------------------------------------------------------------------------------------
-- Retrieve all completed assignments
------------------------------------------------------------------------------------------------------------
create or replace function all_completed_assignments() returns 
table(assignment_instance_id bigint, assignment_template_id bigint, 
assignment_teacher_id bigint, assignment_student_id bigint, assignment_completion_date date,
assignment_completion_time time, assignment_graded_date date, assignment_graded_time time,
assignment_finalgrade numeric(5,2), assignment_status status) as 
$completed_assignments$
begin
	return query (select * from assignment_instance ai where ai.assignment_status = 'COMPLETED');
end;
$completed_assignments$ language plpgsql;

-- select * from all_completed_assignments();
 
------------------------------------------------------------------------------------------------------------
-- Retrieve all graded assignments
------------------------------------------------------------------------------------------------------------
create or replace function all_graded_assignments() returns 
table(assignment_instance_id bigint, assignment_template_id bigint, 
assignment_teacher_id bigint, assignment_student_id bigint, assignment_completion_date date,
assignment_completion_time time, assignment_graded_date date, assignment_graded_time time,
assignment_finalgrade numeric(5,2), assignment_status status) as 
$graded_assignments$
begin
	return query (select * from assignment_instance ai where ai.assignment_status = 'GRADED');
end;
$graded_assignments$ language plpgsql;

-- select * from all_graded_assignments();
 
------------------------------------------------------------------------------------------------------------
-- Retrieve all new assignments for a particular student (by id)
------------------------------------------------------------------------------------------------------------
create or replace function all_new_assignments_student(student_id in bigint) returns 
table(assignment_instance_id bigint, assignment_template_id bigint, 
assignment_teacher_id bigint, assignment_student_id bigint, assignment_completion_date date,
assignment_completion_time time, assignment_graded_date date, assignment_graded_time time,
assignment_finalgrade numeric(5,2), assignment_status status) as 
$new_student_assignments$
begin
	return query (select * from assignment_instance ai where ai.assignment_status = 'NEW' and ai.assignment_student_id = student_id);
end;
$new_student_assignments$ language plpgsql;
-- select * from all_new_assignments_student(student_id);

------------------------------------------------------------------------------------------------------------
-- Retrieve all completed assignments for a particular student (by id)
------------------------------------------------------------------------------------------------------------
create or replace function all_completed_assignments_student(student_id in bigint) returns 
table(assignment_instance_id bigint, assignment_template_id bigint, 
assignment_teacher_id bigint, assignment_student_id bigint, assignment_completion_date date,
assignment_completion_time time, assignment_graded_date date, assignment_graded_time time,
assignment_finalgrade numeric(5,2), assignment_status status) as 
$completed_student_assignments$
begin
	return query (select * from assignment_instance ai where ai.assignment_status = 'COMPLETED' and ai.assignment_student_id = student_id);
end;
$completed_student_assignments$ language plpgsql;
-- select * from all_completed_assignments_student(student_id);

------------------------------------------------------------------------------------------------------------
-- Retrieve all graded assignments for a particular student (by id)
------------------------------------------------------------------------------------------------------------
create or replace function all_graded_assignments_student(student_id in bigint) returns 
table(assignment_instance_id bigint, assignment_template_id bigint, 
assignment_teacher_id bigint, assignment_student_id bigint, assignment_completion_date date,
assignment_completion_time time, assignment_graded_date date, assignment_graded_time time,
assignment_finalgrade numeric(5,2), assignment_status status) as 
$graded_student_assignments$
begin
	return query (select * from assignment_instance ai where ai.assignment_status = 'GRADED' and ai.assignment_student_id = student_id);
end;
$graded_student_assignments$ language plpgsql;
-- select * from all_graded_assignments_student(student_id);

------------------------------------------------------------------------------------------------------------
-- Retrieve all completed assignments that were assigned by a particular teacher (by id) 
------------------------------------------------------------------------------------------------------------
create or replace function all_completed_assignments_teacher(teacher_id in bigint) returns 
table(assignment_instance_id bigint, assignment_template_id bigint, 
assignment_teacher_id bigint, assignment_student_id bigint, assignment_completion_date date,
assignment_completion_time time, assignment_graded_date date, assignment_graded_time time,
assignment_finalgrade numeric(5,2), assignment_status status) as 
$completed_teacher_assignments$
begin
	return query (select * from assignment_instance ai where ai.assignment_status = 'COMPLETED' and ai.assignment_teacher_id = teacher_id);
end;
$completed_teacher_assignments$ language plpgsql;
-- select * from all_completed_assignments_teacher(teacher_id);

------------------------------------------------------------------------------------------------------------
-- Retrieve all graded assignments that were assigned by a particular teacher (by id) 
------------------------------------------------------------------------------------------------------------
create or replace function all_graded_assignments_teacher(teacher_id in bigint) returns 
table(assignment_instance_id bigint, assignment_template_id bigint, 
assignment_teacher_id bigint, assignment_student_id bigint, assignment_completion_date date,
assignment_completion_time time, assignment_graded_date date, assignment_graded_time time,
assignment_finalgrade numeric(5,2), assignment_status status) as 
$graded_teacher_assignments$
begin
	return query (select * from assignment_instance ai where ai.assignment_status = 'GRADED' and ai.assignment_teacher_id = teacher_id);
end;
$graded_teacher_assignments$ language plpgsql;
-- select * from all_graded_assignments_teacher(teacher_id);

