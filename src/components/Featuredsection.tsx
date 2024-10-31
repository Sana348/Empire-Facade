'use client';

import Link from "next/link";
import Image from "next/image";
import portfolioData from "../data/portfolio_sections.json";

interface PortfolioSection {
    id: number;
    title: string;
    slug: string;
    description: string;
    isFeatured: boolean;
    mainImage: string;
    images: string[];
}

function FeaturedSection() {
    const featuredSections = portfolioData.portfolioSections.filter((section: PortfolioSection) => section.isFeatured);

    return (
        <div className="py-12 bg-gray-900">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED PORTFOLIO</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore Our Portfolio</p>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredSections.map((section: PortfolioSection) => (
                        <div key={section.id} className="flex flex-col justify-center bg-white dark:bg-zinc-900 rounded-lg overflow-hidden max-w-sm shadow-lg">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <Image
                                    src={section.mainImage}
                                    alt={`${section.title} main image`}
                                    width={300}
                                    height={180}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{section.title}</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{section.description}</p>
                                <div className="text-center mt-2">
                                    <Link href={`/portfolio/${section.slug}`} className="text-teal-500 hover:text-teal-600 transition duration-200">
                                        View Details
                                    </Link>
                                </div>
                            </div>

                            {/* Display additional images in a grid */}
                            <div className="px-4 py-2 bg-gray-100 dark:bg-neutral-800 rounded-b-lg">
                                <div className="grid grid-cols-2 gap-2">
                                    {section.images.slice(0, 6).map((img, imgIndex) => (
                                        <Image
                                            key={imgIndex}
                                            src={img}
                                            alt={`${section.title} image ${imgIndex + 1}`}
                                            width={150} // Ensures all images are of the same width
                                            height={150} // Set height to be consistent with the width
                                            className="rounded-md object-cover h-32 w-full" // Make all images square
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default FeaturedSection;
