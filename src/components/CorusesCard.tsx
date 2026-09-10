"use client";
import { Course } from "@/types/course"

// type Course = {
//         id: number;
//         code: string;
//         title: string;
//         credits: number;
//         isOpen: boolean;
// };

export type CourseCardProps = {
    course: Course;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
};


export default function CoursesCard({ course, isFavorite, onToggleFavorite }: CourseCardProps) {
    return (
        <>
            <article>
                <h2>{course.title}</h2>
                <p>รหัสวิชา: {course.code}</p>
                <p>{course.credits} หน่วยกิต</p>
                <p>{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>

                <button
                    type="button"
                    aria-pressed={course.isFavorite}
                    onClick={() => onToggleFavorite(course.id)}
                >
                    {course.isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"}
                </button>
            </article>
        </>
    )
}