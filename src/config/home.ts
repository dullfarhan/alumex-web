export const expertise = {
	number: '01',
	label: 'Our Expertise',
	title: 'A legacy of precision manufacturing.',
	description:
		'From extrusion to anodizing, every profile is crafted with meticulous attention to detail, meeting international standards for strength and finish.',
	link: { href: '/about', label: 'Learn more about our process' },
} as const;

export const systems = {
	image:
		'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1200&auto=format&fit=crop',
	feature: {
		label: 'Project Feature',
		title: 'Curtain Wall Systems',
	},
	items: [
		{
			title: 'Thermal Break Systems',
			description: 'Enhanced energy efficiency with polyamide thermal break technology.',
			icon: 'home',
		},
		{
			title: 'Acoustic Insulation',
			description: 'Engineered for superior sound reduction in dense urban environments.',
			icon: 'layers',
		},
		{
			title: 'Weather Resistance',
			description: 'Tested against extreme weather conditions for lasting durability.',
			icon: 'globe',
		},
	],
} as const;

export const specs = [
	{ label: 'Material', value: '6063-T5 Alloy' },
	{ label: 'Finish', value: 'Anodized / Powder Coated' },
	{ label: 'Tolerance', value: '±0.2mm Precision' },
] as const;
