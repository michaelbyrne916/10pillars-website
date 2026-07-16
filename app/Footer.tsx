import { LegalShell, LegalH, LegalP } from "@/components/LegalPage";
import { CONTACT_INFO } from "@/lib/data";

export const metadata = {
  title: "Terms of Use — 10 Pillars Solutions",
  description: "Terms governing use of the 10 Pillars Solutions website and services.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" updated="July 2026">
      <LegalP>
        By accessing 10pillarssolutions.com, you agree to these Terms of Use. If you do not agree,
        please do not use this site.
      </LegalP>

      <LegalH>Use of the Site</LegalH>
      <LegalP>
        This website is provided for informational purposes related to our staffing and workforce
        solutions services. You agree not to misuse the site, attempt unauthorized access, or
        submit false or misleading information.
      </LegalP>

      <LegalH>No Guarantee of Employment</LegalH>
      <LegalP>
        Submitting a résumé or application does not guarantee employment, placement, or an
        interview. All placements are subject to client requirements and our qualification
        process.
      </LegalP>

      <LegalH>Intellectual Property</LegalH>
      <LegalP>
        All content on this site — including the &quot;10 Pillars of Staffing&quot; framework,
        text, and branding — is the property of 10 Pillars Solutions and may not be reproduced
        without written permission.
      </LegalP>

      <LegalH>Disclaimer &amp; Limitation of Liability</LegalH>
      <LegalP>
        This site is provided &quot;as is&quot; without warranties of any kind. To the fullest
        extent permitted by law, 10 Pillars Solutions is not liable for damages arising from use
        of this site.
      </LegalP>

      <LegalH>Governing Law</LegalH>
      <LegalP>
        These terms are governed by the laws of the State of California. Contact: 10 Pillars
        Solutions, {CONTACT_INFO.mailingAddress}.
      </LegalP>
    </LegalShell>
  );
}
