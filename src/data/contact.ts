export interface ContactData {
  readonly phone: {
    readonly display: string;
    readonly href: `tel:${string}`;
  };
  readonly line: {
    readonly id: string;
    readonly href: string;
  };
  readonly facebook: {
    readonly displayName: string;
    readonly href: string;
  };
  readonly website: {
    readonly displayName: string;
  };
  readonly location: string;
}

export const contactData = {
  phone: {
    display: "081-900-7895",
    href: "tel:0819007895",
  },
  line: {
    id: "@baanpaklongpae",
    href: "https://line.me/R/ti/p/@baanpaklongpae",
  },
  facebook: {
    displayName: "บ้านพักล่องแพ ล่องแพกาญจนบุรี แพเขื่อนศรีนครินทร์",
    href: "https://www.facebook.com/baanpaklongpae",
  },
  website: {
    displayName: "www.baanpaklongpae.com",
  },
  location: "เขื่อนศรีนครินทร์ จังหวัดกาญจนบุรี",
} as const satisfies ContactData;
