import React from "react";
import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Refund Policy - Ankit Raj",
  description: "Refund policy detailing refund eligibility, processes, and conditions for projects and digital services.",
};

export default function RefundPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <PolicyLayout title="Refund & Cancellation Policy" lastUpdated={currentDate}>
      <div className="space-y-8 font-light text-text">
        <section>
          <p>
            We strive to provide exceptional service and digital products. Please read this policy carefully to understand your rights and our obligations regarding refunds and cancellations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">1. Custom Development & Consulting Services</h2>
          <p>
            For client projects, custom software development, and consultancy services, refunds are managed on a project-by-project milestone basis as defined in the client contract:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Initial Deposits:</strong> Any initial kick-off deposit or setup fee is non-refundable, as it covers resource allocation, initial research, and design phases.</li>
            <li><strong>Milestone Payments:</strong> Once a project milestone is completed, approved, and paid for, it is non-refundable.</li>
            <li><strong>Cancellation:</strong> You may request to cancel services at any time. Upon cancellation, you will be billed only for the work completed and hours logged up to the cancellation request date.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">2. Digital Products (Templates, Boilerplates, Plugins)</h2>
          <p>
            Due to the nature of digital goods (instant download and source code access), refunds for digital products are subject to the following rules:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>We offer a 7-day refund window if the digital product is defective, doesn&apos;t work as advertised, or has major technical issues that we cannot resolve within 5 business days of reporting.</li>
            <li>To be eligible for a refund, you must provide proof of purchase and a detailed explanation of the defect or issue.</li>
            <li>Refunds will not be issued for change of mind, user error, or lack of technical skill required to use the product.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">3. Non-Refundable Expenses</h2>
          <p>
            Certain third-party fees incurred during the project are completely non-refundable:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Domain name registrations.</li>
            <li>Cloud hosting fees (e.g. AWS, Vercel, Supabase).</li>
            <li>Third-party API credits, subscriptions, or license keys purchased for the project.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">4. Processing Refunds</h2>
          <p>
            Once a refund request is approved, it will be processed within 5-10 business days. The refund will be credited back to your original payment method. Depending on your bank or payment gateway, it may take additional days for the refund to reflect in your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">5. Contact Us</h2>
          <p>
            If you have any questions regarding refunds or cancellations, please reach out with your project ID or invoice details.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
