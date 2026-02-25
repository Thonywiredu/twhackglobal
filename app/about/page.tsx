import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Page() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <div className="mb-8 rounded-xl bg-yellow-500/10 ring-1 ring-yellow-400/30 p-4 text-center">
  <p className="text-sm font-semibold text-yellow-300">
    🚧 Coming Soon — TWHack Cyber Defense is currently under development and not yet operational.
    We are building a powerful cybersecurity platform. Stay tuned.
  </p>
</div>
        <SectionTitle title="About" lead="Independent cyber defense consultancy based in Accra, Ghana." />
        <div className="mt-10 space-y-5 text-slate-200">
<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">About TWHack Cyber Defense</h2>
  <p>
    TWHack Cyber Defense is an independent cybersecurity consultancy based in Accra, Ghana, providing authorized
    penetration testing, vulnerability assessment, and defensive security support.
  </p>
  <p>
    We help organizations identify weaknesses before attackers do — then strengthen systems with practical,
    prioritized defense actions.
  </p>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Confidential Engagement Model</h2>
  <p>
    For operational security and client confidentiality, consultant identities are disclosed only during verified
    engagement processes. Formal identity verification and documentation are provided to legitimate organizations
    during onboarding.
  </p>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Built in Africa. Operating Globally.</h2>
  <p>
    We believe Africa does not only consume technology — we secure it. Our work is aligned to global best practices
    and delivered with professional discipline.
  </p>
</section>
        </div>
      </Container>
    </main>
  );
}
