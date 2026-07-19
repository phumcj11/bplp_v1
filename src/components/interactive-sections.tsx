"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BedDouble,
  ChevronDown,
  ExternalLink,
  Menu,
  MessageCircle,
  Phone,
  ShowerHead,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { activities, type Activity } from "@/data/activities";
import { contactData } from "@/data/contact";
import { faqs } from "@/data/faqs";
import {
  filterGalleryMedia,
  galleryFilters,
  getActivityMedia,
  getRaftMedia,
} from "@/data/images";
import type { GalleryFilterId, MediaItem } from "@/data/media";
import { rafts, type Raft } from "@/data/rafts";
import { mediaCopy } from "@/data/copy";
import { ImagePlaceholder, MediaImage } from "./image-placeholder";

const nav = [
  ["หน้าแรก", "#home"],
  ["แพของเรา", "#rafts"],
  ["กิจกรรม", "#activities"],
  ["โปรแกรมทัวร์", "#itinerary"],
  ["แกลเลอรี", "#gallery"],
  ["FAQ", "#faq"],
  ["ติดต่อ", "#contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const first = panelRef.current?.querySelector<HTMLElement>("a");
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors ${
          scrolled || open ? "bg-charcoal/95 shadow-lg backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="shell flex min-h-18 items-center justify-between gap-4">
          <a href="#home" className="leading-none text-white" aria-label="หน้าแรก บ้านพักล่องแพ">
            <strong className="block text-lg">บ้านพักล่องแพ</strong>
            <span className="font-display text-[0.65rem] tracking-[0.16em] text-orange">
              BAAN PAK LONG PAE
            </span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="เมนูหลัก">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-white hover:text-orange">
                {label}
              </a>
            ))}
            <a href="#availability" className="button button--primary !min-h-11">
              เช็กวันว่าง
            </a>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={contactData.line.href}
              className="button !min-h-11 !border-white !bg-white !px-3 !text-charcoal"
              target="_blank"
              rel="noreferrer"
            >
              LINE
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border-2 border-white text-white"
              aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="fixed inset-0 z-40 bg-charcoal/65 lg:hidden"
              aria-label="ปิดเมนู"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              ref={panelRef}
              className="fixed inset-x-4 top-22 z-50 rounded-3xl border-2 border-charcoal bg-off-white p-4 shadow-brutal lg:hidden"
              role="dialog"
              aria-label="เมนูเว็บไซต์"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
            >
              {nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block min-h-12 rounded-xl px-4 py-3 text-lg font-bold hover:bg-orange/10"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function PriceBadge() {
  return (
    <div className="price-impact hero-stagger inline-flex rotate-[-2deg] items-baseline gap-2 border-2 border-charcoal bg-orange px-5 py-3 text-white shadow-brutal">
      <span className="text-sm font-bold">เริ่มต้น</span>
      <strong className="font-display text-5xl leading-none md:text-6xl">1,290.-</strong>
      <span className="font-bold">/ท่าน</span>
    </div>
  );
}

const rangeLabels = ["8–14 คน", "16–25 คน", "32–45 คน", "40–60 คน"];

export function RaftCard({ raft }: { raft: Raft }) {
  const raftMedia = getRaftMedia(raft.id);

  return (
    <motion.article
      key={raft.id}
      className="grid overflow-hidden rounded-[1.75rem] border-2 border-charcoal bg-white shadow-brutal md:grid-cols-2"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative min-h-[19rem] md:min-h-[25rem]">
        <MediaImage
          media={raftMedia}
          className="absolute inset-0 h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4 text-white">
          <p className="text-sm font-bold text-orange">{mediaCopy.genericRaft}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 md:p-9">
        <p className="eyebrow">แพแอร์ลากออก • เหมาทั้งหลัง</p>
        <h3 className="text-5xl font-black">แพ {raft.id}</h3>
        <div className="my-6 grid grid-cols-3 gap-3 text-center">
          <span className="rounded-xl bg-off-white p-3">
            <Users className="mx-auto mb-1" aria-hidden="true" />
            <b>{raft.minimumGuests}–{raft.maximumGuests}</b>
            <small className="block">คน</small>
          </span>
          <span className="rounded-xl bg-off-white p-3">
            <BedDouble className="mx-auto mb-1" aria-hidden="true" />
            <b>{raft.bedrooms}</b>
            <small className="block">ห้องนอน</small>
          </span>
          <span className="rounded-xl bg-off-white p-3">
            <ShowerHead className="mx-auto mb-1" aria-hidden="true" />
            <b>{raft.bathrooms}</b>
            <small className="block">ห้องน้ำ</small>
          </span>
        </div>
        <p className="text-xl font-black text-orange">เริ่มต้น 1,290 บาท/ท่าน</p>
        <p className="mt-1 text-sm text-charcoal/65">
          เสริมได้ประมาณ {raft.approximateExtraGuests.minimum}–{raft.approximateExtraGuests.maximum} คน
        </p>
        <a href="#availability" className="button button--primary mt-6">เช็กวันว่าง</a>
      </div>
    </motion.article>
  );
}

export function RaftSelector() {
  const [selected, setSelected] = useState(0);
  const raft = rafts[selected];

  return (
    <section id="rafts" className="section bg-lake/10">
      <div className="shell">
        <p className="eyebrow">CHOOSE YOUR RAFT</p>
        <h2 className="section-title">มากี่คน เราก็มีแพให้เหมาทั้งหลัง</h2>
        <fieldset className="my-8">
          <legend className="mb-4 text-xl font-bold">ทริปนี้มากันกี่คน?</legend>
          <div className="flex flex-wrap gap-2">
            {rangeLabels.map((label, index) => (
              <button
                key={label}
                type="button"
                className={`button ${selected === index ? "button--primary" : "bg-white"}`}
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
        <RaftCard raft={raft} />
        <p className="mt-6 rounded-xl border border-charcoal/20 bg-white/60 p-4 text-center">
          จำนวนคนอยู่ระหว่างช่วงหรือไม่แน่ใจ? กรุณาสอบถามทีมงานเพื่อช่วยเทียบตัวเลือกใกล้เคียงก่อนจอง
        </p>
      </div>
    </section>
  );
}

export function ActivityBottomSheet({
  activity,
  onClose,
}: {
  activity: Activity | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!activity) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activity, onClose]);
  const activityImage = activity ? getActivityMedia(activity.id) : undefined;

  return (
    <AnimatePresence>
      {activity && (
        <div className="fixed inset-0 z-[70] grid items-end md:place-items-center" role="dialog" aria-modal="true" aria-labelledby="activity-title">
          <motion.button
            className="absolute inset-0 bg-charcoal/75"
            aria-label="ปิดรายละเอียดกิจกรรม"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative z-10 w-full max-w-xl rounded-t-3xl bg-off-white p-5 md:rounded-3xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
          >
            <button ref={closeRef} type="button" onClick={onClose} className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white" aria-label="ปิด">
              <X aria-hidden="true" />
            </button>
            {activityImage ? (
              <MediaImage
                media={activityImage}
                className="min-h-[18rem] rounded-2xl"
                sizes="(max-width: 768px) 100vw, 36rem"
              />
            ) : (
              <ImagePlaceholder
                label={mediaCopy.genericActivity}
                className="rounded-2xl"
              />
            )}
            <h3 id="activity-title" className="mt-5 text-2xl font-black">{activity.name}</h3>
            <p className="mt-2 text-charcoal/70">กิจกรรมที่รวมอยู่ในแพ็กเกจทริป 2 วัน 1 คืน</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function ActivitySlider() {
  const [selected, setSelected] = useState<Activity | null>(null);
  return (
    <section id="activities" className="section bg-charcoal text-white">
      <div className="shell">
        <p className="eyebrow">ALL THE FUN</p>
        <h2 className="section-title">ครบทุกความสนุกบนเขื่อน</h2>
        <p className="mt-4 text-white/65 md:hidden">ปัดเพื่อดูกิจกรรมเพิ่มเติม</p>
        <div className="snap-row mt-8">
          {activities.map((activity, index) => {
            const activityImage = getActivityMedia(activity.id);
            return (
              <button
                key={activity.id}
                type="button"
                className={`group relative min-h-[23rem] overflow-hidden rounded-3xl text-left ${index % 2 ? "lg:translate-y-6" : ""}`}
                onClick={() => setSelected(activity)}
              >
                {activityImage ? (
                  <MediaImage
                    media={activityImage}
                    className="absolute inset-0 h-full"
                    imageClassName="transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 83vw, 25vw"
                  />
                ) : (
                  <ImagePlaceholder
                    label={mediaCopy.genericActivity}
                    className="absolute inset-0 h-full min-h-0 border-0 transition duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-transparent p-5 pt-20">
                  <strong className="block text-2xl leading-tight">{activity.name}</strong>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-orange">แตะดูรายละเอียด <ExternalLink size={15} /></span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <ActivityBottomSheet activity={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export function Lightbox({
  image,
  onClose,
}: {
  image: MediaItem | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!image) return;
    closeRef.current?.focus();
    const key = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [image, onClose]);
  if (!image) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/95 p-4" role="dialog" aria-modal="true" aria-label={image.alt}>
      <button ref={closeRef} type="button" onClick={onClose} className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-white" aria-label="ปิดภาพ">
        <X aria-hidden="true" />
      </button>
      <MediaImage
        media={image}
        className="h-[70vh] w-full max-w-5xl rounded-2xl"
        sizes="100vw"
      />
    </div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<GalleryFilterId>("all");
  const images = filterGalleryMedia(filter);
  const compactLayout = images.length <= 3;

  return (
    <section id="gallery" className="section bg-off-white">
      <div className="shell">
        <p className="eyebrow">REAL MOMENTS</p>
        <h2 className="section-title">บรรยากาศจริงจากทริปลูกค้า</h2>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="กรองแกลเลอรี">
          {galleryFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`button !min-h-10 !px-4 ${filter === item.id ? "button--primary" : "bg-white"}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div
          className={
            compactLayout
              ? "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              : "snap-row mt-8 lg:grid-cols-3"
          }
        >
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActive(image)}
              className={`overflow-hidden rounded-3xl ${
                !compactLayout && (index === 0 || index === images.length - 1)
                  ? "lg:row-span-2"
                  : compactLayout && index === 0
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
              }`}
              aria-label={`เปิด${image.alt}`}
            >
              <MediaImage
                media={image}
                className={`min-h-[22rem] ${
                  !compactLayout && (index === 0 || index === images.length - 1)
                    ? "lg:min-h-[38rem]"
                    : compactLayout && index === 0
                      ? "min-h-[24rem] sm:min-h-[28rem]"
                      : ""
                }`}
                sizes="(max-width: 768px) 83vw, 33vw"
              />
            </button>
          ))}
        </div>
      </div>
      <Lightbox image={active} onClose={() => setActive(null)} />
    </section>
  );
}

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section bg-off-white">
      <div className="shell grid gap-8 lg:grid-cols-[0.65fr_1fr]">
        <div>
          <p className="eyebrow">GOOD TO KNOW</p>
          <h2 className="section-title">คำถามที่พบบ่อย</h2>
        </div>
        <div className="divide-y-2 divide-charcoal/15 border-y-2 border-charcoal/15">
          {faqs.map((faq, index) => {
            const expanded = open === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-lg font-bold"
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  {faq.question}
                  <ChevronDown className={`shrink-0 transition ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <div id={`faq-panel-${index}`} hidden={!expanded} className="pb-5 pr-10 text-charcoal/70">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("home");
    const footer = document.getElementById("contact");
    if (!hero || !footer) return;
    const heroObserver = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.1 });
    const footerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(false);
    });
    heroObserver.observe(hero);
    footerObserver.observe(footer);
    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] transition-transform md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="mx-auto grid max-w-md grid-cols-3 gap-1 rounded-2xl border-2 border-charcoal bg-off-white p-1.5 shadow-[0_-5px_20px_rgb(0_0_0/.18)]">
        <a href={contactData.phone.href} className="grid min-h-12 place-items-center rounded-xl font-bold"><Phone size={18} />โทรเลย</a>
        <a href={contactData.line.href} target="_blank" rel="noreferrer" className="grid min-h-12 place-items-center rounded-xl bg-forest font-bold text-white"><MessageCircle size={18} />LINE</a>
        <a href="#availability" className="grid min-h-12 place-items-center rounded-xl bg-orange px-1 text-center text-sm font-bold text-white">เช็กวันว่าง</a>
      </div>
    </div>
  );
}
