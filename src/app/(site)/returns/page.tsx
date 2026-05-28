import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Returns & Cancellations - Boom Blu',
};

export default function ReturnsPage() {
  return (
    <section className="py-28 relative">
      <div className="wrapper">
        <div className="relative max-w-[900px] mx-auto">
          <div className="bg-white dark:bg-dark-primary rounded-[20px] p-8 md:p-14 border border-gray-100 dark:border-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Returns & Cancellations Policy
            </h1>
            
            <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Return Policy</h2>
                <p>
                  We stand behind the quality of Boom Blu washing liquid. If you're not completely satisfied, we offer hassle-free returns within 30 days of purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Eligibility for Returns</h2>
                <p>Products are eligible for return if:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The product is unused and in original sealed packaging</li>
                  <li>The return is initiated within 30 days of delivery</li>
                  <li>The product is not damaged due to misuse or mishandling</li>
                  <li>All original packaging and documentation are intact</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Return Process</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Contact our customer support team with your order details</li>
                  <li>Receive a return authorization and return label</li>
                  <li>Ship the product back to us in its original packaging</li>
                  <li>We'll inspect and process your return within 5-7 business days</li>
                  <li>Refund will be issued to your original payment method</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Non-Returnable Items</h2>
                <p>The following items cannot be returned:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Opened or used products</li>
                  <li>Products damaged due to customer mishandling</li>
                  <li>Items without original packaging</li>
                  <li>Products returned after 30 days</li>
                  <li>Discounted or clearance items</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Defective Products</h2>
                <p>
                  If you receive a defective product, please contact us immediately with photos of the damage. We'll replace the product or issue a full refund at no cost to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Order Cancellation</h2>
                <p>
                  You can cancel your order within 24 hours of placing it for a full refund. After this period, the order enters the fulfillment process and cannot be cancelled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Refund Timeline</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Items inspection: 5-7 business days</li>
                  <li>Refund processing: 5-10 business days after approval</li>
                  <li>Bank processing time: 2-5 business days (varies by bank)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipping Costs</h2>
                <p>
                  Original shipping charges are non-refundable. For defective or damaged items, we'll cover the return shipping costs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                <p>
                  For any returns or cancellation queries, please{' '}
                  <Link href="/contact" className="text-primary-500 hover:text-primary-600 font-medium">
                    contact our support team
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
