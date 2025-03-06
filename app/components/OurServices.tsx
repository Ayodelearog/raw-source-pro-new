"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface serviceItemsProps {
	id: number;
	title: string;
	image: string;
	link: string;
}

const serviceItems = [
	{
		id: 1,
		title: "CUSTOM MATERIAL SOURCING",
		image: "/cement.jpeg",
		link: "/services/custom-material-sourcing",
	},
	{
		id: 2,
		title: "LOGISTICS & DELIVERY",
		image: "/logistics-delivery.jpeg",
		link: "/services/logistics-delivery",
	},
	{
		id: 3,
		title: "CONSULTANT & SUPPORT",
		image: "/consultant-support.jpeg",
		link: "/services/consultant-support",
	},
	{
		id: 4,
		title: "BULK ORDER DISCOUNTS",
		image: "/bulk-order-discount.jpeg",
		link: "/services/bulk-order-discounts",
	},
	{
		id: 5,
		title: "SUSTAINABILITY SOLUTIONS",
		image: "/sustainability-solution.jpeg",
		link: "/services/sustainability-solutions",
	},
];

export default function OurServices() {
	// Determine center index
	const centerIndex = Math.floor(serviceItems.length / 2);

	// Calculate card heights - we'll use this to calculate the dynamic height
	const calcHeight = (index: number, items: serviceItemsProps[]) => {
		const centerIdx = Math.floor(items.length / 2);
		const maxHeight = 384; // 24rem / h-96
		const minHeight = 320; // 20rem / h-80
		const heightStep = (maxHeight - minHeight) / centerIdx;

		// Calculate distance from center
		const distanceFromCenter = Math.abs(index - centerIdx);

		// Calculate height based on distance from center
		const height = maxHeight - distanceFromCenter * heightStep;

		return height;
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold mb-4">Our Services</h2>
					{/* <div className="w-24 h-1 bg-blue-600 mx-auto"></div> */}
				</div>

				<div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-6">
					{serviceItems.map((service, index) => {
						const height = calcHeight(index, serviceItems);

						return (
							<Link
								key={service.id}
								href={service.link}
								className="group relative block overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
								style={{ height: `${height}px` }}
							>
								<div className="relative h-full w-full">
									<Image
										src={service.image}
										alt={service.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<h3 className="text-center text-lg font-bold text-white tracking-wide px-4 text-shadow">
											{service.title}
										</h3>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>

			<style jsx>{`
				.text-shadow {
					text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
				}
			`}</style>
		</section>
	);
}
