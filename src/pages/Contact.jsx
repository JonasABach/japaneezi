import { CheckCircle, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, send this to your backend/email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const faqs = [
    {
      question: 'Which platform do we use for lessons?',
      answer: 'I use Google Meet for all sessions. You\'ll receive a dedicated meeting link via email before each lesson.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: null, // Custom JSX rendered below
    },
    {
      question: 'Do you provide learning materials?',
      answer: 'Absolutely! I provide customized digital materials tailored specifically to your level. If you already have a textbook or specific material you\'d like to focus on, just let me know—I\'m happy to tailor our curriculum to what works best for you.',
    },
    {
      question: 'How should I prepare for my first lesson?',
      answer: 'Just bring your curiosity! I recommend having a notebook and pen ready. Most importantly, think about your "Why"—your specific goals for learning Japanese so we can start building your roadmap right away.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sakura-50 via-white to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about lessons?
            I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-sakura-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sakura-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sakura-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sakura-500"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="lessons">About Lessons</option>
                      <option value="pricing">Pricing & Packages</option>
                      <option value="technical">Technical Issues</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sakura-500"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-sakura-600 text-white py-3 rounded-lg hover:bg-sakura-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & FAQs */}
            <div>
              {/* Response Time Info */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Response Time
                </h3>
                <div className="flex items-start text-gray-600">
                  <MessageSquare className="h-5 w-5 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Usually within 24 hours</p>
                    <p className="text-sm">I'll get back to you as soon as possible!</p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h4 className="font-medium text-gray-900 mb-1">
                        {faq.question}
                      </h4>
                      {faq.answer ? (
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      ) : (
                        <p className="text-gray-600 text-sm">
                          I value our time together! You can reschedule or cancel lessons up to 24 hours in advance. Cancellations made within 24 hours of the lesson or "no-shows" without notification will be fully charged. You can find more specifics in my{' '}
                          <Link to="/cancellation-policy" className="text-sakura-600 hover:text-sakura-700 underline">Full Cancellation Policy</Link>.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
