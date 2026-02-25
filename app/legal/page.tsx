import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Page() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionTitle title="Legal" lead="Clear engagement boundaries aligned to professional and lawful cybersecurity practice." />
        <div className="mt-10 space-y-5 text-slate-200">
<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Authorization-First Policy</h2>
  <p>
    TWHack Cyber Defense conducts security testing strictly under written authorization and defined scope agreements.
    We do not engage in unauthorized system access or unlawful activity under any circumstances.
  </p>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Confidentiality</h2>
  <p>
    All engagement communications and findings are treated as confidential. Consultant identities are disclosed only
    to verified organizations during formal onboarding.
  </p>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Responsible Disclosure</h2>
  <p>
    If security issues are identified during authorized work, they are shared only with the verified client contact
    and handled through controlled disclosure and remediation support.
  </p>
</section>
        </div>
      </Container>
    </main>
  );
}
