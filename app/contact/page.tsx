import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Page() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionTitle title="Contact" lead="Reach TWHack Cyber Defense for authorized assessments and formal engagement." />
        <div className="mt-10 space-y-5 text-slate-200">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-3">
              <div className="text-white font-bold text-lg">Contact Information</div>
              <div className="text-sm">
                <div className="text-slate-400">Location</div>
                <div>Accra, Ghana</div>
              </div>
              <div className="text-sm">
                <div className="text-slate-400">Email</div>
                <a className="text-sky-300 hover:text-sky-200 font-semibold" href="mailto:owireduanthony@gmail.com">
                  owireduanthony@gmail.com
                </a>
              </div>
              <div className="text-sm">
                <div className="text-slate-400">Phone</div>
                <div className="space-y-1">
                  <a className="text-sky-300 hover:text-sky-200 font-semibold" href="tel:+233544611029">+233 544 611 029</a><br/>
                  <a className="text-sky-300 hover:text-sky-200 font-semibold" href="tel:+233534806499">+233 534 806 499</a>
                </div>
              </div>
              <div className="text-sm">
                <div className="text-slate-400">WhatsApp</div>
                <div className="space-y-1">
                  <a className="text-sky-300 hover:text-sky-200 font-semibold" href="https://wa.me/233544611029" target="_blank" rel="noreferrer">Message +233 544 611 029</a><br/>
                  <a className="text-sky-300 hover:text-sky-200 font-semibold" href="https://wa.me/233534806499" target="_blank" rel="noreferrer">Message +233 534 806 499</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 space-y-3">
              <div className="text-white font-bold text-lg">Engagement Request (Copy/Paste Template)</div>
              <p className="text-sm text-slate-200">
                Send this by email or WhatsApp. We review all inquiries before acceptance.
              </p>
              <div className="rounded-xl bg-slate-950/60 ring-1 ring-white/10 p-4 text-sm font-mono whitespace-pre-wrap">
Company Name:
Business Email:
Role/Position:
Service Needed (Pen Test / VA / Hardening):
Scope Overview (assets, IP ranges, apps):
Preferred Timeline:
Compliance Needs (NDA / onboarding requirements):
              </div>
              <p className="text-xs text-slate-300">
                Testing is conducted strictly under written authorization and defined scope agreements.
                Requests involving unauthorized access are not accepted.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
