import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Home() {
  return (
    <main>
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-40"
  >
    <source src="/twhack.image.mp4" type="video/mp4" />
  </video>
</div>
        <Container>
          <div className="mb-8 rounded-xl bg-yellow-500/10 ring-1 ring-yellow-400/30 p-4 text-center">
  <p className="text-sm font-semibold text-yellow-300">
    🚧 Coming Soon — TWHack Cyber Defense is currently under development and not yet operational.
    We are building a powerful cybersecurity platform. Stay tuned.
  </p>
</div>
          <SectionTitle
            eyebrow="Disciplined Cyber Defense"
            title={<>Cyber Defense, <span className="text-sky-300">Proven by Penetration.</span></>}
            lead="Precision-driven penetration testing and vulnerability assessment for security-focused organizations."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold hover:bg-slate-100"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
            >
              Request Assessment
            </Link>
            <Link
              href="/capability"
              className="rounded-xl bg-sky-500/15 px-5 py-3 text-sm font-semibold text-sky-200 ring-1 ring-sky-400/25 hover:bg-sky-500/20"
            >
              Capability Statement
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Penetration Testing",
                body: "External, internal, and web application testing to identify exploitable weaknesses within an agreed scope and authorization.",
              },
              {
                title: "Vulnerability Assessment",
                body: "Comprehensive assessment and risk prioritization with clear remediation guidance for technical teams and leadership.",
              },
              {
                title: "Defense & Hardening Support",
                body: "Practical security improvements, configuration hardening, monitoring recommendations, and validation retesting.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-sky-400/30 transition"
              >
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-20">
        <Container>
          <div className="rounded-2xl bg-sky-500/10 ring-1 ring-sky-400/20 p-8">
            <h2 className="text-2xl font-black">Our Method</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4 text-sm text-slate-200">
              {[
                ["1. Scope & Authorization", "Rules of engagement, written approval, clear boundaries."],
                ["2. Test & Validate", "Findings backed by evidence—not guesses."],
                ["3. Report & Prioritize", "Risk-based roadmap for leadership and engineers."],
                ["4. Remediate & Re-test", "Confirm fixes and reduce future attack surface."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="font-semibold text-white">{t}</div>
                  <div className="mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="text-lg font-bold">Built in Africa. Operating Globally.</h3>
              <p className="mt-2 text-sm text-slate-200">
                Based in Accra, Ghana, we deliver globally aligned cybersecurity services with a disciplined,
                government-ready approach.
              </p>
              <p className="mt-4 text-sm text-slate-200">
                We believe Africa does not only consume technology — we secure it.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="text-lg font-bold">Confidential Engagement Model</h3>
              <p className="mt-2 text-sm text-slate-200">
                Consultant identities are disclosed only to verified organizations during formal onboarding.
                All engagements require written authorization and defined scope agreements.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link className="text-sky-300 hover:text-sky-200 text-sm font-semibold" href="/legal">
                  Read our Legal Policy →
                </Link>
                <Link className="text-sky-300 hover:text-sky-200 text-sm font-semibold" href="/contact">
                  Contact TWHack →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
