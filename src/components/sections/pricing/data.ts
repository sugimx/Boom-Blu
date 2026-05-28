export const BILLING_PERIODS = [
  {
    label: 'One Time Purchase',
    key: 'monthly',
    saving: null,
  },
] as const;

const AMOUNTS = {
  small: {
    monthly: 149,
    yearly: 1341,
  },
  medium: {
    monthly: 249,
    yearly: 2241,
  },
  large: {
    monthly: 399,
    yearly: 3591,
  },
  bulk: {
    monthly: null,
    yearly: null,
  },
};

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];
export const BILLING_PLANS = [
  {
    name: '250ml Bottle',
    description:
      'Perfect for personal use or trying Boom Blu for the first time.',
    pricing: {
      monthly: {
        amount: AMOUNTS['small']['monthly'],
        formattedPrice: '₹' + AMOUNTS['small']['monthly'],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['small']['yearly'],
        formattedPrice: '₹' + AMOUNTS['small']['yearly'],
        stripeId: null,
      },
    },
    features: [
      'Approximately 10-15 washes',
      'Fresh fragrance',
      'Effective on tough stains',
      'Gentle on all fabrics',
      'Quick dissolving formula',
    ],
    cta: 'Buy Now',
    popular: false,
  },
  {
    name: '500ml Bottle',
    description:
      "Best seller. Great for families. Superior cleaning with long-lasting freshness.",
    pricing: {
      monthly: {
        amount: AMOUNTS['medium']['monthly'],
        formattedPrice: '₹' + AMOUNTS['medium']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['medium']['monthly'],
        formattedPrice: '₹' + AMOUNTS['medium']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_MONTHLY_PRICE_ID!,
      },
    },
    features: [
      'Approximately 20-30 washes',
      'Everything in 250ml',
      'Better value per wash',
      'Works for machine & hand wash',
      'Maintains fabric softness',
    ],
    cta: 'Buy Now',
    popular: true,
  },
  {
    name: '1L Bottle',
    description:
      'Premium value pack. Perfect for large families and everyday use.',
    pricing: {
      monthly: {
        amount: AMOUNTS['large']['monthly'],
        formattedPrice: '₹' + AMOUNTS['large']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['large']['monthly'],
        formattedPrice: '₹' + AMOUNTS['large']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID!,
      },
    },
    features: [
      'Approximately 40-60 washes',
      'Everything in 500ml',
      'Best value per wash',
      'Powerful stain removal',
      'Long-lasting fragrance',
      'Bulk purchase discount available',
    ],
    cta: 'Buy Now',
    popular: false,
  },
  {
    name: 'Bulk Orders',
    description:
      'Custom solutions for businesses, hostels, laundromats, and commercial needs.',
    pricing: {
      monthly: {
        amount: AMOUNTS['bulk']['monthly'],
        formattedPrice: "Contact Us",
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['bulk']['yearly'],
        formattedPrice: "Contact Us",
        stripeId: null,
      },
    },
    features: [
      '5L+ quantities available',
      'Special pricing for bulk orders',
      'Dedicated support',
      'Custom branding available',
      'Flexible delivery options',
    ],
    cta: 'Get Quote',
    popular: false,
  },
];
