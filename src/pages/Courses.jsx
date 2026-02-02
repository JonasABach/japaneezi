import { Award, BookOpen, CheckCircle, MessageCircle, Users } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      id: 'beginner',
      title: 'Beginner Japanese',
      level: 'N5-N4',
      description: 'Perfect for those starting their Japanese journey. Learn hiragana, katakana, basic kanji, and essential grammar.',
      icon: <BookOpen className="h-8 w-8 text-sakura-600" />,
      features: [
        'Hiragana & Katakana mastery',
        'Basic kanji (100+ characters)',
        'Essential grammar patterns',
        'Everyday vocabulary',
        'Self-introduction & basic conversations',
      ],
    },
    {
      id: 'intermediate',
      title: 'Intermediate Japanese',
      level: 'N3',
      description: 'Build on your foundation with more complex grammar, expanded vocabulary, and reading practice.',
      icon: <MessageCircle className="h-8 w-8 text-sakura-600" />,
      features: [
        'Intermediate kanji (300+ characters)',
        'Complex sentence structures',
        'Reading comprehension',
        'Listening practice with native materials',
        'Writing practice',
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Japanese',
      level: 'N2-N1',
      description: 'Master advanced grammar, nuanced expressions, and prepare for professional-level Japanese.',
      icon: <Award className="h-8 w-8 text-sakura-600" />,
      features: [
        'Advanced kanji & vocabulary',
        'Nuanced grammar expressions',
        'News & academic reading',
        'Business Japanese basics',
        'Cultural context & idioms',
      ],
    },
    {
      id: 'conversation',
      title: 'Conversation Practice',
      level: 'All Levels',
      description: 'Focus on speaking and listening with themed conversations and real-world scenarios.',
      icon: <Users className="h-8 w-8 text-sakura-600" />,
      features: [
        'Natural conversation flow',
        'Pronunciation correction',
        'Topic-based discussions',
        'Slang & casual speech',
        'Cultural insights',
      ],
    },
  ]

  const jlptCourses = [
    { level: 'N5', description: 'Basic Japanese', duration: '100 hours' },
    { level: 'N4', description: 'Elementary Japanese', duration: '150 hours' },
    { level: 'N3', description: 'Intermediate Japanese', duration: '250 hours' },
    { level: 'N2', description: 'Pre-advanced Japanese', duration: '400 hours' },
    { level: 'N1', description: 'Advanced Japanese', duration: '600 hours' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sakura-50 via-white to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Japanese Language Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Structured programs designed to take you from beginner to advanced, 
            tailored to your goals and learning style.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-sakura-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How Lessons Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Book', description: 'Choose a time slot that works for you and book your session in just a few clicks.' },
              { step: '2', title: 'Prepare', description: 'Join your first session to evaluate your current level and receive your custom learning roadmap.' },
              { step: '3', title: 'Learn', description: 'Dive into your goals with high-energy, personalized lessons tailored to your specific needs.' },
              { step: '4', title: 'Practice', description: 'Master your skills between sessions with custom homework and interactive study materials.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-sakura-100 text-sakura-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 rounded-xl p-6 hover:border-sakura-300 hover:shadow-lg transition-all bg-white"
              >
                <div className="mb-4">
                  {course.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {course.title}
                  </h3>
                  <span className="inline-block bg-sakura-100 text-sakura-700 text-sm px-3 py-1 rounded-full mt-2">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JLPT Preparation */}
      <section className="py-16 bg-sakura-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              JLPT Preparation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive preparation for the Japanese Language Proficiency Test (JLPT). 
              I'll help you master all sections: vocabulary, grammar, reading, and listening.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {jlptCourses.map((course) => (
              <div
                key={course.level}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow min-w-[200px]"
              >
                <h3 className="text-3xl font-bold text-sakura-600 mb-2">{course.level}</h3>
                <p className="text-gray-900 font-medium">{course.description}</p>
                <p className="text-sm text-gray-500 mt-1">~{course.duration} study time</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
