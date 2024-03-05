'use client';
import { InfiniteMovingCards } from './ui/Infinite-moving-cards';

const fitnessWellTestimonials = [
    {
      quote:
        'Joining the fitness program transformed my understanding of wellness and helped me to achieve my fitness goals. The trainers are incredibly supportive!',
      name: 'Jessica Smith',
      title: 'Fitness Enthusiast',
    },
    {
      quote:
        "The community and support at this fitness center are unparalleled. I've not only improved my physical health but also found a supportive community to share my fitness journey with.",
      name: 'David Johnson',
      title: 'Fitness Participant',
    },
    {
      quote:
        "This program provided me with the tools and motivation to take my fitness to the next level. I'm grateful for the personalized coaching and encouragement.",
      name: 'Emily Carter',
      title: 'Fitness Trainee',
    },
    {
      quote:
        'As someone new to fitness, finding the right guidance can be challenging, but this program matched me with a trainer who truly understands my needs and challenges.',
      name: 'Michael Brown',
      title: 'Fitness Beginner',
    },
    {
      quote:
        'The workout sessions here have not only improved my physical strength but also boosted my confidence. Highly recommend for anyone looking to enhance their fitness journey!',
      name: 'Sophia Evans',
      title: 'Fitness Enthusiast',
    },
  ];

function FitnessWellTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Success Stories: Voices of Achievement</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={fitnessWellTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default FitnessWellTestimonials;
