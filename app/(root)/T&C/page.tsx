import React from "react";
import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions - Ankit Raj",
  description: "Terms and conditions governing the use of Ankit Raj's portfolio and professional services.",
};

export default function TermsAndConditions() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <PolicyLayout title="Terms and Conditions" lastUpdated={currentDate}>
      <div className="space-y-8 font-light text-text">
        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using this website, portfolio, and any associated services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">2. Intellectual Property Rights</h2>
          <p>
            The content, code, design, layout, graphics, and other materials on this website are protected by intellectual property laws. Unless otherwise stated, Ankit Raj owns the intellectual property rights for all materials on the website. All intellectual property rights are reserved.
          </p>
          <p className="mt-2">
            You may view and print pages for your personal, non-commercial use, subject to restrictions set in these terms. You must not:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Republish material or source code from this portfolio without attribution or consent.</li>
            <li>Sell, rent, or sub-license materials from this website.</li>
            <li>Reproduce, duplicate, or copy materials for commercial purposes without explicit permission.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">3. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Modify or copy the materials.</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">4. Disclaimer of Warranties</h2>
          <p>
            The materials on this website are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Ankit Raj makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">5. Limitation of Liability</h2>
          <p>
            In no event shall Ankit Raj or his suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">7. Contact Information</h2>
          <p>
            If you have any questions or queries regarding any of our terms, please feel free to reach out via the contact page or by emailing me directly.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
