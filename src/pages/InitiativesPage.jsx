import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HardHat, Book, Users, Heart, Home } from 'lucide-react';
import BackButton from '../components/BackButton';
import BackToTopButton from '../components/BackToTopButton';

const initiatives = [
	{
		title: 'Development Projects',
		description:
			'Roadworks, drainage systems, ward-wise amenities upgrades across Nagpur West.',
		icon: HardHat,
	},
	{
		title: 'Education & Youth',
		description:
			'Distribution of study materials, setup of youth training camps, and school sanitation drives.',
		icon: Book,
	},
	{
		title: 'Women Empowerment',
		description:
			'Mahila Melavas, safety helpline facilitation, and job-oriented workshops for women.',
		icon: Users,
	},
	{
		title: 'Health & Cleanliness',
		description:
			'Ayushman Bharat enrollment drives, COVID-19 camps, Swachh Nagpur campaigns.',
		icon: Heart,
	},
	{
		title: 'Nagpur West Local Work',
		description:
			'Direct ward engagement with residents, weekly grievance hearings, and project follow-ups.',
		icon: Home,
	},
];

const InitiativesPage = () => {
	const [expandedId, setExpandedId] = useState(null);

	return (
		<motion.div
			className="min-h-screen bg-gray-50"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{/* Hero Section */}
			<div className="relative bg-white text-gray-800 pt-16 pb-12 shadow-sm">
				<BackButton className="absolute top-6 left-6 z-10" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
							className="text-3xl md:text-5xl font-bold mb-4"
						>
							Key Initiatives
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="text-lg text-gray-600 max-w-2xl mx-auto"
						>
							Explore the impactful initiatives undertaken for the development
							and welfare of Nagpur West.
						</motion.p>
					</div>
				</div>
			</div>

			{/* Initiatives Section */}
			<main className="pt-12 pb-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{initiatives.map((initiative, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
							>
								<button
									onClick={() =>
										setExpandedId(
											expandedId === index ? null : index
										)
									}
									className="w-full text-left p-6"
								>
									<div className="flex items-start gap-4">
										<div className="p-4 bg-orange-100 rounded-full">
											<initiative.icon
												size={24}
												className="text-orange-500"
											/>
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-semibold text-gray-900 mb-2">
												{initiative.title}
											</h3>
											<p
												className={`text-gray-600 ${
													expandedId === index
														? ''
														: 'line-clamp-2'
												}`}
											>
												{initiative.description}
											</p>
										</div>
									</div>
									<div className="text-right mt-4">
										<span className="text-orange-500 font-medium">
											{expandedId === index
												? 'Show Less'
												: 'Read More'}
										</span>
									</div>
								</button>
							</motion.div>
						))}
					</div>
				</div>
			</main>
			<BackToTopButton />
		</motion.div>
	);
};

export default InitiativesPage;
