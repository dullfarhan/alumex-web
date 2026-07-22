export type NavLink = {
	href: string;
	label: string;
};

export const navLinks: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/products', label: 'Products' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];

export const navCta: NavLink = {
	href: '/contact',
	label: 'Request Quote',
};
