import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Boom Blu',
};

export default function TermsPage() {
  return (
    <section className="py-28 relative">
      <div className="wrapper">
        <div className="relative max-w-[900px] mx-auto">
          <div className="bg-white dark:bg-dark-primary rounded-[20px] p-8 md:p-14 border border-gray-100 dark:border-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Terms of Service
            </h1>
            
            <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                <p>
                  Welcome to Boom Blu. These Terms of Service govern your use of our website and purchase of our products. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Product Information</h2>
                <p>
                  Boom Blu washing liquid is a premium laundry care product designed for families. All product descriptions, pricing, and availability are subject to change without notice.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Available sizes: 250ml, 500ml, 1L, and bulk orders</li>
                  <li>Safe for all fabric types including delicates</li>
                  <li>Suitable for both machine and hand washing</li>
                  <li>Made with eco-friendly, biodegradable formula</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Ordering and Purchase</h2>
                <p>
                  All orders are subject to acceptance by Boom Blu. We reserve the right to refuse or cancel any order. Prices are in Indian Rupees (₹) and may change without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Payment</h2>
                <p>
                  Payment must be received before order processing. We accept various payment methods as displayed during checkout. All payments are secure and processed through authorized payment gateways.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. User Responsibilities</h2>
                <p>
                  You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Harassing or causing distress or inconvenience to any person</li>
                  <li>Obscene or offensive language or content</li>
                  <li>Disruption of normal flow of dialogue within this website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
                <p>
                  Boom Blu will not be liable for any damages caused by use of our products if used contrary to instructions or for purposes other than intended. This includes but is not limited to indirect, incidental, special, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Intellectual Property</h2>
                <p>
                  All content, designs, logos, and product names are the property of Boom Blu or its content suppliers. Unauthorized use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Changes to Terms</h2>
                <p>
                  Boom Blu reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please{' '}
                  <Link href="/contact" className="text-primary-500 hover:text-primary-600 font-medium">
                    contact us
                  </Link>
                  .
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: May 28, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
