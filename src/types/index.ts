// User Types
export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
  createdAt: string;
}

export interface Student extends User {
  studentId: string;
  groupId: string;
  averageRating: number;
  completedCourses: number;
}

export interface Teacher extends User {
  teacherId: string;
  specialization: string;
  courses: string[];
  rating: number;
}

export interface Admin extends User {
  adminId: string;
  permissions: string[];
}

// Course & Group Types
export interface Course {
  id: string;
  name: string;
  description: string;
  teacherId: string;
  students: string[];
  duration: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  createdAt: string;
}

export interface Group {
  id: string;
  name: string;
  teacherId: string;
  students: Student[];
  courseId: string;
}

// Homework Types
export interface Homework {
  id: string;
  title: string;
  description: string;
  courseId: string;
  dueDate: string;
  maxScore: number;
  createdAt: string;
  createdBy: string;
}

export interface HomeworkSubmission {
  id: string;
  homeworkId: string;
  studentId: string;
  content: string;
  file?: string;
  submittedAt: string;
  score?: number;
  feedback?: string;
}

// Rating & Review Types
export interface Rating {
  id: string;
  courseId: string;
  studentId: string;
  score: number;
  comment: string;
  createdAt: string;
}

// Exam Types
export interface Exam {
  id: string;
  title: string;
  courseId: string;
  questions: ExamQuestion[];
  duration: number;
  maxScore: number;
  startDate: string;
  endDate: string;
}

export interface ExamQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'short-answer' | 'essay';
  options?: string[];
  correctAnswer?: string;
  score: number;
}

export interface ExamResult {
  id: string;
  examId: string;
  studentId: string;
  answers: ExamAnswer[];
  score: number;
  percentage: number;
  completedAt: string;
}

export interface ExamAnswer {
  questionId: string;
  answer: string;
  isCorrect: boolean;
}

// AI Helper Types
export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface AIContext {
  homeworkId?: string;
  examId?: string;
  courseId?: string;
  topic?: string;
}

// Auth Types
export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  fullName: string;
  role: 'student' | 'teacher';
}
