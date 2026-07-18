export type RaftId = "A1" | "A2" | "A3" | "A4";

export interface Raft {
  readonly id: RaftId;
  readonly minimumGuests: number;
  readonly maximumGuests: number;
  readonly approximateExtraGuests: {
    readonly minimum: number;
    readonly maximum: number;
  };
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly airConditioned: true;
  readonly towOut: true;
  readonly privateRaft: true;
  readonly startingPriceThbPerPerson: 1290;
}

export const rafts = [
  {
    id: "A3",
    minimumGuests: 8,
    maximumGuests: 14,
    approximateExtraGuests: { minimum: 1, maximum: 2 },
    bedrooms: 2,
    bathrooms: 1,
    airConditioned: true,
    towOut: true,
    privateRaft: true,
    startingPriceThbPerPerson: 1290,
  },
  {
    id: "A4",
    minimumGuests: 16,
    maximumGuests: 25,
    approximateExtraGuests: { minimum: 3, maximum: 5 },
    bedrooms: 4,
    bathrooms: 2,
    airConditioned: true,
    towOut: true,
    privateRaft: true,
    startingPriceThbPerPerson: 1290,
  },
  {
    id: "A2",
    minimumGuests: 32,
    maximumGuests: 45,
    approximateExtraGuests: { minimum: 3, maximum: 4 },
    bedrooms: 7,
    bathrooms: 4,
    airConditioned: true,
    towOut: true,
    privateRaft: true,
    startingPriceThbPerPerson: 1290,
  },
  {
    id: "A1",
    minimumGuests: 40,
    maximumGuests: 60,
    approximateExtraGuests: { minimum: 3, maximum: 4 },
    bedrooms: 8,
    bathrooms: 13,
    airConditioned: true,
    towOut: true,
    privateRaft: true,
    startingPriceThbPerPerson: 1290,
  },
] as const satisfies readonly Raft[];

export const raftSelectionFallback = "กรุณาสอบถามทีมงาน";

export interface RaftRecommendation {
  readonly rafts: readonly Raft[];
  readonly exactMatch: boolean;
  readonly message: string;
}

export function recommendRafts(guestCount: number): RaftRecommendation {
  const exactMatches = rafts.filter(
    (raft) =>
      guestCount >= raft.minimumGuests && guestCount <= raft.maximumGuests,
  );

  if (exactMatches.length > 0) {
    return {
      rafts: exactMatches,
      exactMatch: true,
      message:
        exactMatches.length > 1
          ? "มีแพใกล้เคียงมากกว่า 1 หลัง กรุณาสอบถามทีมงานก่อนจอง"
          : `แนะนำแพ ${exactMatches[0].id}`,
    };
  }

  const nearby = [...rafts]
    .sort((a, b) => {
      const distance = (raft: Raft) =>
        Math.min(
          Math.abs(guestCount - raft.minimumGuests),
          Math.abs(guestCount - raft.maximumGuests),
        );
      return distance(a) - distance(b);
    })
    .slice(0, 2);

  return {
    rafts: nearby,
    exactMatch: false,
    message:
      "จำนวนคนไม่ตรงช่วงรองรับ กรุณาสอบถามทีมงานเพื่อเลือกแพที่เหมาะสม",
  };
}
