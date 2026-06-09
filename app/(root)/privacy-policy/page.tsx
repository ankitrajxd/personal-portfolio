import React from "react";
import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy - Ankit Raj",
  description: "Privacy policy detailing data collection, storage, and protection practices of Ankit Raj.",
};

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <PolicyLayout title="Privacy Policy" lastUpdated={currentDate}>
      <div className="space-y-8 font-light text-text">
        <section>
          <p>
            Your privacy is of utmost importance to us. This Privacy Policy document outlines the types of personal information that is received and collected by this portfolio and how it is used.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you fill out contact forms, send us emails, or subscribe to any newsletters. This information may include:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Your name and email address.</li>
            <li>Any other details you choose to provide in the contact form or email body.</li>
          </ul>
          <p className="mt-3">
            Additionally, like many other websites, this site collects log files. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends and administer the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">2. How We Use Your Information</h2>
          <p>
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>To personalize your experience and better respond to your individual needs.</li>
            <li>To improve our website based on the information and feedback we receive from you.</li>
            <li>To communicate with you and respond to inquiries or support requests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">3. Cookies and Web Beacons</h2>
          <p>
            We use cookies to store information about visitors&apos; preferences, to record user-specific information on which pages the user accesses or visits, and to customize web page content based on visitors&apos; browser type or other information that the visitor sends via their browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">4. Security of Data</h2>
          <p>
            The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">5. Third-Party Links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party products or services on our website (such as links to GitHub, LinkedIn, or client projects). These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">6. Consent</h2>
          <p>
            By using our website, you hereby consent to our privacy policy and agree to its terms.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
