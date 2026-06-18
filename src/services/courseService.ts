import api from './api';
import { Course } from '@types/index';

export const courseService = {
  getAllCourses: async (): Promise<Course[]> => {
    const response = await api.get('/courses');
    return response.data;
  },

  getCourseById: async (courseId: string): Promise<Course> => {
    const response = await api.get(`/courses/${courseId}`);
    return response.data;
  },

  createCourse: async (courseData: Partial<Course>): Promise<Course> => {
    const response = await api.post('/courses', courseData);
    return response.data;
  },

  updateCourse: async (courseId: string, courseData: Partial<Course>): Promise<Course> => {
    const response = await api.put(`/courses/${courseId}`, courseData);
    return response.data;
  },

  deleteCourse: async (courseId: string): Promise<void> => {
    await api.delete(`/courses/${courseId}`);
  },

  enrollStudent: async (courseId: string, studentId: string): Promise<void> => {
    await api.post(`/courses/${courseId}/enroll`, { studentId });
  },

  getStudentCourses: async (): Promise<Course[]> => {
    const response = await api.get('/courses/student/my-courses');
    return response.data;
  },
};
