import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/Section";

export default function Page() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionTitle title="Privacy" lead="How we handle inquiry data and engagement information." />
        <div className="mt-10 space-y-5 text-slate-200">
<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Privacy</h2>
  <p>
    TWHack Cyber Defense collects only the information needed to respond to inquiries and conduct authorized services.
    We do not sell client information.
  </p>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Information You Provide</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Company contact details (name, email, phone)</li>
    <li>Engagement scope information required for assessment planning</li>
  </ul>
</section>

<section className="space-y-3">
  <h2 className="text-xl font-bold text-white">Confidential Handling</h2>
  <p>
    Technical findings, evidence, and reports are treated as confidential and shared only with verified client contacts.
  </p>
</section>
        </div>
      </Container>
    </main>
  );
}
