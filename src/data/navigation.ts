export const primaryNav = [
  { label: "หน้าแรก", href: "/" },
  { label: "แพ็กเกจ", href: "/packages" },
  { label: "เลือกแพ", href: "/rafts" },
  { label: "กิจกรรม", href: "/activities" },
  { label: "โปรแกรม", href: "/itinerary" },
  { label: "FAQ", href: "/faq" },
  { label: "ติดต่อ", href: "/contact" },
] as const;

export const guideNav = [
  {
    label: "คู่มือเที่ยวล่องแพกาญจนบุรี",
    href: "/guides/kanchanaburi-raft-trip",
  },
  {
    label: "เตรียมตัวก่อนไปพักแพ",
    href: "/guides/prepare-for-raft-trip",
  },
] as const;
