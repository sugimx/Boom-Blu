'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

export function IntroVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full video-popup flex h-12 gap-3 items-center text-sm border bg-white dark:bg-white/10 dark:border-white/[0.05] dark:text-white border-gray-100 p-1.5 pr-6"
      >
        <span className="size-9 rounded-full gradient-bg-two inline-flex items-center justify-center text-sm font-medium">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 3.71077L3.5 12.3482C3.5 13.5211 4.78545 14.2402 5.78489 13.6265L12.8183 9.30776C13.7717 8.7223 13.7717 7.33672 12.8183 6.75125L5.7849 2.43251C4.78545 1.81882 3.5 2.53795 3.5 3.71077Z"
              fill="white"
            />
          </svg>
        </span>
        Watch Intro Video
      </button>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-full max-w-4xl max-h-96 flex items-center justify-center">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dh03yacoi&public_id=Modern_washing_liquid_bottle_with_vibrant_blue_packaging_and_water_splash_effects_fresh_clean_clothes_floating_in_bright_light_sparkling_bubbles_and_water_droplets_stain_removal_demonstration_showing_before_and_p6kz6k&autoplay=true&loop=true&muted=true&controls=false"
                width="640"
                height="360"
                style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
