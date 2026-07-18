export type ActivityId =
  | "water-park-ananta"
  | "kids-water-park"
  | "adult-water-park"
  | "wet-raft"
  | "kayak"
  | "sightseeing"
  | "karaoke"
  | "group-dining";

export interface Activity {
  readonly id: ActivityId;
  readonly name: string;
  readonly imageDirectory:
    | "water-park"
    | "wet-raft"
    | "kayak"
    | "sightseeing"
    | "karaoke"
    | "dining";
}

export const activities = [
  {
    id: "water-park-ananta",
    name: "Water Park @ Ananta Resort",
    imageDirectory: "water-park",
  },
  {
    id: "kids-water-park",
    name: "สวนน้ำเด็ก",
    imageDirectory: "water-park",
  },
  {
    id: "adult-water-park",
    name: "สวนน้ำผู้ใหญ่",
    imageDirectory: "water-park",
  },
  {
    id: "wet-raft",
    name: "แพเปียก",
    imageDirectory: "wet-raft",
  },
  {
    id: "kayak",
    name: "เรือคายัค",
    imageDirectory: "kayak",
  },
  {
    id: "sightseeing",
    name: "ล่องเรือชมวิว",
    imageDirectory: "sightseeing",
  },
  {
    id: "karaoke",
    name: "คาราโอเกะและแสงสี",
    imageDirectory: "karaoke",
  },
  {
    id: "group-dining",
    name: "อาหารและบรรยากาศกลุ่ม",
    imageDirectory: "dining",
  },
] as const satisfies readonly Activity[];
