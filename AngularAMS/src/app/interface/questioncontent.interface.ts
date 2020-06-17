export interface QuestionContent {
    question: {
        questionString: string;
        maxPoints: number;
    },
    answer: string;
    grade: {
        questionPoints: number;
        comment: string;
    }
  }