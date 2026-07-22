import { navLinks } from './navigation';

export const footer = {
	links: navLinks,
	columns: [
		{
			title: 'Company',
			links: [
				{ href: '/about', label: 'About' },
				{ href: '/projects', label: 'Projects' },
				{ href: '/contact', label: 'Contact' },
			],
		},
		{
			title: 'Products',
			links: [
				{ href: '/products', label: 'Curtain Walls' },
				{ href: '/products', label: 'Windows & Doors' },
				{ href: '/products', label: 'Sliding Systems' },
			],
		},
	],
} as const;
