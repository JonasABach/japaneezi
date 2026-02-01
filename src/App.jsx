import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Booking from './pages/Booking'
import CancellationPolicy from './pages/CancellationPolicy'
import CommerceDisclosure from './pages/CommerceDisclosure'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Home from './pages/Home'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-plans" element={<Courses />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/commerce-disclosure" element={<CommerceDisclosure />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
