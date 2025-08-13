import React, { useState, useEffect } from 'react';
import { Play, X, Maximize2, Volume2 } from 'lucide-react';

const videos = [
	{
		id: '1',
		embedId: 'SJDetQiB-wc',
		title: 'Recent Rally Highlights',
		description: 'Key moments from our recent community rally addressing local concerns.',
		duration: '3:45',
	},
	{
		id: '2',
		embedId: 'FarRT7W3E8s',
		title: 'Community Meeting',
		description: 'Important community meeting discussing upcoming development projects.',
		duration: '8:20',
	},
	{
		id: '3',
		embedId: '1kspCaEk5cw',
		title: 'Development Project Launch',
		description: 'Official launch ceremony for the new infrastructure development project.',
		duration: '5:15',
	},
];

const VideoGallery = () => {
	const [activeId, setActiveId] = useState(null);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Check if device is mobile
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Handle clicking outside video to close
	useEffect(() => {
		if (activeId !== null) {
			const handleClick = (e) => {
				if (!e.target.closest('.video-card-playing') && !e.target.closest('.video-modal')) {
					setActiveId(null);
					setIsFullscreen(false);
				}
			};
			document.addEventListener('mousedown', handleClick);
			return () => document.removeEventListener('mousedown', handleClick);
		}
	}, [activeId]);

	// Handle escape key
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				setActiveId(null);
				setIsFullscreen(false);
			}
		};
		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, []);

	const handleVideoClick = (videoId) => {
		setActiveId(videoId);
		if (isMobile) {
			setIsFullscreen(true);
		}
	};

	const handleClose = () => {
		setActiveId(null);
		setIsFullscreen(false);
	};

	const handleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	const VideoCard = ({ video }) => (
		<div className="group relative">
			<div
				className={`relative overflow-hidden rounded-2xl shadow-lg bg-white transition-all duration-300 cursor-pointer
          ${activeId === video.id && !isFullscreen ? 'video-card-playing z-20 shadow-2xl' : 'hover:shadow-xl hover:-translate-y-1'}
        `}
				onClick={() => handleVideoClick(video.id)}
			>
				{/* Video Container */}
				<div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
					{activeId === video.id && !isFullscreen ? (
						<iframe
							src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0&modestbranding=1`}
							title={video.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="w-full h-full"
						/>
					) : (
						<>
							{/* Thumbnail */}
							<img
								src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`}
								alt={video.title}
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								onError={(e) => {
									e.target.src = `https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`;
								}}
							/>

							{/* Play Button Overlay */}
							<div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
								<div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
									<Play size={24} className="text-white ml-1" fill="currentColor" />
								</div>
							</div>

							{/* Duration Badge */}
							<div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
								{video.duration}
							</div>
						</>
					)}

					{/* Controls for active video (non-fullscreen) */}
					{activeId === video.id && !isFullscreen && (
						<div className="absolute top-3 left-3 right-3 flex justify-end items-center z-30">
							<button
								className="bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow-lg hover:bg-white transition-all"
								onClick={(e) => {
									e.stopPropagation();
									handleFullscreen();
								}}
							>
								<Maximize2 size={16} />
							</button>
						</div>
					)}
				</div>

				{/* Video Info */}
				<div className="p-4 md:p-6">
					<h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
						{video.title}
					</h3>
					<p className="text-gray-600 text-sm md:text-base line-clamp-2">
						{video.description}
					</p>

					{/* Action indicators */}
					<div className="flex items-center justify-between mt-4">
						<div className="flex items-center gap-4 text-xs md:text-sm text-gray-500">
							<span className="flex items-center gap-1">
								<Volume2 size={14} />
								HD Quality
							</span>
							<span>{video.duration}</span>
						</div>
						<div className="text-orange-600 font-medium text-sm group-hover:text-orange-700 transition-colors">
							Watch Now
						</div>
					</div>
				</div>

				{/* Hover border effect */}
				<div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-orange-200 transition-all duration-300 pointer-events-none"></div>
			</div>
		</div>
	);

	const FullscreenModal = ({ video }) => (
		<div className="fixed inset-0 bg-black z-50 flex items-center justify-center video-modal">
			{/* Close button */}
			<button
				className="absolute top-4 right-4 z-60 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all"
				onClick={handleClose}
			>
				<X size={24} />
			</button>

			{/* Video container */}
			<div className="w-full h-full max-w-6xl max-h-full p-4 flex flex-col">
				<div className="flex-1 relative">
					<iframe
						src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0&modestbranding=1`}
						title={video.title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						className="w-full h-full rounded-lg"
					/>
				</div>

				{/* Video info at bottom */}
				<div className="text-white mt-4 text-center">
					<h3 className="text-lg md:text-xl font-bold mb-2">{video.title}</h3>
					<p className="text-white/80 text-sm md:text-base">{video.description}</p>
				</div>
			</div>
		</div>
	);

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-8 md:mb-16">
					<div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-4">
						<Play size={16} className="mr-2" />
						Video Gallery
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Latest Videos
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Stay updated with our recent activities, meetings, and community initiatives through our video
						content.
					</p>
				</div>

				{/* Video Grid */}
				<div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
				</div>
			</div>

			{/* Fullscreen Modal */}
			{activeId && isFullscreen && (
				<FullscreenModal video={videos.find((v) => v.id === activeId)} />
			)}
		</section>
	);
};

export default VideoGallery;