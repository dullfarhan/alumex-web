import curtainWall from '../assets/products/curtain-wall-systems.jpg';
import windowsAndDoors from '../assets/products/windows-and-doors.jpg';
import slidingSystems from '../assets/products/sliding-systems.jpg';

export const products = {
	label: 'Our Products',
	title: 'Aluminium systems for every facade.',
	description: 'Engineered profiles and systems built for precision, performance, and lasting architectural finish.',
	items: [
		{
			title: 'Curtain Wall Systems',
			description: 'High-performance facade systems for commercial and high-rise architecture.',
			image: curtainWall,
			href: '/products',
			icon: 'grid',
		},
		{
			title: 'Windows & Doors',
			description: 'Thermal-break window and door systems designed for comfort and durability.',
			image: windowsAndDoors,
			href: '/products',
			icon: 'window',
		},
		{
			title: 'Sliding Systems',
			description: 'Smooth, large-span sliding solutions for modern residential and commercial spaces.',
			image: slidingSystems,
			href: '/products',
			icon: 'slide',
		},
	],
} as const;
