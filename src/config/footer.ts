import { navLinks } from './navigation';

export const footer = {
	links: navLinks,
	hours: 'Sat–Thu · 9am–6pm',
	columns: [
		{
			title: 'Company',
			links: [
				{ href: '/about', label: 'About Us' },
				{ href: '/projects', label: 'Selected Projects' },
				{ href: '/projects/gallery', label: 'Project Gallery' },
				{ href: '/#finishes', label: 'Surface Finishes' },
				{ href: '/contact', label: 'Contact' },
			],
		},
		{
			title: 'Products',
			links: [
				{ href: '/products/curtain-wall-systems', label: 'Curtain Walls' },
				{ href: '/products/windows-and-doors', label: 'Windows & Doors' },
				{ href: '/products/sliding-systems', label: 'Sliding Systems' },
				{ href: '/products/custom-architectural-profiles', label: 'Architectural Profiles' },
			],
		},
		{
			title: 'Social',
			links: [
				{ href: 'https://www.instagram.com/pakalumexpakistan', label: 'Instagram', external: true },
				{ href: 'https://www.facebook.com/pakalumexindustries', label: 'Facebook', external: true },
				{ href: 'https://www.tiktok.com/@pakalumexindustries', label: 'TikTok', external: true },
			],
		},
	],
} as const;
