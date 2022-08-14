export interface Course {
    id_course: number;
    course_name: string;
    clave: string;
    id_group: number;
    id_major: number;
    group_chief_id_student: null;
    group_name: string;
    major_name: string;
    id_gro_cou: number;
    status: string;
    start_date: string;
    end_date: string;
    id_teacher: string;
    teacher_name: string;
    assistence_days_dates: string[];
    students: Student[];
}

export interface Student {
    id_student: string;
    matricula: string;
    student_name: string;
    assistences: Assistence[];
    id_grade: number;
    grade: string;
    creation_date: string;
}

export interface Assistence {
    id_assistance: number;
    date_assistance: string;
    attended: number;
}