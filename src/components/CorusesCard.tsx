import { Course } from "@/types/course"
import { CourseCardProps } from "@/types/course"

// type Course = {
//         id: number;
//         code: string;
//         title: string;
//         credits: number;
//         isOpen: boolean;
// };

// type CourseCardProps = { 
//   course : Course;
// };


export default function CoursesCard({course}: CourseCardProps){
    return(
        <>
                <article key={course.id} className="courseCard">
                    <h2>{course.title}</h2>
                    <p>รหัสวิชา: {course.code}</p>
                    <p>{course.credits} หน่วยกิต</p>
                    <p>
                        {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
                    </p>
                </article>
        </>
    )
}