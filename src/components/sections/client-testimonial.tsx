"use client";

import Image from 'next/image';
import { useState } from 'react';

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      company: 'Mother of Two',
      image: '/images/users/user-1.png',
      testimonial:
        "Boom Blu is amazing! It removes all the stubborn stains from my kids' clothes and uniforms. The freshness lasts for days, and my clothes feel softer. Definitely worth it!",
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      company: 'Working Professional',
      image: '/images/users/user-2.png',
      testimonial:
        "I love how well it works for my office clothes. Sweat stains and dirt are gone in one wash. The formula dissolves quickly, and I don't need much for each load. Great value for money!",
    },
    {
      id: 3,
      name: 'Meera Patel',
      company: 'Homemaker',
      image: '/images/users/user-3.png',
      testimonial:
        "Perfect for both my washing machine and hand washing. The fragrance is fresh and not too strong. My family's clothes are always clean and bright. I recommend Boom Blu to all my friends!",
    },
    {
      id: 4,
      name: 'Arjun Singh',
      company: 'Fitness Enthusiast',
      image: '/images/users/user-4.png',
      testimonial:
        "Removes sweat and gym wear stains incredibly well. I was skeptical at first, but Boom Blu really delivers. Great product at an affordable price!",
    },
    {
      id: 5,
      name: 'Anjali Verma',
      company: 'Mother & Professional',
      image: '/images/users/user-1.png',
      testimonial:
        "My whole family loves Boom Blu. It's gentle on delicate fabrics but powerful enough for tough stains. I've been using it for 6 months now and haven't switched back!",
    },
    {
      id: 6,
      name: 'Vikram Desai',
      company: 'Business Owner',
      image: '/images/users/user-2.png',
      testimonial:
        "Boom Blu is my go-to for work uniforms and daily wear. The quick-dissolving formula means no residue, and a little goes a long way. Highly recommend!",
    },
  ];

  export default function TestimonialsSection() {
    const [showAll, setShowAll] = useState(false);

    // Determine which testimonials to display
    const visibleTestimonials = showAll
      ? testimonials
      : testimonials.slice(0, 6);

    return (
      <section className="md:py-28 py-14 relative">
        <div className="wrapper">
          <div>
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                What Families Say About Boom Blu
              </h2>
              <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
                Trusted by families and professionals for powerful cleaning, long-lasting freshness, and fabric care you can depend on every day.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-[72rem] mx-auto">
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Show More Button */}
            <div className="mt-8 text-center relative z-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 py-3.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-900 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none"
              >
                <span>{showAll ? 'Show less...' : 'Show more...'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gradient overlay when collapsed */}
        {!showAll && (
          <div className="white-gradient h-[264px]  w-full absolute bottom-0"></div>
        )}
      </section>
    );
  }

  // Testimonial Card Component
  function TestimonialCard({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[number];
  }) {
    return (
      <div className="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
        <div className="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
          <div>
            <Image
              src={testimonial.image || '/placeholder.svg'}
              alt={testimonial.name}
              width={52}
              height={52}
              className="size-13 object-cover ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            />
          </div>
          <div>
            <h3 className="text-gray-800 font-base dark:text-white/90">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.company}
            </p>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
          <p className="text-base leading-6 text-gray-700 dark:text-gray-400">
            {testimonial.testimonial}
          </p>
        </div>
      </div>
    );
  }
