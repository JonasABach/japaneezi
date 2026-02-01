import { GraduationCap, Instagram, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-sakura-400" />
              <span className="text-xl font-bold">
                Japaneezi
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Learn Japanese with confidence through personalized, native-speaker-led 
              online lessons. Achieve fluency with tailored programs for all levels.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/japaneezi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sakura-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/study-plans" className="text-gray-400 hover:text-sakura-400 transition-colors">
                  Study Plans
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-sakura-400 transition-colors">
                  Book a Lesson
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-sakura-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-sakura-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-sakura-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cancellation-policy" className="text-gray-400 hover:text-sakura-400 transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/commerce-disclosure" className="text-gray-400 hover:text-sakura-400 transition-colors">
                  Commerce Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Online Lessons Worldwide</span>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-sakura-400 transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Japaneezi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
