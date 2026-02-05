import { ArrowRight, Award, BookOpen, CheckCircle, ChevronLeft, ChevronRight, Clock, Star, Users } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import profileImage from '../assets/profile.jpg'

const Home = () => {
    const features = [
        {
            icon: <Users className="h-8 w-8 text-sakura-600" />,
            title: 'Communication-Focused',
            description: 'Real-life conversational skills are the key focus. We\'ll use authentic dialogues to build your confidence in engaging with others.',
        },
        {
            icon: <BookOpen className="h-8 w-8 text-sakura-600" />,
            title: 'I Understand Your Struggles',
            description: 'As someone learning Spanish, Korean, and Norwegian, I know exactly how challenging self-teaching can be. I\'m here to make you feel confident!',
        },
        {
            icon: <Clock className="h-8 w-8 text-sakura-600" />,
            title: 'Experienced Teacher',
            description: 'With years of experience teaching students worldwide, I move beyond textbooks to teach you the Japanese actually spoken in Japan today.',
        },
        {
            icon: <Award className="h-8 w-8 text-sakura-600" />,
            title: 'All Levels Welcome',
            description: 'From complete beginners starting from scratch to advanced learners preparing for JLPT—I cater to students of all ages and skill levels.',
        },
    ]

    const testimonials = [
        {
            name: 'Aaron',
            content: 'Megumi San is awesome. She has such a pleasant personality and she makes you feel instantly at ease and comfortable. I sense she genuinely cares for my learning journey and gives her best to help me attain my goals. Stop wondering if you should set up a trial session with her. Just do it. You won\'t regret it.',
            rating: 5,
        },
        {
            name: 'Patrick',
            content: 'Megumi is a friendly and fun tutor to talk with. She is very knowledgeable about language and language acquisition and while our conversations ramble all over she gently corrects me as needed and documents it all in a shared document that I can review later.',
            rating: 5,
        },
        {
            name: 'Annissa',
            content: 'Love Meg and how she goes slow with me and waits until I fully understand!',
            rating: 5,
        },
        {
            name: 'Anthony',
            content: 'I was impressed during the trial lesson with the preparation of her lesson planning and following into weekly lessons she is amazing to work with. She has many of the traits of a great teacher, consistent checks for education, practical lessons and comprehensive break down of the how\'s and why\'s of structure, easy and effective communication, and both patience and appropriate pacing, I highly recommend her.',
            rating: 5,
        },
        {
            name: 'Mads',
            content: 'Great teacher, very patient, always makes sure you\'re understanding everything and explains everything thoroughly. Highly recommended.',
            rating: 5,
        },
        {
            name: 'Brandon',
            content: 'Megumi-sensei is very patient, communicates clearly, and is very fun to learn with. I am glad I decided to reach out for lessons from her, and I highly recommend others do so as well.',
            rating: 5,
        },
        {
            name: 'Andrew',
            content: 'Megumi is great to work with. She\'s always friendly, patient, and well prepared. She was able to adapt quickly to where I was at with my Japanese ability prior to starting lessons with her and we have been building on it since. We always have fun with our conversation practice and I highly recommend Megumi as a teacher for all skill levels.',
            rating: 5,
        },
        {
            name: 'Sharif',
            content: 'Meg is a great teacher. She really takes her time and helps you understand the content. Best tutor I\'ve had.',
            rating: 5,
        },
        {
            name: 'Matthew',
            content: 'After a trial session with Megumi I signed up right away for weekly lessons. She\'s a great teacher, always friendly and supportive. I feel that she\'s really helping me understand how the Japanese language works, as well as getting me started with useful phrases – and she tailors the material very well around my level.',
            rating: 5,
        },
        {
            name: 'Nancy',
            content: 'Megumi is an outstanding Japanese tutor! Her lessons are well-structured, engaging, and personalized. She is very kind and friendly personality :) I take Beginner-Intermediate conversational practice and it has been very effective! Her English is also perfect, if that is something you also look for. Highly recommended!',
            rating: 5,
        },
        {
            name: 'Mike',
            content: 'After a few lessons with Meg-san, I can say confidently that she is really easy to talk to, expressing ideas, and challenges you to learn Japanese with topics, speech practice, and lessons depending on your preference. I recommend her!',
            rating: 5,
        },
        {
            name: 'Parker',
            content: 'Megumi is a very patient and interesting tutor. She can speak English like a native and will prepare tailored materials specifically for different students. She is also enthusiastic and optimistic in communication. It\'s great to have class with Megumi.',
            rating: 5,
        },
        {
            name: 'Kristofor',
            content: 'Meg-sensei is an exceptional Japanese teacher. Her thorough preparation, clear explanations, and focus on conversational skills make her classes highly effective. She effortlessly combines practicality with depth, creating a supportive environment for learning. Her English is a HUGE plus, as it\'s basically perfect! I highly recommend Meg-sensei to anyone eager to master Japanese with confidence.',
            rating: 5,
        },
        {
            name: 'Addison',
            content: 'Meg was great! She\'s patient, prepared, and very responsive to the learning style that works for me. I ended our session feeling very optimistic of what I could learn.',
            rating: 5,
        },
        {
            name: 'Sofia',
            content: 'I\'ve tried several Japanese tutors before, but Megumi stands out. She has a gift for breaking down complex grammar into simple, memorable explanations. Every lesson feels productive and enjoyable. My confidence in speaking has grown so much in just a few months!',
            rating: 5,
        },
    ]

    const [currentPage, setCurrentPage] = useState(0)
    const reviewsPerPage = 3
    const totalPages = Math.ceil(testimonials.length / reviewsPerPage)

    const nextReviews = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
    }

    const prevReviews = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    }

    const currentReviews = testimonials.slice(
        currentPage * reviewsPerPage,
        currentPage * reviewsPerPage + reviewsPerPage
    )

    return (
        <div>
            <section className="bg-gradient-to-br from-sakura-50 via-white to-pink-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'DM Serif Display, serif' }}>
                                Let's Master Japanese
                                <br />
                                <span className="text-sakura-600">with Meg Sensei</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                                Master authentic Japanese with a native speaker who makes the complex feel simple.
                                From your first conversation to advanced fluency, personalized coaching you need to speak with confidence and precision.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link
                                    to="/booking"
                                    className="bg-sakura-600 text-white px-8 py-3 rounded-lg hover:bg-sakura-700 transition-colors font-medium inline-flex items-center justify-center"
                                >
                                    Book Trial
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    to="/study-plans"
                                    className="border-2 border-sakura-600 text-sakura-600 px-8 py-3 rounded-lg hover:bg-sakura-50 transition-colors font-medium"
                                >
                                    View Courses
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img 
                                src={profileImage} 
                                alt="Meg Sensei" 
                                className="w-80 h-80 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-sakura-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Learn With Me?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Experience the most effective way to learn Japanese with personalized lessons
                            designed around your goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-white transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Preview */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Choose Your Plan
                        </h2>
                        <p className="text-gray-600">Select the lesson bundle that matches your learning goals.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Single Lesson */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Single Lesson</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-gray-900">$40</span>
                                <span className="text-gray-600">/lesson</span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    50-minute session
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Flexible scheduling
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Custom materials
                                </li>
                            </ul>
                            <Link
                                to="/booking"
                                className="block text-center border-2 border-sakura-600 text-sakura-600 px-6 py-2 rounded-lg hover:bg-sakura-50 transition-colors font-medium"
                            >
                                Book Now
                            </Link>
                        </div>

                        {/* Package */}
                        <div className="bg-sakura-600 rounded-xl p-8 shadow-lg transform scale-105">
                            <div className="text-sakura-100 text-sm font-medium mb-2">MOST POPULAR</div>
                            <h3 className="text-xl font-semibold text-white mb-2">3-Lesson Pack</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-white">$110</span>
                                <span className="text-sakura-200">/3 lessons</span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center text-sakura-100">
                                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                                    Save $10 total
                                </li>
                                <li className="flex items-center text-sakura-100">
                                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                                    50-minute session
                                </li>
                                <li className="flex items-center text-sakura-100">
                                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                                    Flexible scheduling
                                </li>
                                <li className="flex items-center text-sakura-100">
                                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                                    Custom materials
                                </li>
                                <li className="flex items-center text-sakura-100">
                                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                                    Homework support
                                </li>
                                <li className="flex items-center text-sakura-100">
                                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                                    Progress tracking
                                </li>
                            </ul>
                            <Link
                                to="/booking"
                                className="block text-center bg-white text-sakura-600 px-6 py-2 rounded-lg hover:bg-sakura-50 transition-colors font-medium"
                            >
                                Purchase Package
                            </Link>
                        </div>

                        {/* Monthly */}
                        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Lesson Pack</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-gray-900">$175</span>
                                <span className="text-gray-600">/5 lessons</span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Save $25 total
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    50-minute session
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Flexible scheduling
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Custom materials
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Homework support
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    Progress tracking
                                </li>
                            </ul>
                            <Link
                                to="/booking"
                                className="block text-center border-2 border-sakura-600 text-sakura-600 px-6 py-2 rounded-lg hover:bg-sakura-50 transition-colors font-medium"
                            >
                                Purchase Package
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-sakura-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Kind Words from My Students
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hear directly from those who are mastering Japanese with me.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevReviews}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-sakura-50 transition-colors border border-gray-200 hidden md:block"
                            aria-label="Previous reviews"
                        >
                            <ChevronLeft className="h-6 w-6 text-sakura-600" />
                        </button>

                        {/* Review Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
                            {currentReviews.map((testimonial, index) => (
                                <div
                                    key={currentPage * reviewsPerPage + index}
                                    className="bg-gray-50 rounded-xl p-6 flex flex-col"
                                >
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-4 italic text-sm flex-grow">
                                        "{testimonial.content}"
                                    </p>
                                    <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={nextReviews}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-sakura-50 transition-colors border border-gray-200 hidden md:block"
                            aria-label="Next reviews"
                        >
                            <ChevronRight className="h-6 w-6 text-sakura-600" />
                        </button>
                    </div>

                    {/* Mobile navigation buttons */}
                    <div className="flex justify-center gap-4 mt-6 md:hidden">
                        <button
                            onClick={prevReviews}
                            className="bg-white shadow-lg rounded-full p-2 hover:bg-sakura-50 transition-colors border border-gray-200"
                            aria-label="Previous reviews"
                        >
                            <ChevronLeft className="h-6 w-6 text-sakura-600" />
                        </button>
                        <button
                            onClick={nextReviews}
                            className="bg-white shadow-lg rounded-full p-2 hover:bg-sakura-50 transition-colors border border-gray-200"
                            aria-label="Next reviews"
                        >
                            <ChevronRight className="h-6 w-6 text-sakura-600" />
                        </button>
                    </div>

                    {/* Page indicator dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentPage ? 'bg-sakura-600' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-sakura-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-sakura-100 mb-8 text-lg">
                        Book your 30 minutes consultation and let's discuss how I can help you achieve your<br />
                        Japanese goals.

                    </p>
                    <Link
                        to="/booking"
                        className="bg-white text-sakura-600 px-8 py-3 rounded-lg hover:bg-sakura-50 transition-colors font-medium inline-flex items-center"
                    >
                        Book Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home
