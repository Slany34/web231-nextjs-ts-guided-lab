"use client"; // จำเป็นสำหรับ Next.js เมื่อมีการใช้คลิก (onClick) หรือ State

import { useState } from "react";

export default function PopupExample() {
  // 1. สร้าง State สำหรับควบคุมการเปิด/ปิด (ค่าเริ่มต้นคือ false = ปิดอยู่)
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      {/* 2. ข้อความที่กดได้ (เมื่อกดจะเปลี่ยน isPopupOpen เป็น true) */}
      <span 
        onClick={() => setIsPopupOpen(true)} 
        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
      >
        คลิกเพื่อดูข้อมูลวิชา
      </span>

      {/* 3. เงื่อนไข: ถ้า isPopupOpen เป็น true ให้แสดงโค้ดด้านล่างนี้ (ส่วนของป๊อปอัพ) */}
      {isPopupOpen && (
        // พื้นหลังสีดำโปร่งแสง (คลุมเต็มหน้าจอ)
        <div style={overlayStyle}>
          
          // กล่องสีขาวสำหรับแสดงเนื้อหา
          <div style={modalStyle}>
            
            {/* 4. ปุ่มกากบาท (เมื่อกดจะเปลี่ยน isPopupOpen กลับเป็น false เพื่อปิด) */}
            <button 
              onClick={() => setIsPopupOpen(false)} 
              style={closeButtonStyle}
            >
              ✕
            </button>

            {/* ข้อมูลที่จะแสดงในป๊อปอัพ */}
            <h2 style={{ marginTop: 0 }}>รายละเอียดวิชา</h2>
            <p><strong>รหัสวิชา:</strong> CS101</p>
            <p><strong>ชื่อวิชา:</strong> Introduction to Programming</p>
            <p><strong>หน่วยกิต:</strong> 3</p>
            
          </div>
        </div>
      )}
    </div>
  );
}

// --- ส่วนของการตกแต่ง (Styles) ---
// หมายเหตุ: ในโปรเจกต์จริง คุณสามารถนำไปเขียนเป็นคลาส Tailwind CSS แทนได้ครับ

const overlayStyle: React.CSSProperties = {
  position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)", // สีดำโปร่งแสง
  display: "flex", justifyContent: "center", alignItems: "center", // จัดให้อยู่กึ่งกลางหน้าจอ
  zIndex: 1000 // ทำให้ป๊อปอัพอยู่ชั้นบนสุด
};

const modalStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  maxWidth: "90%",
  position: "relative", // เพื่อให้อ้างอิงตำแหน่งปุ่มกากบาทได้
  color: "black"
};

const closeButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "15px",
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  color: "gray"
};