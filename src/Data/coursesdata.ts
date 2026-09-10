import { Course } from "@/types/course";

export const course: Course[] = [
    {
        id: 1,
        code: "10301231",
        title: "Web Technology",
        credits: 3,
        isOpen: true,
        isFavorite: false,
        onToggleFavorite: () => {}
    },
    {
        id: 2,
        code: "10301232",
        title: "Network",
        credits: 3,
        isOpen: true,
        isFavorite: false,
        onToggleFavorite: () => {}
    },
    {
        id: 3,
        code: "10301233",
        title: "Database Systems",
        credits: 3,
        isOpen: false,
        isFavorite: false,
        onToggleFavorite: () => {}
    },
    {
        id: 4,
        code: "10301234",
        title: "Structure Relational Database",
        credits: 3,
        isOpen: true,
        isFavorite: false,
        onToggleFavorite: () => {}
    },
    { id: 5, code: "10301231", title: "เว็บเทคโนโลยี", credits: 3, isOpen: true, isFavorite: false, onToggleFavorite: () => {} },
    { id: 6, code: "10301202", title: "โครงสร้างข้อมูล", credits: 3, isOpen: true, isFavorite: false, onToggleFavorite: () => {} },
    { id: 7, code: "10301245", title: "ระบบฐานข้อมูล", credits: 3, isOpen: false, isFavorite: false, onToggleFavorite: () => {} },
    { id: 8, code: "10301321", title: "วิศวกรรมซอฟต์แวร์", credits: 3, isOpen: true, isFavorite: false, onToggleFavorite: () => {} },
];