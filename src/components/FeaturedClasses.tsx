"use client"

import Link from "next/link"
import classesData from "../data/classes_training.json";
import { BackgroundGradient } from "./ui/background-gradient"

interface classes {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    trainer: string,
    isFeatured: boolean,
    image: string
}

function FeaturedClasses() {
    const FeaturedClasses = classesData.classes.filter((classes: classes) => classes.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED CLASSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Discover Your Fitness Journey</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {FeaturedClasses.map((classes: classes) => (
                        <div key={classes.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <img src={classes.image} alt={classes.title} className="w-full h-40 object-cover mb-4" />
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{classes.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{classes.description}</p>
                                    <p className="text-lg font-semibold text-teal-600 mt-4 mb-2">${classes.price}</p>
                                    <Link href={`/classes/${classes.slug}`}>
                                        Learn more
                                        </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/classes"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All Classes
                </Link>
            </div>
        </div>
    )
}

export default FeaturedClasses;
