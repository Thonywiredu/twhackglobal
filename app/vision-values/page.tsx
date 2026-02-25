import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Page() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionTitle title="Vision & Values" lead="Corporate and government-grade principles that guide every engagement." />
        <div className="mt-10 space-y-5 text-slate-200">
<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Vision</h2>
  <p>
    To become a trusted African cybersecurity consultancy delivering structured, authorized, and intelligence-driven
    cyber defense services to public and private sector institutions.
  </p>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Mission</h2>
  <p>
    To strengthen digital infrastructure resilience by applying disciplined penetration testing methodologies
    and evidence-based defensive security practices.
  </p>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Values</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li><span className="font-semibold text-white">Authorization & Legality</span> — all work is conducted under written approval and defined scope agreements.</li>
    <li><span className="font-semibold text-white">Confidentiality</span> — client information and findings are treated with strict confidentiality and controlled disclosure.</li>
    <li><span className="font-semibold text-white">Integrity</span> — evidence-backed reporting without exaggeration or sensationalism.</li>
    <li><span className="font-semibold text-white">Professional Discipline</span> — structured work, clear reporting, and practical remediation guidance.</li>
    <li><span className="font-semibold text-white">African Excellence</span> — delivering globally competitive cybersecurity expertise from Accra, Ghana.</li>
  </ul>
</section>
        </div>
      </Container>
    </main>
  );
}
