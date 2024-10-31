'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const highlights = [
    {
        quote:
            'Detailed technical drawings showcasing the accuracy and precision in our aluminum fabrication projects.',
        name: 'Technical Drawings',
        title: 'Engineering Precision',
    },
    {
        quote:
            "Structure glazing solutions that combine aesthetic appeal with robust durability, tailored for modern facades.",
        name: 'Structure Glazing',
        title: 'Architectural Innovation',
    },
    {
        quote:
            'Modular kitchen installations that maximize space and functionality, ideal for contemporary living environments.',
        name: 'Modular Kitchen',
        title: 'Interior Craftsmanship',
    },
    {
        quote:
            'Custom bathroom designs with high-quality aluminum and glass work, emphasizing both style and utility.',
        name: 'Bathroom Installations',
        title: 'Interior Solutions',
    },
    {
        quote:
            'Precision partition designs and patch fittings, designed for seamless integration within any space.',
        name: 'Partition & Patch Fittings',
        title: 'Space Optimization',
    },
    {
        quote:
            'Spider fittings that provide sturdy, minimalistic support for glass facades, enhancing the architectural design.',
        name: 'Spider Fittings',
        title: 'Structural Solutions',
    },
    {
        quote:
            'Durable fire door designs ensuring safety while maintaining a modern aesthetic.',
        name: 'Fire Doors',
        title: 'Safety & Style',
    },
    {
        quote:
            'Innovative porch designs that offer an inviting entrance and a lasting impression for any property.',
        name: 'Porch Designs',
        title: 'Welcoming Entrances',
    },
];

function Highlights() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-4xl font-extrabold text-center mb-10 z-10 text-neutral-100">
                Discover Our Expertise in Aluminum Fabrication
            </h2>
            <div className="flex justify-center w-full overflow-hidden px-6 sm:px-8 lg:px-10">
                <div className="w-full max-w-5xl">
                    <InfiniteMovingCards
                        items={highlights}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default Highlights;
