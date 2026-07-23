import ecoImage from '../assets/eco/eco-friendly.jpg';

export const eco = {
	label: 'Eco Friendly',
	title: 'Aluminium that supports a cleaner build.',
	description:
		'Our production approach prioritizes recyclable materials, efficient finishes, and systems that improve building energy performance.',
	image: ecoImage,
	points: [
		{
			title: 'Fully Recyclable',
			description: 'Aluminium profiles that can be recycled without losing structural quality.',
		},
		{
			title: 'Energy Efficient Systems',
			description: 'Thermal-break technology that helps reduce heating and cooling demand.',
		},
		{
			title: 'Low-Impact Finishes',
			description: 'Durable anodized and powder-coated finishes designed for long service life.',
		},
	],
} as const;
