import { create } from 'zustand';
import { Course } from '@types/index';

interface CourseStore {
  courses: Course[];
  selectedCourse: Course | null;
  isLoading: boolean;
  setCourses: (courses: Course[]) => void;
  setSelectedCourse: (course: Course | null) => void;
  setLoading: (loading: boolean) => void;
  addCourse: (course: Course) => void;
  removeCourse: (courseId: string) => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  selectedCourse: null,
  isLoading: false,
  setCourses: (courses) => set({ courses }),
  setSelectedCourse: (selectedCourse) => set({ selectedCourse }),
  setLoading: (isLoading) => set({ isLoading }),
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  removeCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    })),
}));
