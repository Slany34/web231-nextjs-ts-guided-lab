import CoursesCard from "../../components/CorusesCard";
import {course} from "../../Data/coursesdata";

export default function CoursesPage() {
    // type Course = {
    //     id: number;
    //     code: string;
    //     title: string;
    //     credits: number;
    //     isOpen: boolean;
    // };

    //const courses: Course[] = [
        // {
        //     id: 1,
        //     code: "10301231",
        //     title: "Web Technology",
        //     credits: 3,
        //     isOpen: true,
        // },
        // {
        //     id: 2,
        //     code: "10301232",
        //     title: "Network",
        //     credits: 3,
        //     isOpen: true,
        // },
        // {
        //     id: 3,
        //     code: "10301233",
        //     title: "Database Systems",
        //     credits: 3,
        //     isOpen: false,
        // },
        // {
        //     id: 4,
        //     code: "10301234",
        //     title: "Structure Relational Database",
        //     credits: 3,
        //     isOpen: true,
        // },
    //];

    // const course: Course = {
    //     id: 1,
    //     code: "10301231",
    //     title: "Web Technology",
    //     credits: 3,
    //     isOpen: true,
    // };
    return (
        <div>
            {/* <article>
                <h2>{course.title}</h2>
                <p>รหัสวิชา: {course.code}</p>
                <p>{course.credits} หน่วยกิต</p>
                <p>{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
            </article> */}
            {course.map((course) => (
                // <article key={course.id} className="courseCard">
                //     <h2>{course.title}</h2>
                //     <p>รหัสวิชา: {course.code}</p>
                //     <p>{course.credits} หน่วยกิต</p>
                //     <p>
                //         {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
                //     </p>
                // </article>
                <CoursesCard key = {course.id} course={course} />
            ))}
        </div>
    );

}