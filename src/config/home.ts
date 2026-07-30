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

/* Hero cutaway, ordered outside-in. `band` matches the SVG layer it labels. */
export const heroLayers = [
	{ band: 0, label: 'Anodized Finish', value: 'AA-M12C22A31', detail: '25µm oxide layer' },
	{ band: 1, label: 'Alloy Core', value: '6063-T5 Billet', detail: 'Extruded at 500°C' },
	{ band: 2, label: 'Thermal Break', value: 'Polyamide PA66', detail: '0.9 W/m²K' },
	{ band: 3, label: 'Structural Chamber', value: 'Multi-Chamber', detail: '±0.2mm tolerance' },
] as const;

/* Hero sliding-window scene: specs shown under the door/window visual. */
export const heroCut = [
	{ label: 'System', value: 'Sliding sash', detail: 'Two-track aluminium' },
	{ label: 'Profile', value: '6063-T5', detail: 'Thermal break option' },
	{ label: 'Glazing', value: 'Double pane', detail: 'Low-E / clear glass' },
	{ label: 'Travel', value: 'Full open', detail: 'Left sash over right' },
] as const;

export const specs = [
	{ label: 'Material', value: '6063-T5 Alloy' },
	{ label: 'Finish', value: 'Anodized / Powder Coated' },
	{ label: 'Tolerance', value: '±0.2mm Precision' },
] as const;
