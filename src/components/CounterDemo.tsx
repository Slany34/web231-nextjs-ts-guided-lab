"use client";

import { useState } from "react";

export default function CounterDemo() {
    const [count, setCount] = useState(0);

    function handleClick() {
        // setCount(count + 1);

        // setCount(count + 1); 
        // setCount(count + 1); เพิ่มค่า count ขึ้น 1 แต่เนื่องจาก React อาจจะ batch การอัปเดต state ทำให้ค่า count ไม่ได้เพิ่มขึ้นตามที่คาดหวัง
        // setCount(count + 1);
        setCount((prevCount) => prevCount + 1); // เก็บค่า count ก่อนหน้าและเพิ่มขึ้น 1
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <button type="button" onClick={handleClick}>
            คลิกแล้ว {count} ครั้ง
        </button>
    );
} 