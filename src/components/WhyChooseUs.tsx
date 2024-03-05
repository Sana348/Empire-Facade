"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const fitnessWellContent = [
    {
        title: 'Personalized Fitness Journey',
        description:
            'Embark on a fitness journey tailored to your unique needs and goals. Our personalized approach ensures that every aspect of your fitness plan is designed to maximize results and promote overall well-being.',
    },
    {
        title: 'Expert Guidance and Support',
        description:
            'Receive guidance from certified fitness professionals who are dedicated to helping you achieve your fitness goals. Our team provides ongoing support and motivation to keep you on track and motivated throughout your journey.',
    },
    {
        title: 'Interactive Workouts for Real-time Feedback',
        description:
            'Engage in interactive workouts where feedback is immediate, allowing you to make real-time adjustments and improvements. This interactive approach enhances your understanding of fitness concepts and ensures efficient progress.',
    },
    {
        title: 'Cutting-Edge Fitness Programs',
        description:
            'Our fitness programs are developed based on the latest industry research and trends, ensuring that you have access to the most effective and innovative workout routines. Stay ahead of the curve with our cutting-edge fitness curriculum.',
    },
    {
        title: 'Flexible Learning Options',
        description:
            'Choose from a variety of flexible learning options, including live classes, on-demand workouts, and personalized training sessions. Our platform offers limitless opportunities for learning and growth, allowing you to customize your fitness journey to fit your schedule and preferences.',
    },
    {
        title: 'Community Support and Accountability',
        description:
            'Join a supportive community of like-minded individuals who share your passion for fitness and wellness. Our community provides encouragement, accountability, and inspiration to help you stay motivated and committed to your fitness goals.',
    },
];

function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={fitnessWellContent} />
        </div>
    )
}

export default WhyChooseUs;
