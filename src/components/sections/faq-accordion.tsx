"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How much Boom Blu should I use per wash?",
      answer:
        "Boom Blu is effective even in small quantities. For a standard load, use 30-40ml. For lightly soiled clothes, use 20ml. For heavily soiled items or larger loads, increase to 50ml. The quick-dissolving formula mixes evenly with water.",
    },
    {
      id: 2,
      question: "Can I use Boom Blu for hand washing?",
      answer:
        "Yes! Boom Blu is suitable for both machine wash and hand wash. For hand washing, mix 1 teaspoon with water, soak clothes for 10-15 minutes, wash gently, and rinse thoroughly.",
    },
    {
      id: 3,
      question: "Is Boom Blu safe for all fabrics?",
      answer:
        "Yes, Boom Blu is gentle on clothes and safe for all fabric types including cotton, polyester, wool, and delicate fabrics. It helps maintain fabric softness and color brightness wash after wash.",
    },
    {
      id: 4,
      question: "How long does the fragrance last?",
      answer:
        "Boom Blu has a long-lasting fresh fragrance that keeps clothes smelling clean for extended periods. The scent remains subtle and pleasant, not overpowering.",
    },
    {
      id: 5,
      question: "Does Boom Blu remove tough stains?",
      answer:
        "Yes! Boom Blu is formulated to remove dirt, sweat marks, oil stains, and everyday stains effectively. Apply directly on stains, let it sit for a few minutes, then wash for best results.",
    },
  ];

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-14 md:py-28 dark:bg-[#171f2e]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Got questions about Boom Blu? We&apos;ve answered the most common ones below. Still have questions? Contact us anytime.
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
