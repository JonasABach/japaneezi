import { CheckCircle, Clock, CreditCard, ExternalLink, Star } from 'lucide-react'
import { useEffect } from 'react'

const Booking = () => {
  // ===========================================
  // SETUP INSTRUCTIONS - REPLACE THESE VALUES:
  // ===========================================
  
  // 1. Replace with your Calendly username (e.g., 'meg-sensei')
  const CALENDLY_USERNAME = 'YOUR_CALENDLY_USERNAME'
  
  // 2. Replace with your Stripe Payment Links (create at stripe.com/payments/payment-links)
  const STRIPE_LINKS = {
    trial: 'https://buy.stripe.com/YOUR_TRIAL_LINK',      // $25 Trial Lesson
    single: 'https://buy.stripe.com/YOUR_SINGLE_LINK',    // $40 Single Lesson  
    pack3: 'https://buy.stripe.com/YOUR_3PACK_LINK',      // $110 3-Lesson Pack
    pack5: 'https://buy.stripe.com/YOUR_5PACK_LINK',      // $175 5-Lesson Pack
  }
  // ===========================================

  const singleLessons = [
    { 
      id: 'trial',
      name: 'Trial Lesson', 
      price: '$25', 
      duration: '30 min',
      description: 'Perfect for getting to know each other and discussing your goals',
      stripeLink: STRIPE_LINKS.trial,
    },
    { 
      id: 'single',
      name: 'Single Lesson', 
      price: '$40', 
      duration: '50 min',
      description: 'One-on-one personalized Japanese lesson',
      stripeLink: STRIPE_LINKS.single,
    },
  ]

  const lessonPacks = [
    { 
      id: 'pack3',
      name: '3-Lesson Pack', 
      price: '$110', 
      pricePerLesson: '$36.67/lesson',
      duration: '3 x 50 min',
      description: 'Save $10 with a 3-lesson bundle',
      stripeLink: STRIPE_LINKS.pack3,
      popular: true
    },
    { 
      id: 'pack5',
      name: '5-Lesson Pack', 
      price: '$175', 
      pricePerLesson: '$35/lesson',
      duration: '5 x 50 min',
      description: 'Save $25 with a 5-lesson bundle',
      stripeLink: STRIPE_LINKS.pack5,
    },
  ]

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sakura-50 via-white to-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Lesson
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a time that works for you. All lessons include a Google Meet link 
            and personalized materials.
          </p>
        </div>
      </section>

      {/* Single Lessons - Book & Pay */}
      <section className="py-12 bg-sakura-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Single Lessons
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Pay securely, then choose your preferred time
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {singleLessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="bg-gray-50 rounded-xl p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {lesson.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{lesson.price}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{lesson.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {lesson.description}
                </p>
                <a
                  href={lesson.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-sakura-600 text-white py-3 rounded-lg hover:bg-sakura-700 transition-colors font-medium text-center flex items-center justify-center gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  Pay & Book
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Packs - Best Value */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Lesson Packs
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Save more with bundled lessons • Pay once, book anytime
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessonPacks.map((pack) => (
              <div 
                key={pack.id} 
                className={`rounded-xl p-6 flex flex-col ${
                  pack.popular 
                    ? 'bg-sakura-600 text-white ring-2 ring-sakura-600 ring-offset-2' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {pack.popular && (
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <h3 className={`text-lg font-semibold mb-2 ${pack.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pack.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-3xl font-bold ${pack.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pack.price}
                  </span>
                </div>
                <p className={`text-sm mb-2 ${pack.popular ? 'text-sakura-200' : 'text-green-600 font-medium'}`}>
                  {pack.pricePerLesson}
                </p>
                <div className={`flex items-center gap-2 mb-3 ${pack.popular ? 'text-sakura-100' : 'text-gray-500'}`}>
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{pack.duration}</span>
                </div>
                <p className={`text-sm mb-4 flex-grow ${pack.popular ? 'text-sakura-100' : 'text-gray-600'}`}>
                  {pack.description}
                </p>
                <a
                  href={pack.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg transition-colors font-medium text-center flex items-center justify-center gap-2 ${
                    pack.popular 
                      ? 'bg-white text-sakura-600 hover:bg-sakura-50' 
                      : 'bg-sakura-600 text-white hover:bg-sakura-700'
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  Purchase Pack
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <strong>How packs work:</strong> After purchase, you'll receive an email with a private booking link 
              to schedule your lessons at your convenience. Pack lessons are valid for 3 months.
            </p>
          </div>
        </div>
      </section>

      {/* Already have a pack? */}
      <section className="py-8 bg-sakura-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Already purchased a lesson pack?{' '}
            <a 
              href={`https://calendly.com/${CALENDLY_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sakura-600 hover:text-sakura-700 font-medium inline-flex items-center gap-1"
            >
              Book your lesson here
              <ExternalLink className="h-4 w-4" />
            </a>
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Personalized lesson materials',
              'Google Meet video link',
              'Lesson notes & homework',
              'Email support between lessons',
              'Flexible rescheduling (24hr notice)',
              'Progress tracking',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup reminder - remove once configured */}
      {(CALENDLY_USERNAME === 'YOUR_CALENDLY_USERNAME' || STRIPE_LINKS.trial.includes('YOUR_')) && (
        <div className="fixed bottom-4 right-4 max-w-sm p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-lg">
          <p className="text-yellow-800 text-sm">
            <strong>Setup Required:</strong> Open Booking.jsx and replace the placeholder values at the top of the file with your actual Calendly username and Stripe payment links.
          </p>
        </div>
      )}
    </div>
  )
}

export default Booking