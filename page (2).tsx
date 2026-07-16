import { LegalShell, LegalH, LegalP } from "@/components/LegalPage";
import { CONTACT_INFO } from "@/lib/data";

export const metadata = {
  title: "Equal Employment Opportunity — 10 Pillars Solutions",
  description:
    "10 Pillars Solutions is an Equal Opportunity Employer committed to a discrimination-free candidate experience, including FEHA compliance, reasonable accommodation, and fair chance hiring.",
};

export default function EEOPage() {
  return (
    <LegalShell title="Equal Employment Opportunity" updated="July 2026">
      <LegalP>
        10 Pillars Solutions is an Equal Opportunity Employer and staffing partner. We are
        committed to a workplace and candidate experience free from discrimination and harassment.
      </LegalP>

      <LegalH>Our Commitment</LegalH>
      <LegalP>
        All qualified applicants and placed employees receive consideration without regard to
        race, color, religion, sex, sexual orientation, gender identity or expression, national
        origin, ancestry, age, disability, medical condition, genetic information, marital status,
        military or veteran status, or any other characteristic protected by federal, state, or
        local law — including the California Fair Employment and Housing Act (FEHA).
      </LegalP>

      <LegalH>Reasonable Accommodation</LegalH>
      <LegalP>
        We provide reasonable accommodations for qualified individuals with disabilities
        throughout the application and placement process. To request an accommodation, contact{" "}
        {CONTACT_INFO.email} or {CONTACT_INFO.phone}.
      </LegalP>

      <LegalH>Fair Chance</LegalH>
      <LegalP>
        Consistent with applicable law, including California&apos;s Fair Chance Act, we consider
        qualified applicants with arrest and conviction records.
      </LegalP>
    </LegalShell>
  );
}
