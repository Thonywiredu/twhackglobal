import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Page() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionTitle title="Capability" lead="A procurement-friendly overview for formal engagement and contracting." />
        <div className="mt-10 space-y-5 text-slate-200">
<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
  <div className="text-white font-bold text-lg">Capability Statement</div>
  <p className="mt-2 text-sm text-slate-200">
    Government-ready summary of our core competencies, differentiators, and engagement standards.
  </p>
  <div className="mt-4 flex flex-wrap gap-3">
    <a
      className="rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold hover:bg-slate-100"
      href="/capability-statement.pdf"
      target="_blank"
      rel="noreferrer"
    >
      Download PDF
    </a>
    <a
      className="rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
      href="/contact"
    >
      Request Assessment
    </a>
  </div>
</div>

<section className="space-y-3 mt-10">
  <h2 className="text-xl font-bold text-white">Snapshot</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li><span className="font-semibold text-white">Name:</span> TWHack Cyber Defense</li>
    <li><span className="font-semibold text-white">Type:</span> Independent Cyber Defense Consultancy</li>
    <li><span className="font-semibold text-white">Location:</span> Accra, Ghana</li>
    <li><span className="font-semibold text-white">Tagline:</span> Cyber Defense, Proven by Penetration.</li>
  </ul>
</section>
        </div>
      </Container>
    </main>
  );
}
