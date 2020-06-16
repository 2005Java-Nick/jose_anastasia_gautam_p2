export interface AssignmentInstanceDisplay {
  course : string;
  assignmentType: string;
  assignmentStatus: string;
  assignmentName: string;
  teacherName: string;
  studentName: string;
  dueDate: {
    date: string;
    time: string;
  }
  completionDate: {
    date: string;
    time: string;
  }
  gradedDate: {
    date: string;
    time: string;
  }
  grade: number;
}
