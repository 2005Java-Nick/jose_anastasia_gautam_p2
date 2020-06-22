import { QuestionContent } from './questioncontent.interface';

export interface AssignmentDTO {
    instanceId: number;
    course: string;
    assignmentType: string;
    assignmentStatus: string;
    assignmentName: string;
    teacherName: string;
    studentName: string;
    dueDate: string;
    dueTime: string; 
    completionDate: string;
    completionTime: string;
    gradedDate: string;
    gradedTime: string;
    grade: number;
    questionContent: QuestionContent[];
  }
  