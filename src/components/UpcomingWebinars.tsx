'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Healthy Eating Habits',
      description:
        'Discover the importance of nutrition and learn how to cultivate healthy eating habits for a balanced lifestyle.',
      slug: 'healthy-eating-habits',
      isFeatured: true,
    },
    {
      title: 'Mindful Meditation Workshop',
      description:
        'Explore the benefits of mindfulness and meditation for mental well-being and stress relief.',
      slug: 'mindful-meditation-workshop',
      isFeatured: true,
    },
    {
      title: 'Fitness Challenges for Beginners',
      description:
        'Join our fitness challenges designed for beginners to kickstart your fitness journey and achieve your goals.',
      slug: 'fitness-challenges-for-beginners',
      isFeatured: true,
    },
    {
      title: 'Advanced Strength Training Techniques',
      description:
        'Take your strength training to the next level with advanced techniques and strategies for muscle growth and development.',
      slug: 'advanced-strength-training-techniques',
      isFeatured: true,
    },
    {
      title: 'Nutrition for Weight Management',
      description:
        'Learn how to manage your weight effectively through proper nutrition and dietary habits.',
      slug: 'nutrition-for-weight-management',
      isFeatured: true,
    },
    {
      title: 'Yoga for Stress Relief',
      description:
        'Relieve stress and tension with gentle yoga practices aimed at calming the mind and relaxing the body.',
      slug: 'yoga-for-stress-relief',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Wellness Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/webinars"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars;
