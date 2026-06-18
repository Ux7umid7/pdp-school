export const NAVIGATION = {
  PUBLIC: [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/about', label: 'Biz haqida' },
    { href: '/login', label: 'Kirish' },
    { href: '/register', label: 'Ro\'yxatdan o\'tish' },
  ],
  STUDENT: [
    { href: '/dashboard/student', label: 'Asosiy sahifa' },
    { href: '/dashboard/student/courses', label: 'Kurslar' },
    { href: '/dashboard/student/homework', label: 'Uy ishlar' },
    { href: '/dashboard/student/exams', label: 'Imtihonlar' },
    { href: '/dashboard/student/ai-helper', label: 'AI Yordamchi' },
    { href: '/dashboard/student/profile', label: 'Profil' },
  ],
  TEACHER: [
    { href: '/dashboard/teacher', label: 'Asosiy sahifa' },
    { href: '/dashboard/teacher/courses', label: 'Kurslar' },
    { href: '/dashboard/teacher/homework', label: 'Uy ishlar' },
    { href: '/dashboard/teacher/exams', label: 'Imtihonlar' },
    { href: '/dashboard/teacher/students', label: 'O\'quvchilar' },
    { href: '/dashboard/teacher/profile', label: 'Profil' },
  ],
  ADMIN: [
    { href: '/dashboard/admin', label: 'Asosiy sahifa' },
    { href: '/dashboard/admin/students', label: 'O\'quvchilar' },
    { href: '/dashboard/admin/teachers', label: 'O\'qituvchilar' },
    { href: '/dashboard/admin/courses', label: 'Kurslar' },
    { href: '/dashboard/admin/reports', label: 'Hisobotlar' },
    { href: '/dashboard/admin/settings', label: 'Sozlamalar' },
  ],
} as const;
