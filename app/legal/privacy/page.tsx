// LEGAL TEMPLATE — Reviewed by no one yet. Have a licensed Arizona attorney
// review before this goes live in production. Plain-language template only.

import type { Metadata } from "next";
import LegalShell from "../../components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Markit collects, uses, and protects your information. Aligned with Arizona consumer protection and breach-notification law.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal · 01"
      title="Privacy Policy"
      updated="May 21, 2026"
    >
      <p>
        Markit (<strong>&ldquo;Markit,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;</strong> or{" "}
        <strong>&ldquo;our&rdquo;</strong>) respects your privacy. This Privacy
        Policy explains what information we collect when you visit
        markiting.agency (the <strong>&ldquo;Site&rdquo;</strong>) or engage our
        services, how we use it, and the choices you have. Markit operates from
        Arizona and complies with applicable Arizona laws, including the
        Arizona Consumer Fraud Act (A.R.S. § 44-1521 et seq.) and the Arizona
        data breach notification statute (A.R.S. § 18-552).
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact information</strong> you provide directly when you
          book a call, send an enquiry, or sign a contract (name, business
          name, email, phone, role).
        </li>
        <li>
          <strong>Booking information</strong> collected via our third-party
          scheduler (Calendly) when you reserve a call.
        </li>
        <li>
          <strong>Project information</strong> shared during onboarding and
          delivery (brand assets, account access, business metrics).
        </li>
        <li>
          <strong>Site usage data</strong> automatically collected when you
          visit the Site, including IP address, browser type, device type,
          referring URL, pages viewed, and time on page.
        </li>
        <li>
          <strong>Cookies and similar technologies</strong> to remember
          preferences, analyse traffic, and improve site performance.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to enquiries and schedule calls.</li>
        <li>To deliver services contracted by you or your business.</li>
        <li>To send relevant communications about active engagements.</li>
        <li>
          To measure and improve Site performance, security, and content.
        </li>
        <li>To comply with legal obligations and enforce our Terms.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell or rent personal information. We share information only
        with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> we use to operate the business
          (e.g. Calendly for scheduling, Google Workspace for email, hosting
          and analytics providers, payment processors). Each is bound by its
          own privacy commitments.
        </li>
        <li>
          <strong>Authorities</strong> when required by law, subpoena, or
          legitimate legal process.
        </li>
        <li>
          <strong>Successors</strong> in the event of a merger, acquisition,
          or asset sale, in which case we will give notice on this page.
        </li>
      </ul>

      <h2>Cookies and tracking</h2>
      <p>
        We use a small number of cookies and similar technologies to operate
        the Site and to understand how visitors use it. You can disable
        cookies in your browser settings. Some features of the Site may not
        work as intended without them.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain personal information for as long as needed to provide
        services, comply with legal obligations, resolve disputes, and enforce
        agreements. Project data is typically retained for the life of the
        engagement plus three (3) years for record-keeping.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>
          <strong>Access and correction.</strong> You can request a copy of
          the personal information we hold about you and ask us to correct it.
        </li>
        <li>
          <strong>Deletion.</strong> You can request deletion of personal
          information, subject to legitimate retention obligations.
        </li>
        <li>
          <strong>Opt-out of marketing.</strong> Every marketing email
          includes an unsubscribe link.
        </li>
        <li>
          <strong>Do Not Track.</strong> The Site does not currently respond
          to browser DNT signals.
        </li>
      </ul>
      <p>
        To exercise these rights, email{" "}
        <a href="mailto:hello@markiting.agency">hello@markiting.agency</a>.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        The Site and services are not directed to children under 13, and we
        do not knowingly collect personal information from children under 13.
        If you believe a child has provided us personal information, contact
        us and we will delete it.
      </p>

      <h2>Security and breach notification</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards
        to protect personal information. No system is perfectly secure. If we
        learn of a breach involving Arizona residents&apos; personal
        information as defined by A.R.S. § 18-552, we will notify affected
        individuals as required by Arizona law.
      </p>

      <h2>Third-party links</h2>
      <p>
        The Site may link to third-party websites and services (including
        client websites, Calendly, and our partners&apos; properties). We are
        not responsible for the privacy practices of those sites. Review
        their policies before sharing information.
      </p>

      <h2>International users</h2>
      <p>
        The Site is operated from the United States. If you access it from
        outside the U.S., you understand your information will be processed
        in the U.S. under U.S. law.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will revise
        the &ldquo;Last updated&rdquo; date at the top of the page and, for
        material changes, take reasonable steps to notify you.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:hello@markiting.agency">hello@markiting.agency</a>. Markit
        is operated from Arizona, United States.
      </p>
    </LegalShell>
  );
}
