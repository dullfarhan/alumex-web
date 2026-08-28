import { navLinks } from './navigation';

export const socialLinks = [
	{ href: 'https://www.instagram.com/pakalumexpakistan', label: 'Instagram', external: true },
	{ href: 'https://www.facebook.com/pakalumexindustries', label: 'Facebook', external: true },
	{ href: 'https://www.tiktok.com/@pakalumexindustries', label: 'TikTok', external: true },
] as const;

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
				{ href: '/products?category=Doors', label: 'Doors' },
				{ href: '/products?category=Windows', label: 'Windows' },
				{ href: '/products?category=Facades', label: 'Facades' },
				{ href: '/products?category=Louvers', label: 'Louvers' },
				{ href: '/products?category=Others', label: 'Others' },
			],
		},
		{
			title: 'Social',
			links: socialLinks,
		},
	],
} as const;
