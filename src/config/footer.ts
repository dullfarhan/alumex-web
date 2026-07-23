import { navLinks } from './navigation';

export const footer = {
	links: navLinks,
	hours: 'Mon – Sat · 9:00 AM – 6:00 PM',
	columns: [
		{
			title: 'Company',
			links: [
				{ href: '/about', label: 'About Us' },
				{ href: '/projects', label: 'Selected Projects' },
				{ href: '/#finishes', label: 'Surface Finishes' },
				{ href: '/contact', label: 'Contact' },
			],
		},
		{
			title: 'Products',
			links: [
				{ href: '/products', label: 'Curtain Walls' },
				{ href: '/products', label: 'Windows & Doors' },
				{ href: '/products', label: 'Sliding Systems' },
				{ href: '/products', label: 'Architectural Profiles' },
			],
		},
		{
			title: 'Social',
			links: [
				{ href: 'https://www.linkedin.com/', label: 'LinkedIn', external: true },
				{ href: 'https://www.facebook.com/', label: 'Facebook', external: true },
				{ href: 'https://www.instagram.com/', label: 'Instagram', external: true },
				{ href: 'https://www.youtube.com/', label: 'YouTube', external: true },
			],
		},
	],
	legal: [
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
} as const;
