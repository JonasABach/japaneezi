import { Link } from 'react-router-dom'

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cancellation Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <p className="text-gray-600 mb-6">
              We understand that plans can change. Please review our cancellation and 
              rescheduling policies below.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cancellation Notice</h2>
            <div className="bg-sakura-50 border border-sakura-200 rounded-lg p-4 mb-6">
              <p className="text-gray-700 font-medium">
                Please provide at least <strong>24 hours notice</strong> for any cancellations 
                or rescheduling requests.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">More Than 24 Hours Notice</h2>
            <p className="text-gray-600 mb-4">
              If you cancel or reschedule your lesson more than 24 hours before the scheduled time:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>You may reschedule to another available time at no extra cost</li>
              <li>For single lessons, a full refund can be issued upon request</li>
              <li>For lesson packages, the lesson credit will be returned to your account</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Less Than 24 Hours Notice</h2>
            <p className="text-gray-600 mb-4">
              If you cancel or reschedule with less than 24 hours notice:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>The lesson will be considered used and cannot be refunded</li>
              <li>For lesson packages, the lesson credit will be deducted from your balance</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">No-Shows</h2>
            <p className="text-gray-600 mb-4">
              If you do not attend a scheduled lesson without prior notice:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>The lesson will be marked as completed and cannot be refunded or rescheduled</li>
              <li>The tutor will wait for 10 minutes before the lesson is considered a no-show</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tutor Cancellations</h2>
            <p className="text-gray-600 mb-4">
              In the rare event that the tutor needs to cancel a lesson:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>You will be notified as soon as possible</li>
              <li>The lesson will be rescheduled at your convenience</li>
              <li>Alternatively, a full refund can be provided</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How to Cancel or Reschedule</h2>
            <p className="text-gray-600 mb-4">
              To cancel or reschedule a lesson, please{' '}
              <Link to="/contact" className="text-sakura-600 hover:text-sakura-700">
                contact us
              </Link>{' '}
              with your booking details and preferred new time (if rescheduling).
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Refunds</h2>
            <p className="text-gray-600 mb-4">
              Refunds for eligible cancellations will be processed within 5-10 business days 
              to the original payment method.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Questions?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our cancellation policy, please don't hesitate to{' '}
              <Link to="/contact" className="text-sakura-600 hover:text-sakura-700">
                get in touch
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

export default CancellationPolicy
