export type Course = {
        id: number;
        code: string;
        title: string;
        credits: number;
        isOpen: boolean;
    };

export type CourseCardProps = { 
  course: Course; 
};