--------------------------------
-- Project 2 Preliminary Tables 
--------------------------------
create schema ams;
-- drop table ams.student cascade;
create table ams.student(
student_id bigint primary key,
student_firstname varchar not null,
student_lastname varchar not null,
student_email varchar not null,
student_pw varchar not null,
student_grade_level varchar not null
);

-- drop table ams.teacher cascade;
create table ams.teacher(
teacher_id bigint primary key,
teacher_firstname varchar not null,
teacher_lastname varchar not null,
teacher_email varchar not null,
teacher_pw varchar not null,
teacher_subject varchar not null
);

-- drop table ams.question cascade;
create table ams.question(-- one-to-many with assignment_template
question_id serial primary key,
assignment_template_id bigint not null, --fk
question_number int not null,
question_string text not null,
question_maxpoints numeric(5,2) check(question_maxpoints<=100.00) not null -- Max number of points you can get for question
);

-- drop table ams.answers cascade;
create table ams.answers(-- many-to-one with question, many-to-one with student, many-to-one with assignment_instance
answers_id serial primary key,
answers_questions_id bigint not null, --fk
answers_student_id bigint not null, --fk
answers_assignment_instance_id bigint not null, --fk
answers_string text,
answers_points numeric(5,2) check(answers_points<=100.00),
answers_comments text
);

drop table ams.assignment_instance cascade;
create table ams.assignment_instance(-- many to one with assignment_template, many to one with teacher, many to one with student
assignment_instance_id serial primary key,
assignment_template_id bigint not null, --fk
assignment_teacher_id bigint not null, --fk
assignment_student_id bigint not null, --fk
assignment_completion_datetime timestamp with time zone,
assignment_graded_datetime timestamp with time zone,
assignment_finalgrade numeric(5,2) check(assignment_finalgrade <= 100.00)
);

drop table ams.assignment_template cascade;
create table ams.assignment_template(
assignment_template_id serial primary key,
assignment_type varchar not null,
assignment_title varchar not null,
assignment_creation_datetime timestamp with time zone not null, -- w/ or w/out timezone?
assignment_due_datetime timestamp with time zone not null,
assignment_maxpoints numeric(5,2) check (assignment_maxpoints = 100.00) not null
);
------------------------------------
-- Project 2 Preliminary Foreign Keys
------------------------------------

--question table FKs
alter table ams.question add constraint FK_question_assignment_template_id
	foreign key (assignment_template_id) references ams.assignment_template (assignment_template_id) on delete cascade on update cascade;
create index i_FK_question_assignment_template_id on ams.question (assignment_template_id);

--answers table FKs
alter table ams.answers add constraint FK_answers_questions_id
	foreign key (answers_questions_id) references ams.question (question_id) on delete cascade on update cascade;
create index i_FK_answers_questions_id on ams.answers (answers_questions_id);

alter table ams.answers add constraint FK_answers_student_id
	foreign key (answers_student_id) references ams.student (student_id) on delete cascade on update cascade;
create index i_FK_answers_student_id on ams.answers (answers_student_id);

alter table ams.answers add constraint FK_answers_assignment_instance_id
	foreign key (answers_assignment_instance_id) references ams.assignment_instance (assignment_instance_id) on delete cascade on update cascade;
create index i_FK_answers_assignment_instance_id on ams.answers (answers_assignment_instance_id);

--assignment_instance table FKs
alter table ams.assignment_instance add constraint FK_assignment_template_id
	foreign key (assignment_template_id) references ams.assignment_template (assignment_template_id) on delete cascade on update cascade;
create index i_FK_assignment_template_id on ams.assignment_instance (assignment_template_id);

alter table ams.assignment_instance add constraint FK_assignment_teacher_id
	foreign key (assignment_teacher_id) references ams.teacher (teacher_id) on delete cascade on update cascade;
create index i_FK_assignment_teacher_id on ams.assignment_instance (assignment_teacher_id);

alter table ams.assignment_instance add constraint FK_assignment_student_id
	foreign key (assignment_student_id) references ams.student (student_id) on delete cascade on update cascade;
create index i_FK_assignment_student_id on ams.assignment_instance (assignment_student_id);



