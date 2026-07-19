import Link from "next/link";
import { guideNav, primaryNav } from "@/data/navigation";
import { contactData } from "@/data/contact";
import { siteData } from "@/data/site";

export function MarketingLayout({
  children,
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: string;
}) {
  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <header className="border-b border-charcoal/10 bg-charcoal text-white">
        <div className="shell flex min-h-18 flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="leading-none">
            <strong className="block text-lg">{siteData.name.th}</strong>
            <span className="font-display text-[0.65rem] tracking-[0.16em] text-orange">
              {siteData.name.en}
            </span>
          </Link>
          <nav aria-label="เมนูหลัก" className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={item.href === currentPath ? "text-orange" : "hover:text-orange"}
                aria-current={item.href === currentPath ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="shell py-10 md:py-14">{children}</main>

      <footer className="border-t border-charcoal/10 bg-charcoal py-10 text-white">
        <div className="shell grid gap-8 md:grid-cols-3">
          <div>
            <strong className="text-xl">{siteData.name.th}</strong>
            <p className="mt-3 text-white/70">{siteData.location.displayName}</p>
            <p className="mt-2 text-sm text-white/55">แพพักเหมาส่วนตัว โปรแกรม 2 วัน 1 คืน</p>
          </div>
          <div>
            <h2 className="font-bold text-orange">ติดต่อ</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>
                <a href={contactData.phone.href} className="hover:text-orange">
                  โทร {contactData.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={contactData.line.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange"
                >
                  LINE {contactData.line.id}
                </a>
              </li>
              <li>
                <a
                  href={contactData.facebook.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-orange">คู่มือและข้อมูล</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              {guideNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-orange">
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
