// "use client";

// import { FRB } from "@/types/favorite_band"
// import Image from 'next/image'
// import { FRBCardProps } from "@/types/favorite_band"

// import { useState } from "react";


// export default function FavoriteBand({ band }: FRBCardProps) {
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     return (
//         <article className="favorite-band">
//             <Image src={band.picture} alt={band.name} width={300} height={300} />
//             <h1>{band.name}</h1>
//             <p>{band.description}</p>
//             {band.members && (
//                 <>
//                     <h2>Members:</h2>
//                     <span>
//                         {band.members.map((member) => (
//                             <li id="members-list" onClick={() => setIsPopupOpen(true)} key={member}>{member}</li>
//                         ))}
//                     </span>
//                     {isPopupOpen && (
//         <div id="popup-overlay">
          
//           <div id="popup-modal">
            
//             <button 
//               onClick={() => setIsPopupOpen(false)} 
//               id="popup-close-button"
//             >
//               ✕
//             </button>

//             {/* ข้อมูลที่จะแสดงในป๊อปอัพ */}
//             <h2>{band.name} - Members</h2>
//             {band.members.map((member, index) => (
//                             <li key={member}>{member} - {band.img_members?.[index] && <Image src={band.img_members[index]} alt={member} width={200} height={200} />}</li>
//                         ))}
//           </div>
//         </div>
//       )}
//                 </>
//             )}
//         </article>

        
//     )
// }

"use client";

import { FRB } from "@/types/favorite_band"
import Image from 'next/image'
import { FRBCardProps } from "@/types/favorite_band"

import { useState } from "react";

export default function FavoriteBand({ band }: FRBCardProps) {
    // 1. เปลี่ยน State มารับค่าเป็นตัวเลข index (ถ้าเป็น null คือปิดป๊อปอัพ)
    const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null);

    return (
        <article className="favorite-band">
            <Image src={band.picture} alt={band.name} width={300} height={300} />
            <h1>{band.name}</h1>
            <p>{band.description}</p>
            
            {band.members && (
                <>
                    <h2>Members:</h2>
                    <span>
                        {/* 2. เพิ่ม index เข้ามาใน map */}
                        {band.members.map((member, index) => (
                            <li 
                                id="members-list" 
                                // 3. สั่งให้ State จำค่า index ของคนที่ถูกคลิก
                                onClick={() => setSelectedMemberIndex(index)} 
                                key={member}
                            >
                                {member}
                            </li>
                        ))}
                    </span>
                    
                    {/* 4. เช็คว่าถ้า selectedMemberIndex ไม่ใช่ null แสดงว่ามีคนถูกคลิก ให้เปิดป๊อปอัพ */}
                    {selectedMemberIndex !== null && (
                        <div id="popup-overlay">
                            <div id="popup-modal">
                                
                                <button 
                                    // 5. เมื่อกดกากบาท เซ็ตกลับเป็น null เพื่อปิดป๊อปอัพ
                                    onClick={() => setSelectedMemberIndex(null)} 
                                    id="popup-close-button"
                                >
                                    ✕
                                </button>

                                <h2>{band.name} - Member</h2>
                                
                                {/* 6. นำ .map() ออก แล้วดึงข้อมูลจาก index ที่เลือกมาแสดงแค่คนเดียว */}
                                <li style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <h3>{band.members[selectedMemberIndex]}</h3>
                                    
                                    {/* เช็คว่ามีรูปไหม ถ้ามีก็โชว์เฉพาะรูปของคนที่คลิก */}
                                    {band.img_members?.[selectedMemberIndex] && (
                                        <Image 
                                            src={band.img_members[selectedMemberIndex]} 
                                            alt={band.members[selectedMemberIndex]} 
                                            width={200} 
                                            height={200} 
                                            style={{ marginTop: '10px', borderRadius: '8px' }}
                                        />
                                    )}
                                </li>
                                
                            </div>
                        </div>
                    )}
                </>
            )}
        </article>
    )
}