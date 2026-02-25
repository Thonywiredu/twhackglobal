import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Page() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionTitle title="Services" lead="Government-ready cybersecurity services delivered under written authorization and defined scope agreements." />
        <div className="mt-10 space-y-5 text-slate-200">
<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Penetration Testing</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li><span className="font-semibold text-white">External Network Penetration Testing</span> — assessment of internet-facing assets, exposed services, and perimeter security within an agreed scope.</li>
    <li><span className="font-semibold text-white">Internal Network Penetration Testing</span> — simulation of internal threat scenarios, privilege escalation paths, and lateral movement opportunities.</li>
    <li><span className="font-semibold text-white">Web Application Security Testing</span> — OWASP-aligned testing including authentication, authorization, input validation, and configuration weaknesses.</li>
    <li><span className="font-semibold text-white">Wireless Security Assessment</span> — review of Wi‑Fi security controls, segmentation, and access policies.</li>
  </ul>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Vulnerability Assessment</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Comprehensive assessment and risk classification (severity-based prioritization).</li>
    <li>Executive summary for leadership and technical findings for engineers.</li>
    <li>Practical remediation guidance and retest recommendations.</li>
  </ul>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Defense & Hardening Support</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Security configuration hardening recommendations (servers, endpoints, and network devices).</li>
    <li>Logging and monitoring recommendations aligned to incident detection needs.</li>
    <li>Retesting and validation to confirm remediation effectiveness.</li>
  </ul>
</section>

<div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
  <div className="font-semibold text-white">Engagement Requirements</div>
  <p className="mt-2 text-sm">
    TWHack Cyber Defense provides services strictly under written authorization and defined scope agreements.
    Requests involving unauthorized system access are not accepted.
  </p>
  <p className="mt-4 text-sm">
    For procurement or formal engagement, download our <Link className="text-sky-300 hover:text-sky-200 font-semibold" href="/capability">Capability Statement</Link>.
  </p>
</div>
        </div>
      </Container>
    </main>
  );
}
