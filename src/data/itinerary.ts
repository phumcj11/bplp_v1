export type TripDay = 1 | 2;

export interface ItineraryPeriod {
  readonly id: string;
  readonly day: TripDay;
  readonly dayLabel: string;
  readonly time: string;
  readonly items: readonly string[];
}

export const itinerary = [
  {
    id: "day-1-arrival",
    day: 1,
    dayLabel: "วันแรก",
    time: "13:00–14:30",
    items: [
      "รวมตัวที่จุดจอดรถ",
      "เตรียมตัวเข้าที่พัก",
      "เตรียมลากแพออกไปที่เกาะ",
      "เปลี่ยนชุดสำหรับไป Water Park @ Ananta Resort",
    ],
  },
  {
    id: "day-1-water-park",
    day: 1,
    dayLabel: "วันแรก",
    time: "14:30–17:30",
    items: [
      "ขึ้นเรือเดินทางไป Water Park @ Ananta Resort",
      "ชมวิวเขื่อนศรีนครินทร์",
      "เล่นสวนน้ำ",
      "เล่นเครื่องเล่นและบ้านลม",
      "เล่นแพเปียกตามรอบกิจกรรม",
    ],
  },
  {
    id: "day-1-evening",
    day: 1,
    dayLabel: "วันแรก",
    time: "17:30–24:00",
    items: [
      "เดินทางกลับแพพักส่วนตัว",
      "รับประทานอาหารเย็น",
      "คาราโอเกะและสังสรรค์",
      "ลูกค้าสามารถเตรียมอาหารมาเพิ่มได้",
    ],
  },
  {
    id: "day-2-morning",
    day: 2,
    dayLabel: "วันที่สอง",
    time: "08:00–11:00",
    items: [
      "รับประทานอาหารเช้า",
      "กาแฟและโอวัลติน",
      "พักผ่อนตามอัธยาศัย",
      "เดินทางกลับถึงฝั่งประมาณ 11:00 น.",
    ],
  },
] as const satisfies readonly ItineraryPeriod[];
