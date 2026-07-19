export interface Faq {
  readonly question: string;
  readonly answer: string;
  readonly verified: boolean;
}

const askTheTeam = "กรุณาสอบถามทีมงาน";

export const faqs = [
  {
    question: "ราคาเริ่มต้น 1,290 บาทต่อคนรวมอะไรบ้าง?",
    answer:
      "แพพักส่วนตัว ห้องพักปรับอากาศ คาราโอเกะและแสงสี ล่องเรือชมวิวเขื่อนศรีนครินทร์ Water Park @ Ananta Resort สวนน้ำเด็ก สวนน้ำผู้ใหญ่ สระน้ำแทรมโพลีน แพเปียก เรือคายัค อาหารเย็น อาหารเช้า น้ำดื่ม และน้ำแข็ง",
    verified: true,
  },
  {
    question: "ต้องมาอย่างน้อยกี่คน?",
    answer: "รองรับกลุ่มตั้งแต่ 8 คน",
    verified: true,
  },
  {
    question: "กลุ่มของเราควรเลือกแพหลังไหน?",
    answer:
      "8–14 คนเหมาะกับแพ A3, 16–25 คนเหมาะกับแพ A4, 32–45 คนเหมาะกับแพ A2 และ 40–60 คนเหมาะกับแพ A1 หากจำนวนคนอยู่ระหว่างช่วง กรุณาสอบถามทีมงาน",
    verified: true,
  },
  {
    question: "เด็กคิดราคาอย่างไร?",
    answer: askTheTeam,
    verified: false,
  },
  {
    question: "สามารถนำอาหารมาเพิ่มได้หรือไม่?",
    answer: "ลูกค้าสามารถเตรียมอาหารมาเพิ่มได้",
    verified: true,
  },
  {
    question: "มีห้องน้ำในแพหรือไม่?",
    answer:
      "มี แพ A3 มี 1 ห้องน้ำ, A4 มี 2 ห้องน้ำ, A2 มี 4 ห้องน้ำ และ A1 มี 13 ห้องน้ำ",
    verified: true,
  },
  {
    question: "แพลากออกกี่โมง?",
    answer: askTheTeam,
    verified: false,
  },
  {
    question: "เดินทางกลับถึงฝั่งประมาณกี่โมง?",
    answer: "เดินทางกลับถึงฝั่งประมาณ 11:00 น. ในวันที่สอง",
    verified: true,
  },
  {
    question: "ต้องเตรียมอะไรมาเล่นน้ำ?",
    answer: askTheTeam,
    verified: false,
  },
  {
    question: "หากฝนตกยังเดินทางได้หรือไม่?",
    answer: askTheTeam,
    verified: false,
  },
  {
    question: "เปลี่ยนวันหรือยกเลิกได้อย่างไร?",
    answer: askTheTeam,
    verified: false,
  },
] as const satisfies readonly Faq[];
