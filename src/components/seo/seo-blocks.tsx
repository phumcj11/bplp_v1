import type { BreadcrumbItem } from "@/lib/seo/structured-data";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-charcoal/65">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-charcoal">
                  {item.name}
                </span>
              ) : (
                <a href={item.path} className="hover:text-orange">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function AeoAnswer({
  question,
  answer,
  details,
}: {
  question: string;
  answer: string;
  details?: string;
}) {
  return (
    <section className="rounded-2xl border border-charcoal/10 bg-white p-6">
      <h2 className="text-2xl font-black">{question}</h2>
      <p className="mt-3 text-lg font-semibold text-charcoal">{answer}</p>
      {details ? <p className="mt-3 text-charcoal/75">{details}</p> : null}
    </section>
  );
}

export function SourceNote() {
  return (
    <p className="rounded-xl border border-charcoal/10 bg-off-white px-4 py-3 text-sm text-charcoal/70">
      ข้อมูลราคาและรายการในแพ็กเกจอ้างอิงจากบ้านพักล่องแพ อัปเดตล่าสุด{" "}
      <time dateTime="2026-07-19">19 กรกฎาคม 2569</time>
    </p>
  );
}

export function InternalLinks({
  links,
}: {
  links: ReadonlyArray<{ href: string; label: string; description: string }>;
}) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-2xl border-2 border-charcoal bg-white p-5 shadow-[4px_4px_0_#151515] transition hover:-translate-y-0.5"
        >
          <h3 className="text-xl font-black text-orange">{link.label}</h3>
          <p className="mt-2 text-charcoal/75">{link.description}</p>
        </a>
      ))}
    </section>
  );
}
