import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-300 flex flex-col md:flex-row gap-4 justify-between">
        <div>© {new Date().getFullYear()} TWHack Cyber Defense. All rights reserved.</div>
        <div className="flex gap-4">
          <Link className="hover:text-white" href="/legal">Legal</Link>
          <Link className="hover:text-white" href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
