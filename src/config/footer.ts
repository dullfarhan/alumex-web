import { navLinks } from './navigation';

export const footer = {
	links: navLinks,
	hours: 'Always open',
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
			],
		},
	],
} as const;
