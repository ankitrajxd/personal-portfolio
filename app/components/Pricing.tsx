"use client";

import { useState } from "react";

// Custom Check Icon Component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const pricingTiers = [
  {
    name: "Starter",
    price: 499,
    description: "Small projects & startups",
    timeframe: "1-2 weeks",
    features: [
      "Responsive Design",
      "Basic SEO",
      "3 Pages",
      "Contact Form",
      "1 Month Support",
      "Mobile Ready",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 999,
    description: "Growing businesses",
    timeframe: "3-4 weeks",
    features: [
      "Everything in Starter",
      "Advanced SEO",
      "8 Pages",
      "CMS Integration",
      "Analytics",
      "3 Months Support",
      "Performance Optimized",
      "Custom Animations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 1999,
    description: "Large-scale applications",
    timeframe: "6-8 weeks",
    features: [
      "Everything in Professional",
      "Custom Backend",
      "Database Integration",
      "API Development",
      "Admin Dashboard",
      "6 Months Support",
      "Advanced Security",
      "Performance Monitoring",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  return (
    <section className="mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[26px] text-center font-normal">
            Choose Your
            <span className="text-[#fecc1b]"> Perfect Plan</span>
          </h2>
          <p className="text-[14px] opacity-50 text-center text-text">
            Dev packages for your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative group ${tier.popular ? "lg:scale-105" : ""}`}
              onMouseEnter={() => setHoveredTier(index)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-4 z-10">
                  <div className="bg-[#6BD968] text-gray px-3 py-1 rounded text-[10px] font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`
                bg-nav rounded-lg  overflow-hidden transition-all duration-200 h-full border border-transparent
                ${
                  hoveredTier === index
                    ? "bg-card_hover border-zinc-600"
                    : "hover:bg-card_hover"
                }
              `}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-heading mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-[13px] text-faded">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-faded text-sm">$</span>
                      <span className="text-3xl font-bold text-heading">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-[12px] text-faded mt-1">
                      One-time payment
                    </p>
                    <p className="text-[12px] text-[#6BD968] mt-1">
                      {tier.timeframe} delivery
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-[#6BD968]" />
                        <span className="text-[13px] text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`
                    w-full py-2 px-4 rounded text-[13px] font-medium transition-all duration-200
                    ${
                      tier.popular
                        ? "bg-[#6BD968] text-gray hover:bg-[#5bc05a]"
                        : "border border-zinc-600 text-text hover:bg-zinc-700  text-xs hover:text-heading"
                    }
                  `}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
