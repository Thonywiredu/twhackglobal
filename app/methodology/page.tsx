import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Page() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionTitle title="Methodology" lead="A disciplined, evidence-based approach designed for public and private sector environments." />
        <div className="mt-10 space-y-5 text-slate-200">
<div className="rounded-2xl bg-sky-500/10 ring-1 ring-sky-400/20 p-6">
  <div className="text-white font-bold text-lg">Engagement Workflow</div>
  <ol className="mt-4 list-decimal pl-6 space-y-2">
    <li><span className="font-semibold text-white">Scope & Authorization</span> — rules of engagement, written approval, and boundaries.</li>
    <li><span className="font-semibold text-white">Controlled Testing</span> — structured techniques aligned to the engagement objectives.</li>
    <li><span className="font-semibold text-white">Evidence Collection</span> — findings supported with reproducible proof and context.</li>
    <li><span className="font-semibold text-white">Reporting & Prioritization</span> — clear risk ranking and remediation roadmap.</li>
    <li><span className="font-semibold text-white">Remediation Support</span> — practical guidance and validation retesting.</li>
  </ol>
</div>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Reporting Format</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Executive summary for leadership and decision-makers.</li>
    <li>Technical findings with severity, impact, and remediation actions.</li>
    <li>Optional retest report to confirm fixes.</li>
  </ul>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Confidentiality</h2>
  <p>
    All engagement communications and findings are treated as confidential.
    Consultant identities are disclosed only to verified organizations during formal onboarding.
  </p>
</section>
        </div>
      </Container>
    </main>
  );
}
