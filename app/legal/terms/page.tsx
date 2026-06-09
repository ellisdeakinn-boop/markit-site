// LEGAL TEMPLATE — Reviewed by no one yet. Have a licensed Arizona attorney
// review before this goes live in production. Plain-language template only.

import type { Metadata } from "next";
import LegalShell from "../../components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of markiting.agency and any engagement with Markit. Governed by Arizona law.",
  alternates: { canonical: "/legal/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal · 02"
      title="Terms of Service"
      updated="May 21, 2026"
    >
      <p>
        These Terms of Service (<strong>&ldquo;Terms&rdquo;</strong>) govern
        your access to and use of markiting.agency (the{" "}
        <strong>&ldquo;Site&rdquo;</strong>) and any services provided by
        Markit (<strong>&ldquo;Markit,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;</strong> or{" "}
        <strong>&ldquo;our&rdquo;</strong>). By using the Site or engaging
        Markit, you agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old and able to enter a binding
        contract under Arizona law. If you accept these Terms on behalf of a
        business, you represent that you have authority to bind that
        business.
      </p>

      <h2>2. Services</h2>
      <p>
        Markit provides marketing services including, where contracted, paid
        media management, video production, website builds, lead generation
        systems, copywriting, and ancillary services. The specific scope,
        deliverables, timeline, and fees for any engagement are defined in a
        separate written agreement, statement of work, or proposal (a{" "}
        <strong>&ldquo;Service Agreement&rdquo;</strong>). If the Service
        Agreement conflicts with these Terms, the Service Agreement controls
        for that engagement.
      </p>

      <h2>3. Fees and payment</h2>
      <ul>
        <li>
          Fees are stated in the applicable Service Agreement. Engagements
          start at $10,000 per month unless otherwise agreed in writing.
        </li>
        <li>
          Invoices are payable in U.S. dollars on the terms stated in the
          Service Agreement. Standard terms are net seven (7) days.
        </li>
        <li>
          Late payments accrue interest at the lesser of 1.5% per month or
          the maximum permitted by Arizona law.
        </li>
        <li>
          Third-party costs (ad spend, software, talent, location fees,
          paid stock or licensing) are billed at cost, in addition to fees.
        </li>
      </ul>

      <h2>4. Client responsibilities</h2>
      <ul>
        <li>
          Provide timely access to accounts, brand assets, decisions, and
          approvals required to deliver the services.
        </li>
        <li>
          Ensure all materials you supply do not infringe any third party
          rights and comply with applicable laws.
        </li>
        <li>
          Maintain reasonable security on accounts shared with Markit during
          the engagement.
        </li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        Upon full payment of fees for a deliverable, Markit assigns to you
        the rights you need to use that deliverable for your business as
        contemplated by the Service Agreement, except that:
      </p>
      <ul>
        <li>
          Markit retains ownership of its pre-existing tools, frameworks,
          processes, and code libraries used in the work.
        </li>
        <li>
          Markit may showcase the work in its portfolio and marketing,
          including reproducing the deliverable, naming you as a client, and
          publishing case-study results, unless you ask us in writing not to
          before the work begins.
        </li>
        <li>
          Third-party materials (fonts, stock, software) remain governed by
          their own licenses.
        </li>
      </ul>

      <h2>6. Confidentiality</h2>
      <p>
        Each party will protect the other&apos;s non-public business
        information disclosed during the engagement, using the same level of
        care it uses to protect its own confidential information and no less
        than a reasonable standard.
      </p>

      <h2>7. Warranties and disclaimers</h2>
      <p>
        Markit will perform the services with reasonable professional skill.{" "}
        <strong>
          Except for that warranty, the Site and the services are provided
          &ldquo;as is&rdquo; without warranty of any kind, express or
          implied, including any implied warranties of merchantability,
          fitness for a particular purpose, or non-infringement.
        </strong>{" "}
        Marketing outcomes depend on many factors outside Markit&apos;s
        control. We do not guarantee specific revenue, lead, view, or
        ranking outcomes unless expressly stated in writing.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Markit&apos;s aggregate
        liability arising out of or related to these Terms or any
        engagement, whether in contract, tort, or any other legal theory,
        will not exceed the fees paid by you to Markit in the three (3)
        months preceding the event giving rise to the claim. Markit is not
        liable for indirect, incidental, special, consequential, or
        punitive damages, including lost profits, lost data, or business
        interruption.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Markit from third-party
        claims arising out of your use of the Site, materials you supply,
        your breach of these Terms, or your violation of law.
      </p>

      <h2>10. Termination</h2>
      <p>
        Either party may terminate an engagement on the notice period
        defined in the Service Agreement (default: thirty (30) days written
        notice). Fees for work performed and committed third-party costs
        through the effective date of termination remain payable. Sections
        that by their nature survive termination (IP, confidentiality,
        warranties, liability, indemnification, governing law) will
        survive.
      </p>

      <h2>11. Governing law and venue</h2>
      <p>
        These Terms are governed by the laws of the State of Arizona,
        without regard to conflict-of-law principles. Any dispute will be
        brought exclusively in the state or federal courts located in
        Maricopa County, Arizona, and the parties consent to personal
        jurisdiction there.
      </p>

      <h2>12. Dispute resolution</h2>
      <p>
        Before filing a claim, the parties will attempt in good faith to
        resolve the dispute through direct discussion for thirty (30) days.
        If unresolved, either party may proceed in the courts identified
        above.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. The updated version
        will be posted with a new &ldquo;Last updated&rdquo; date.
        Continued use of the Site or services after the update constitutes
        acceptance of the changes.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href="mailto:hello@markiting.agency">hello@markiting.agency</a>.
      </p>
    </LegalShell>
  );
}
