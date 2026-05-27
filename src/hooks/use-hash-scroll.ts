'use client';

import { useEffect } from 'react';

export function useHashScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash.slice(1);

      // If no hash or hash is empty, scroll to top
      if (!hash || hash === '') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }

      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    };

    // Add a small delay on initial mount to allow DOM to settle
    const initialTimer = setTimeout(handleScroll, 100);

    // Listen for hash changes
    window.addEventListener('hashchange', handleScroll);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);
}



