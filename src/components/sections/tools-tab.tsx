'use client';

import type React from 'react';
import { Fragment, useState } from 'react';

import {
  CodeGeneratorIcon,
  EmailGeneratorIcon,
  ImageGeneratorIcon,
  TextGeneratorIcon,
  VideoGeneratorIcon,
} from '@/icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Define the tab type
interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  lightImage: string;
  darkImage: string;
  title: string;
  description: string;
}

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState('stains');

  // Tab data
  const tabs: Tab[] = [
    {
      id: 'stains',
      label: 'Stain Removal',
      icon: <TextGeneratorIcon className="w-8 h-8" />,
      lightImage: '/tab-image-1.png',
      darkImage: '/tab-image-1.png',
      title: 'Powerful Stain Removal',
      description:
        'Boom Blu removes dirt, sweat marks, oil stains, and everyday stains effectively. Works on tough marks from the first wash. Apply directly on stains, let sit for a few minutes, then wash for best results.',
    },
    {
      id: 'fragrance',
      label: 'Fresh Fragrance',
      icon: <ImageGeneratorIcon className="w-8 h-8" />,
      lightImage: '/tab-image-2.png',
      darkImage: '/tab-image-2.png',
      title: 'Long-Lasting Fresh Fragrance',
      description:
        'Leaves clothes smelling fresh and clean for a longer time. The signature Boom Blu fragrance is pleasant and not overpowering. Freshness that stays with every wear throughout your day.',
    },
    {
      id: 'gentle',
      label: 'Gentle Care',
      icon: <CodeGeneratorIcon className="w-8 h-8" />,
      lightImage: '/tab-image-3.png',
      darkImage: '/tab-image-3.png',
      title: 'Gentle on Clothes & Fabric',
      description:
        'Designed to protect fabric quality and maintain softness after every wash. Keeps colors bright and fabrics feeling new. Suitable for all fabric types including delicates.',
    },
    {
      id: 'versatile',
      label: 'Works Everywhere',
      icon: <VideoGeneratorIcon className="w-8 h-8" />,
      lightImage: '/tab-image-4.png',
      darkImage: '/tab-image-4.png',
      title: 'Machine & Hand Wash',
      description:
        'Works perfectly for top-load and front-load washing machines, as well as hand washing. Mix with water, soak clothes for 10-15 minutes, wash gently, and rinse thoroughly.',
    },
    {
      id: 'dissolve',
      label: 'Quick Dissolving',
      icon: <EmailGeneratorIcon className="w-8 h-8" />,
      lightImage: '/tab-image-5.png',
      darkImage: '/tab-image-5.png',
      title: 'Quick Dissolving Formula',
      description:
        'Dissolves quickly and mixes evenly with water. Works efficiently without leaving residue on clothes. Effective even in small quantities, making it economical for everyday use.',
    },
  ];

  // Find the active tab
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-14 md:py-28 dark:bg-dark-primary">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 dark:text-white/90 text-3xl md:text-title-lg">
            Why Families Trust Boom Blu
          </h2>
          <p className="max-w-2xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Powerful cleaning that protects your fabrics. Long-lasting freshness for confident confidence. A washing liquid designed for modern living.
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div>
            {/* Tab Navigation */}
            <div className="overflow-x-auto custom-scrollbar mx-auto max-w-fit relative">
              <div className="flex gap-2 min-w-max rounded-full bg-gray-100 dark:bg-white/5 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full ${
                      activeTab === tab.id
                        ? 'bg-white dark:text-white/90 dark:bg-white/10 text-gray-800'
                        : 'text-gray-500 dark:text-gray-400 bg-transparent'
                    }`}
                  >
                    {tab.icon}
                    <span className="truncate">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}

            <div className="p-6 tab-img-bg overflow-hidden rounded-4xl mt-8">
              <div className="p-3 tab-img-overlay">
                {tabs.map((tab) => (
                  <Fragment key={tab.id}>
                    <Image
                      src={tab.lightImage || '/placeholder.svg'}
                      alt={tab.label}
                      width={936}
                      height={535}
                      className={cn(
                        'w-full rounded-2xl block dark:hidden',
                        currentTab.id !== tab.id && 'hidden!'
                      )}
                      quality={90}
                      priority
                    />

                    <Image
                      src={tab.darkImage || '/placeholder.svg'}
                      alt={tab.label}
                      width={936}
                      height={535}
                      className={cn(
                        'w-full rounded-2xl hidden dark:block',
                        currentTab.id !== tab.id && 'hidden!'
                      )}
                      quality={90}
                      priority
                    />
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 text-center">
              <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90">
                {currentTab.title}
              </h2>
              <p className="max-w-xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">
                {currentTab.description}
              </p>
              <Link href="/#pricing" className="inline-block px-6 py-3 text-sm font-medium text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600">
                Try it now for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
