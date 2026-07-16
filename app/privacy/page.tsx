import { LegalShell, LegalH, LegalP } from "@/components/LegalPage";
import { CONTACT_INFO } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy — 10 Pillars Solutions",
  description:
    "How 10 Pillars Solutions collects, uses, and protects personal information, including your California privacy rights under the CCPA/CPRA.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 2026">
      <LegalP>
        10 Pillars Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
        privacy. This policy describes how we collect, use, and protect personal information when
        you use our website or services.
      </LegalP>

      <LegalH>Information We Collect</LegalH>
      <LegalP>
        We collect information you provide directly — such as your name, email address, phone
        number, résumé, employment history, and any details submitted through our forms. We may
        also collect standard technical data (browser type, pages visited) to improve our website.
      </LegalP>

      <LegalH>How We Use Your Information</LegalH>
      <LegalP>
        We use your information to evaluate candidates for employment opportunities, respond to
        inquiries, communicate about roles and services, and fulfill our staffing and recruiting
        functions. We do not sell your personal information.
      </LegalP>

      <LegalH>Sharing of Information</LegalH>
      <LegalP>
        Candidate information is shared with prospective employers only with your knowledge and
        consent. We may share information with service providers who assist our operations, or
        where required by law.
      </LegalP>

      <LegalH>Your California Privacy Rights (CCPA/CPRA)</LegalH>
      <LegalP>
        California residents have the right to know what personal information we collect, request
        deletion of personal information, correct inaccurate information, and opt out of the sale
        or sharing of personal information. 10 Pillars Solutions does not sell personal
        information. To exercise your rights, contact us at {CONTACT_INFO.email} or{" "}
        {CONTACT_INFO.phone}. We will not discriminate against you for exercising your privacy
        rights.
      </LegalP>

      <LegalH>Data Retention &amp; Security</LegalH>
      <LegalP>
        We retain candidate information only as long as necessary for legitimate business purposes
        or as required by law, and we apply reasonable safeguards to protect it.
      </LegalP>

      <LegalH>Contact</LegalH>
      <LegalP>
        Questions about this policy: 10 Pillars Solutions, {CONTACT_INFO.mailingAddress} ·{" "}
        {CONTACT_INFO.email} · {CONTACT_INFO.phone}.
      </LegalP>
    </LegalShell>
  );
}
