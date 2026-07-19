import {
  Check,
  Clock3,
  HeartHandshake,
  IceCreamBowl,
  MapPin,
  MessageCircle,
  Phone,
  ShipWheel,
  Sparkles,
  Users,
} from "lucide-react";
import { contactData } from "@/data/contact";
import {
  experienceMediaIds,
  packageValueMediaIds,
  getMediaById,
  getSocialProofMedia,
} from "@/data/images";
import { itinerary } from "@/data/itinerary";
import { siteData } from "@/data/site";
import { mediaCopy } from "@/data/copy";
import { HeroImage } from "./hero-image";
import { ImagePlaceholder, MediaImage } from "./image-placeholder";
import { PriceBadge } from "./interactive-sections";

export function Hero() {
  return (
    <section
      id="home"
      className="paper-edge relative flex min-h-[760px] items-end overflow-hidden bg-charcoal pb-18 pt-28 text-white md:min-h-[820px] md:items-center"
    >
      <div className="hero-visual absolute inset-0 min-h-full bg-charcoal">
        <HeroImage />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/20 md:bg-gradient-to-r md:from-charcoal md:via-charcoal/70 md:to-transparent" />
      </div>
      <div className="pointer-events-none absolute -right-16 top-32 size-56 rounded-full border-[28px] border-orange/70 md:right-[8%]" aria-hidden="true" />
      <div className="shell relative z-10">
        <div className="max-w-3xl">
          <p className="hero-stagger mb-4 inline-flex rounded-full border border-white/40 bg-charcoal/55 px-4 py-2 font-bold backdrop-blur">
            บ้านพักล่องแพ • เขื่อนศรีนครินทร์
          </p>
          <div className="hero-stagger mb-4 inline-block rotate-2 bg-white px-4 py-2 font-black text-charcoal shadow-brutal md:ml-3">
            2 วัน 1 คืน
          </div>
          <h1 className="hero-stagger max-w-[11ch] text-[clamp(3.4rem,11vw,7.8rem)] font-black leading-[0.88] tracking-[-0.055em] [font-synthesis:weight]">
            ทริปล่องแพ 2 วัน 1 คืน
          </h1>
          <p className="hero-stagger mt-5 max-w-xl text-xl font-semibold md:text-2xl">
            {siteData.tagline}
          </p>
          <div className="mt-7"><PriceBadge /></div>
          <ul className="hero-stagger mt-6 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 font-semibold">
            {["แพพักส่วนตัว", "Water Park", "อาหาร 2 มื้อ", "รองรับกลุ่ม 8–60 คน"].map((point) => (
              <li key={point} className="flex items-center gap-1.5"><Check className="text-orange" size={20} />{point}</li>
            ))}
          </ul>
          <div className="hero-stagger mt-7 flex flex-wrap gap-3">
            <a href={contactData.line.href} target="_blank" rel="noreferrer" className="button button--primary cta-pulse">
              <MessageCircle aria-hidden="true" /> ทักเช็กวันว่าง
            </a>
            <a href="#rafts" className="button button--light">ดูแพทั้งหมด</a>
          </div>
          <p className="hero-stagger mt-4 text-sm text-white/75">แจ้งวันที่และจำนวนคน ทีมงานช่วยเลือกแพให้ฟรี</p>
        </div>
      </div>
    </section>
  );
}

export function QuickSocialProof() {
  const images = getSocialProofMedia().slice(0, 4);
  return (
    <section className="section !py-16 bg-off-white">
      <div className="shell">
        <h2 className="reveal max-w-3xl text-3xl font-black md:text-5xl">
          ทริปจริง บรรยากาศจริง จากลูกค้าที่มาเที่ยวกับเรา
        </h2>
        <div className="snap-row mt-7 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="reveal bg-white p-2 pb-8 shadow-lg"
              style={{ transform: `rotate(${index % 2 ? 1 : -1}deg)` }}
            >
              <MediaImage
                media={image}
                className="min-h-[16rem]"
                sizes="(max-width: 768px) 83vw, 25vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const packageHighlights = [
  "แพพักส่วนตัว",
  "ห้องพักปรับอากาศ",
  "Water Park",
  "แพเปียก",
  "เรือคายัค",
  "ล่องเรือชมวิว",
  "คาราโอเกะและแสงสี",
  "อาหาร 2 มื้อ",
  "น้ำดื่มและน้ำแข็ง",
];

export function PackageValue() {
  const supportImages = packageValueMediaIds
    .map((id) => getMediaById(id))
    .filter(Boolean);

  return (
    <section className="section bg-orange text-charcoal">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="reveal lg:sticky lg:top-28">
          <p className="font-display tracking-widest text-white">PACKAGE VALUE</p>
          <h2 className="section-title mt-2">1,290 บาท ได้อะไรบ้าง?</h2>
          <div className="mt-6 inline-block rotate-[-2deg] border-2 border-charcoal bg-off-white px-5 py-4 shadow-brutal">
            <span className="block font-bold">เริ่มต้นเพียง</span>
            <strong className="font-display text-6xl leading-none">1,290.-</strong>
            <span className="font-bold"> / ท่าน</span>
          </div>
          <div className="mt-6 hidden gap-3 md:grid md:grid-cols-2">
            {supportImages.slice(0, 4).map((image, index) => (
              <MediaImage
                key={image!.id}
                media={image!}
                className={`reveal min-h-32 rounded-2xl border-2 border-charcoal ${index === 0 ? "md:col-span-2 md:min-h-40" : ""}`}
                sizes="(max-width: 768px) 45vw, 20vw"
              />
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {packageHighlights.map((item, index) => (
            <div key={item} className="reveal flex min-h-20 items-center gap-3 rounded-2xl border-2 border-charcoal bg-off-white p-4 shadow-[4px_4px_0_#151515]" style={{ transitionDelay: `${(index % 4) * 70}ms` }}>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-charcoal text-orange"><Check aria-hidden="true" /></span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences = [
  ["ขึ้นแพ", "เริ่มทริปพร้อมกลุ่มของคุณ"],
  ["ชมวิว", "ล่องเรือชมเขื่อนศรีนครินทร์"],
  ["เล่นสวนน้ำ", "Water Park @ Ananta Resort"],
  ["เล่นแพเปียก", "สนุกตามรอบกิจกรรม"],
  ["รับประทานอาหาร", "อิ่มพร้อมหน้ากันบนแพ"],
  ["ร้องคาราโอเกะ", "แสงสีและช่วงเวลาสังสรรค์"],
  ["ตื่นมารับวิวเขื่อน", "เช้าวันใหม่บนผืนน้ำ"],
] as const;

export function TripExperience() {
  return (
    <section className="section bg-off-white">
      <div className="shell">
        <p className="eyebrow">ONE TRIP, ALL THE MOMENTS</p>
        <h2 className="section-title">จากขึ้นแพ ถึงเช้าวิวเขื่อน</h2>
        <div className="mt-10 grid gap-10">
          {experiences.map(([title, copy], index) => (
            <article key={title} className="reveal grid items-center gap-6 md:grid-cols-2">
              <div className={index % 2 ? "md:order-2" : ""} data-parallax>
                {experienceMediaIds[index] ? (
                  <MediaImage
                    media={getMediaById(experienceMediaIds[index]!)!}
                    className="min-h-[18rem] rounded-[2rem] border-2 border-charcoal md:min-h-[26rem]"
                  />
                ) : (
                  <ImagePlaceholder
                    label={mediaCopy.genericTripMoment}
                    className="rounded-[2rem]"
                  />
                )}
              </div>
              <div className={`relative ${index % 2 ? "md:text-right" : ""}`}>
                <span className="font-display text-6xl text-orange/30">0{index + 1}</span>
                <h3 className="text-4xl font-black md:text-6xl">{title}</h3>
                <p className="mt-3 text-lg text-charcoal/65">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ItineraryTimeline() {
  return (
    <section id="itinerary" className="section bg-forest text-white">
      <div className="shell">
        <p className="eyebrow !text-warm-orange">2 DAYS 1 NIGHT</p>
        <h2 className="section-title">โปรแกรมทริป 2 วัน 1 คืน</h2>
        <div className="relative mt-12 grid gap-7 before:absolute before:bottom-8 before:left-[1.15rem] before:top-8 before:w-1 before:bg-white/20 md:before:left-1/2">
          {itinerary.map((period, index) => (
            <article key={period.id} data-timeline-card className={`reveal relative pl-14 md:w-[calc(50%-2rem)] md:pl-0 ${index % 2 ? "md:ml-auto" : "md:mr-auto"}`}>
              <span className={`absolute left-2 top-7 z-10 size-6 rounded-full border-4 border-forest bg-orange transition-shadow md:left-auto ${index % 2 ? "md:-left-[2.78rem]" : "md:-right-[2.78rem]"}`} aria-hidden="true" />
              <div className="rounded-3xl border border-white/30 bg-white/10 p-5 backdrop-blur-sm md:p-7">
                <span className="paint-note">{period.dayLabel}</span>
                <h3 className="mt-5 flex items-center gap-2 text-2xl font-black"><Clock3 className="text-orange" />{period.time}</h3>
                <ul className="mt-4 grid gap-2 text-white/80">
                  {period.items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-1 shrink-0 text-orange" size={17} />{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  ["เหมาะสำหรับทริปกลุ่ม", Users],
  ["เหมาพื้นที่ส่วนตัว", HeartHandshake],
  ["โปรแกรมพร้อม ไม่ต้องวางแผนเอง", Clock3],
  ["มีกิจกรรมครบทั้งทริป", Sparkles],
  ["มีแพหลายขนาด", ShipWheel],
  ["รองรับตั้งแต่ 8–60 คน", Users],
  ["ทีมงานดูแลตลอดทริป", HeartHandshake],
  ["ที่พัก กิจกรรม และอาหารครบ", IceCreamBowl],
] as const;

export function WhyChooseUs() {
  return (
    <section className="section bg-charcoal text-white">
      <div className="shell">
        <p className="eyebrow">WHY US</p>
        <h2 className="section-title">ทำไมต้องบ้านพักล่องแพ?</h2>
        <div className="mt-9 grid gap-px overflow-hidden rounded-3xl border border-white/20 bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([reason, Icon]) => (
            <div key={reason} className="reveal bg-charcoal p-6">
              <Icon className="mb-5 text-orange" size={34} aria-hidden="true" />
              <h3 className="text-xl font-bold">{reason}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-white md:py-36">
      <div className="absolute inset-0 opacity-55">
        <MediaImage
          media={getMediaById("ananta-lake-view")!}
          sizes="100vw"
          className="h-full"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal/65" />
      <div className="shell relative z-10 text-center">
        <p className="eyebrow">LET&apos;S GO TOGETHER</p>
        <h2 className="mx-auto max-w-4xl text-[clamp(3rem,9vw,7rem)] font-black leading-[0.9] tracking-[-0.05em]">พร้อมยกแก๊งมาเที่ยวหรือยัง?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl">แจ้งวันเดินทางและจำนวนสมาชิก ทีมงานช่วยเลือกแพให้ได้เลย</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={contactData.line.href} target="_blank" rel="noreferrer" className="button button--primary"><MessageCircle />ทัก LINE เช็กวันว่าง</a>
          <a href={contactData.phone.href} className="button button--light"><Phone />โทร {contactData.phone.display}</a>
        </div>
        <p className="mt-5 font-bold text-orange">รองรับกลุ่ม 8–60 คน</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal pb-28 pt-16 text-white md:pb-8">
      <div className="shell grid gap-10 border-b border-white/15 pb-12 md:grid-cols-3">
        <div>
          <strong className="text-2xl">บ้านพักล่องแพ</strong>
          <span className="mt-1 block font-display tracking-widest text-orange">BAAN PAK LONG PAE</span>
          <p className="mt-4 text-white/65">{siteData.location.displayName}</p>
        </div>
        <div>
          <h2 className="font-bold text-orange">ติดต่อ</h2>
          <ul className="mt-4 grid gap-3">
            <li><a className="inline-flex items-center gap-2 hover:text-orange" href={contactData.phone.href}><Phone size={18} />{contactData.phone.display}</a></li>
            <li><a className="inline-flex items-center gap-2 hover:text-orange" href={contactData.line.href} target="_blank" rel="noreferrer"><MessageCircle size={18} />LINE {contactData.line.id}</a></li>
            <li className="flex gap-2 text-white/75"><MapPin className="mt-1 shrink-0" size={18} />{contactData.location}</li>
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-orange"
                href={contactData.facebook.href}
                target="_blank"
                rel="noreferrer"
              >
                Facebook: {contactData.facebook.displayName}
              </a>
            </li>
            <li className="text-white/75">{contactData.website.displayName}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-orange">เมนูเว็บไซต์</h2>
          <nav className="mt-4 grid grid-cols-2 gap-3" aria-label="เมนูท้ายเว็บไซต์">
            <a href="#rafts">แพของเรา</a><a href="#activities">กิจกรรม</a>
            <a href="#itinerary">โปรแกรมทัวร์</a><a href="#gallery">แกลเลอรี</a>
            <a href="#faq">FAQ</a><a href="#availability">เช็กวันว่าง</a>
          </nav>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms and Booking Conditions</a>
          </div>
        </div>
      </div>
      <div className="shell pt-7 text-sm text-white/50">© {new Date().getFullYear()} บ้านพักล่องแพ สงวนลิขสิทธิ์</div>
    </footer>
  );
}
