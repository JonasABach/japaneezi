import { Link } from 'react-router-dom'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Services</h2>
            <p className="text-gray-600 mb-4">
              Meg Sensei provides online Japanese language tutoring services. All lessons are 
              conducted via Google Meet at scheduled times agreed upon 
              by both the tutor and student.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Booking & Payment</h2>
            <p className="text-gray-600 mb-4">
              Payment is required at the time of booking. Accepted payment methods include 
              credit/debit cards processed through our secure payment system. All prices are 
              listed in USD.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Payment Methods</h2>
            <p className="text-gray-600 mb-4">
              We accept credit cards (via Stripe), PayPal, and other methods as listed on the 
              checkout page.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Additional Fees</h2>
            <p className="text-gray-600 mb-4">
              Customers are responsible for any transaction fees, such as bank transfer charges, 
              if applicable.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Lesson Packages</h2>
            <p className="text-gray-600 mb-4">
              Lesson packages (3-lesson pack, 5-lesson pack, etc.) are valid for 3 months 
              from the date of purchase. Unused lessons after this period will expire and 
              are non-refundable.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Cancellation & Rescheduling</h2>
            <p className="text-gray-600 mb-4">
              Lessons can be rescheduled or cancelled up to 24 hours before the scheduled time. 
              Late cancellations or no-shows will be fully charged. For complete details, please 
              review our{' '}
              <Link to="/cancellation-policy" className="text-sakura-600 hover:text-sakura-700">
                Cancellation Policy
              </Link>.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Student Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              Students are expected to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Arrive on time for scheduled lessons</li>
              <li>Have a stable internet connection and working audio/video equipment</li>
              <li>Provide at least 24 hours notice for cancellations or rescheduling</li>
              <li>Treat the tutor with respect and professionalism</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All lesson materials, worksheets, and resources provided during lessons are for 
              personal use only and may not be redistributed or shared without permission.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Meg Sensei is not liable for any technical issues on the student's end that may 
              affect lesson quality, including but not limited to internet connectivity problems 
              or equipment failures.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these terms at any time. Changes will be posted 
              on this page with an updated revision date.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Contact</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please{' '}
              <Link to="/contact" className="text-sakura-600 hover:text-sakura-700">
                contact us
              </Link>.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              to="/"
              className="text-sakura-600 hover:text-sakura-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
