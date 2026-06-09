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
      <div className="space-y-6 font-light text-text leading-relaxed">
        <p>
          This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service
          that you have purchased through the Platform. Under this policy:
        </p>
        <ol className="list-decimal space-y-6 pl-5">
          <li>
            Cancellations will only be considered if the request is made <strong className="font-semibold text-heading">14 days</strong> of placing the order.
            However, cancellation requests may not be entertained if the orders have been communicated to
            such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping
            them, or the product is out for delivery. In such an event, you may choose to reject the product at
            the doorstep.
          </li>
          <li>
            <strong className="font-semibold text-heading">8544661277</strong> does not accept cancellation requests for perishable items like flowers, eatables, etc.
            However, the refund / replacement can be made if the user establishes that the quality of the
            product delivered is not good.
          </li>
          <li>
            In case of receipt of damaged or defective items, please report to our customer service team. The
            request would be entertained once the seller/ merchant listed on the Platform, has checked and
            determined the same at its own end. This should be reported within <strong className="font-semibold text-heading">14 days</strong> of receipt of products.
            In case you feel that the product received is not as shown on the site or as per your expectations,
            you must bring it to the notice of our customer service within <strong className="font-semibold text-heading">14 days</strong> of receiving the product.
            The customer service team after looking into your complaint will take an appropriate decision.
          </li>
          <li>
            In case of complaints regarding the products that come with a warranty from the manufacturers,
            please refer the issue to them.
          </li>
          <li>
            In case of any refunds approved by <strong className="font-semibold text-heading">8544661277</strong>, it will take <strong className="font-semibold text-heading">7 days</strong> for the refund to be processed
            to you.
          </li>
        </ol>
      </div>
    </PolicyLayout>
  );
}
