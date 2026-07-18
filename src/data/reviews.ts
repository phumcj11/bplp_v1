export interface ReviewsPlaceholder {
  readonly status: "awaiting-verified-reviews";
  readonly message: "รอข้อมูลรีวิวจริง";
}

export const reviewsPlaceholder = {
  status: "awaiting-verified-reviews",
  message: "รอข้อมูลรีวิวจริง",
} as const satisfies ReviewsPlaceholder;
