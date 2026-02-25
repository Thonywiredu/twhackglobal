import Link from "next/link";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/methodology", label: "Methodology" },
  { href: "/vision-values", label: "Vision & Values" },
  { href: "/capability", label: "Capability" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function TopNav() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-sky-500/15 ring-1 ring-sky-400/25 grid place-items-center">
            <span className="font-black text-sky-300">TW</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">TWHack Cyber Defense</div>
            <div className="text-xs text-slate-300">Independent Cyber Defense Consultancy</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-200">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400"
        >
          Request Assessment
        </Link>
      </div>
    </header>
  );
}
