import yearsExperience from '../assets/icons/years-experience.svg?url';
import completeProjects from '../assets/icons/complete-projects.svg?url';
import isoCertified from '../assets/icons/iso-certified.svg?url';
import map from '../assets/icons/map.svg?url';

export const hero = {
	label: 'DURABLE ARCHITECTURAL ALUMINIUM EXTRUSION & POWDER COATING',
	title: 'Engineering Aluminium for Modern Architecture.',
	description:
		'Premium aluminium solutions designed for precision, durability, and architectural excellence.',
	primaryCta: { href: '/products', label: 'Explore Products' },
	secondaryCta: { href: '/contact', label: 'Contact Us' },
	stats: [
		{ value: '10+', label: 'Years Experience', icon: yearsExperience },
		{ value: '500+', label: 'Completed Projects', icon: completeProjects },
		{ value: 'ISO', label: 'Certified', icon: isoCertified },
		{ value: 'Nationwide', label: 'Service', icon: map },
	],
} as const;
