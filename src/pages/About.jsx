import { BookOpen, Globe, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import portraitImage from '../assets/portrait.jpeg'

const About = () => {
    const qualifications = [
        'Native Japanese speaker',
        'Bachelor\'s degree in Japanese Language Education',
        '5+ years teaching experience',
        'JLPT exam preparation specialist',
        'Certified Japanese Language Teacher',
    ]

    const values = [
        {
            icon: <Heart className="h-8 w-8 text-sakura-600" />,
            title: 'Passion for Teaching',
            description: 'I believe everyone can learn Japanese with the right guidance and support.',
        },
        {
            icon: <BookOpen className="h-8 w-8 text-sakura-600" />,
            title: 'Personalized Approach',
            description: 'Every student is unique. I tailor my lessons to match your learning style and goals.',
        },
        {
            icon: <Globe className="h-8 w-8 text-sakura-600" />,
            title: 'Cultural Immersion',
            description: 'Language and culture go hand in hand. Learn not just words, but the heart of Japan.',
        },
    ]

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-sakura-50 via-white to-pink-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Meet your teacher: Meg sensei 🌸
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                I'm your Japanese language teacher, passionate about helping students
                                achieve their language goals through personalized, engaging lessons.
                            </p>
                            <Link
                                to="/booking"
                                className="inline-block bg-sakura-600 text-white px-8 py-3 rounded-lg hover:bg-sakura-700 transition-colors font-medium"
                            >
                                Book Trial
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-64 h-64 rounded-full shadow-lg overflow-hidden">
                                <img
                                    src={portraitImage}
                                    alt="Meg Sensei"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: 'center 10%', transform: 'translateX(-5px) scale(1.1)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Story */}
            <section className="py-16 bg-sakura-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Story</h2>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p className="mb-4">
                            Hi, I'm Meg! 🌸 Growing up in Tokyo, Japan, I always felt the beauty of my native tongue, but it wasn't until I left home that I truly understood its power. Living in the United States, Spain, and the Netherlands was a whirlwind. It showed me that language is so much more than vocabulary; it's a mirror of how we see the world.
                        </p>
                        <p className="mb-4">
                            But I'll be honest: the journey wasn't always easy. While studying five different languages myself, I've hit that same "wall" you might be facing right now. I know the exact frustration of self-studying a language like Japanese that feels so uniquely different from your own. I've felt that exhaustion when textbooks stop making sense and "fluency" feels like a distant dream.
                        </p>
                        <p className="mb-4">
                            That's why I'm so passionate about being a teacher. I've spent years as a instructor helping hundreds of students break through that "self-study plateau" by turning intimidating Japanese concepts into logical, friendly steps. My goal is to show you the cultural soul behind the words so you can speak with your true heart, not just a dictionary.
                        </p>
                        <p>
                            Whether you're just starting your foundation or preparing for the high stakes of the JLPT, I want to be the support I wish I had when I was in your shoes. You don't have to decode this beautiful, complex language alone. Let's find your voice in Japanese, together!
                        </p>
                    </div>
                </div>
            </section>

            {/* Teaching Philosophy */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        My Teaching Philosophy
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-xl">
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-sakura-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-sakura-100 mb-8">
                        Book a trial lesson and let's discuss your Japanese learning goals.
                    </p>
                    <Link
                        to="/booking"
                        className="bg-white text-sakura-600 px-8 py-3 rounded-lg hover:bg-sakura-50 transition-colors font-medium inline-block"
                    >
                        Book Trial
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About
