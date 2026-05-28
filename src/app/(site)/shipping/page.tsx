import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping & Delivery - Boom Blu',
};

export default function ShippingPage() {
  return (
    <section className="py-28 relative">
      <div className="wrapper">
        <div className="relative max-w-[900px] mx-auto">
          <div className="bg-white dark:bg-dark-primary rounded-[20px] p-8 md:p-14 border border-gray-100 dark:border-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Shipping & Delivery
            </h1>
            
            <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipping Policy</h2>
                <p>
                  At Boom Blu, we're committed to delivering your products quickly and safely. We ship across India with reliable courier partners to ensure your washing liquid arrives in perfect condition.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipping Methods</h2>
                <p>We offer multiple shipping options to suit your needs:</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Standard Shipping</h3>
                    <p className="text-sm">5-7 business days | Free on orders above ₹500</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Express Shipping</h3>
                    <p className="text-sm">2-3 business days | Available for metro cities</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Next Day Delivery</h3>
                    <p className="text-sm">Available in select locations | Order before 2 PM</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Delivery Coverage</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pan-India delivery to all major cities and towns</li>
                  <li>Remote locations may have extended delivery times</li>
                  <li>Doorstep delivery at your specified address</li>
                  <li>Safe packaging to prevent spillage and damage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tracking Your Order</h2>
                <p>
                  Once your order is dispatched, you'll receive a tracking ID via email and SMS. You can track your shipment in real-time on our website or through the courier partner's app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipping Charges</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Orders below ₹500: Flat ₹49 shipping</li>
                  <li>Orders ₹500-₹1500: Free shipping</li>
                  <li>Orders above ₹1500: Free shipping with express delivery</li>
                  <li>Metro cities: Additional next-day delivery option available</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Processing Time</h2>
                <p>
                  Orders are processed within 24-48 hours of confirmation. You'll receive a shipment notification once your order leaves our warehouse.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Happens if Delivery is Delayed?</h2>
                <p>
                  In case of unexpected delays, our customer support team will contact you immediately. For delays beyond 7 business days (standard shipping), you're eligible for a full refund or free express re-shipment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Damaged or Lost Shipments</h2>
                <p>
                  If your package arrives damaged or is lost in transit, contact us immediately with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Order number and tracking ID</li>
                  <li>Photos of the damaged packaging/product</li>
                  <li>Date and time of delivery</li>
                </ul>
                <p className="mt-3">
                  We'll send you a replacement or issue a full refund within 48 hours of receiving your claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bulk Orders & Corporate Delivery</h2>
                <p>
                  For bulk orders (5L+), we offer special bulk shipping rates and flexible delivery schedules. Please{' '}
                  <Link href="/contact" className="text-primary-500 hover:text-primary-600 font-medium">
                    contact us
                  </Link>
                  {' '}for custom quotes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                <p>
                  Have questions about shipping? Feel free to{' '}
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
