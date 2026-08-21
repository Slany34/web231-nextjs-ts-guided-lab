import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  const siteName = "Next-js";
  const courseCount: number = 4;
  const isOpen: boolean = true;

  const topics: string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "Next.js",
  ];
  return (
    <div>
        <h1>{siteName}</h1>
        <p>จำนวนรายวิชา: {courseCount}</p>
        <p>สถานะระบบ {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
        <ul>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
    </div>
  );
}
