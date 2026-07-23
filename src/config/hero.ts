export const hero = {
	label: 'Architectural Aluminium Systems',
	title: 'Engineering Aluminium for Modern Architecture.',
	description:
		'Premium aluminium solutions designed for precision, durability, and architectural excellence.',
	image:
		'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
	primaryCta: { href: '/products', label: 'Explore Products' },
	secondaryCta: { href: '/contact', label: 'Contact Us' },
	stats: [
		{ value: '10+', label: 'Years Experience', icon: 'building' },
		{ value: '500+', label: 'Completed Projects', icon: 'buildings' },
		{ value: 'ISO', label: 'Certified', icon: 'award' },
		{ value: 'Nationwide', label: 'Service', icon: 'pin' },
	],
} as const;
