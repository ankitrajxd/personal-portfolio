import React from "react";
import type { Metadata } from "next";
import PolicyLayout from "../../components/PolicyLayout";

export const metadata: Metadata = {
  title: "Return Policy - Ankit Raj",
  description: "Return policy explaining rules for physical merchandise, shipping fees, exchanges, and eligibility windows.",
};

export default function ReturnPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <PolicyLayout title="Return Policy" lastUpdated={currentDate}>
      <div className="space-y-8 font-light text-text">
        <section>
          <p>
            If you have purchased physical products (such as merchandise, books, or physical assets) from this website, this Return Policy outlines the terms under which returns and exchanges are handled. For digital goods or services, please refer to our Refund Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">1. Return Eligibility Window</h2>
          <p>
            You have 14 calendar days from the date of delivery to request a return or exchange for any eligible physical item.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">2. Conditions for Returns</h2>
          <p>
            To qualify for a return and full refund, the item must meet the following criteria:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>The item must be unused, unwashed, and in the same condition that you received it.</li>
            <li>The item must be in its original packaging.</li>
            <li>You must present the receipt, invoice, or proof of purchase.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">3. How to Start a Return</h2>
          <p>
            Please follow these steps to return an item:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Email us with your order number, details of the item you wish to return, and the reason for the return.</li>
            <li>If your return is approved, we will send you a Return Merchandise Authorization (RMA) code and instructions on where to send the package.</li>
            <li>Package the item securely, write the RMA code clearly on the box, and ship it to the address provided. We recommend using a trackable shipping service.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">4. Shipping Costs</h2>
          <p>
            You will be responsible for paying for your own shipping costs for returning your item. Return shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>
          <p className="mt-2">
            If the item arrived damaged, defective, or if you received the incorrect product, we will cover all return shipping and replacement shipping costs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">5. Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged. If you need to exchange an item for the same product (e.g. a different size of merchandise), send us an email and we will arrange the exchange subject to stock availability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading mb-3">6. Contact Information</h2>
          <p>
            For any return queries, please contact us with your order details.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
