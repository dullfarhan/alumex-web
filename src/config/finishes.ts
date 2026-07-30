import type { ImageMetadata } from 'astro';
import woodTexture from '../assets/finishes/wood-texture.jpg';
import woodTexture2 from '../assets/finishes/wood-texture-2.jpg';
import anodizing from '../assets/finishes/anodizing.jpg';
import anodizing2 from '../assets/finishes/anodizing-2.jpg';
import powderCoating from '../assets/finishes/powder-coating.jpg';
import powderCoating2 from '../assets/finishes/powder-coating-2.jpg';

type FinishHighlightIcon = 'strength' | 'weather' | 'precision' | 'aesthetics';

export type Finish = {
	slug: string;
	title: string;
	category: 'Surface Finishes';
	shortDescription: string;
	description: string;
	image: ImageMetadata;
	gallery: ImageMetadata[];
	features: string[];
	specs: { label: string; value: string }[];
	applications: { title: string; description: string; image: ImageMetadata }[];
	highlights: { label: string; icon: FinishHighlightIcon }[];
	performance: {
		axes: { label: string; value: number }[];
		metrics: { label: string; value: string }[];
	};
	href: string;
};

const defaultHighlights: Finish['highlights'] = [
	{ label: 'Weather Resistant', icon: 'weather' },
	{ label: 'Long Service Life', icon: 'strength' },
	{ label: 'Precision Applied', icon: 'precision' },
	{ label: 'Architectural Look', icon: 'aesthetics' },
];

export const finishDescriptions: Record<string, string> = {
	'Wood Texture': 'Realistic wood-grain transfer with aluminium durability underneath.',
	Anodizing: 'Durable oxide layer for corrosion resistance and refined metallic tone.',
	'Powder Coating': 'Color-stable polymer finish for weather exposure and brand matching.',
};

export const finishes = {
	label: 'Our Finishes',
	title: 'Surface finishes engineered for lasting performance.',
	description:
		'Three architectural finishes — wood texture, anodizing, and powder coating — applied with precision for durability and appearance.',
	items: [
		{
			slug: 'wood-texture',
			title: 'Wood Texture',
			category: 'Surface Finishes',
			shortDescription: 'Natural wood-look coating with the strength of aluminium underneath.',
			description:
				'Heat-transfer wood texture finishes replicate oak, walnut, teak, and custom grains on aluminium profiles. Ideal when projects need warm timber aesthetics without rot, warp, or heavy maintenance.',
			image: woodTexture,
			gallery: [woodTexture, woodTexture2, powderCoating, anodizing],
			features: [
				'Realistic multi-tone wood grain transfer',
				'UV-stable topcoat for exterior exposure',
				'Compatible with windows, doors, and cladding',
				'Low maintenance versus natural timber',
			],
			specs: [
				{ label: 'Process', value: 'Powder base + heat transfer' },
				{ label: 'Grain options', value: 'Oak / Walnut / Teak / Custom' },
				{ label: 'Film thickness', value: '≥ 60 µm base coat' },
				{ label: 'UV stability', value: 'Exterior-rated' },
				{ label: 'Use', value: 'Facades, openings, interiors' },
				{ label: 'Maintenance', value: 'Wipe-clean surface' },
			],
			applications: [
				{
					title: 'Residential Facades',
					description: 'Warm timber look on cladding and balcony profiles.',
					image: woodTexture,
				},
				{
					title: 'Windows & Doors',
					description: 'Wood-grain frames with aluminium performance.',
					image: woodTexture2,
				},
				{
					title: 'Interior Joinery',
					description: 'Consistent grain language across partitions and trim.',
					image: powderCoating,
				},
			],
			highlights: defaultHighlights,
			performance: {
				axes: [
					{ label: 'Weather Resistance', value: 86 },
					{ label: 'UV Stability', value: 84 },
					{ label: 'Scratch Resistance', value: 78 },
					{ label: 'Color Retention', value: 82 },
					{ label: 'Design Flexibility', value: 92 },
				],
				metrics: [
					{ label: 'Base Coat', value: '≥ 60 µm' },
					{ label: 'Service Life', value: '10+ Years' },
					{ label: 'Grain Match', value: 'Customizable' },
				],
			},
			href: '/finishes/wood-texture',
		},
		{
			slug: 'anodizing',
			title: 'Anodizing',
			category: 'Surface Finishes',
			shortDescription: 'Electrochemical oxide layer for corrosion resistance and metallic depth.',
			description:
				'Anodizing builds a controlled aluminium oxide film that hardens the surface, improves corrosion resistance, and delivers a refined metallic finish — from clear and champagne to bronze and black.',
			image: anodizing,
			gallery: [anodizing, anodizing2, powderCoating, woodTexture],
			features: [
				'Integrated oxide layer — will not peel or flake',
				'Excellent corrosion and abrasion resistance',
				'Natural metallic tones for modern elevations',
				'Suitable for high-rise and coastal exposure',
			],
			specs: [
				{ label: 'Process', value: 'Sulphuric anodizing' },
				{ label: 'Oxide thickness', value: '15–25 µm typical' },
				{ label: 'Colors', value: 'Clear / Bronze / Black / Custom' },
				{ label: 'Hardness', value: 'High abrasion resistance' },
				{ label: 'Use', value: 'Facades, curtain walls, trim' },
				{ label: 'Standard', value: 'Architectural grade' },
			],
			applications: [
				{
					title: 'Curtain Walls',
					description: 'Durable metallic sightlines for commercial towers.',
					image: anodizing,
				},
				{
					title: 'Coastal Projects',
					description: 'Oxide protection for humid and saline environments.',
					image: anodizing2,
				},
				{
					title: 'Architectural Trim',
					description: 'Consistent tone across mullions, caps, and flashings.',
					image: powderCoating2,
				},
			],
			highlights: defaultHighlights,
			performance: {
				axes: [
					{ label: 'Corrosion Resistance', value: 94 },
					{ label: 'Abrasion Resistance', value: 90 },
					{ label: 'UV Stability', value: 88 },
					{ label: 'Color Retention', value: 80 },
					{ label: 'Design Flexibility', value: 76 },
				],
				metrics: [
					{ label: 'Oxide Layer', value: '15–25 µm' },
					{ label: 'Service Life', value: '20+ Years' },
					{ label: 'Peel Risk', value: 'None' },
				],
			},
			href: '/finishes/anodizing',
		},
		{
			slug: 'powder-coating',
			title: 'Powder Coating',
			category: 'Surface Finishes',
			shortDescription: 'Color-stable electrostatic coating for weather exposure and brand matching.',
			description:
				'Powder coating delivers a uniform, durable polymer film in virtually any RAL or custom color. Applied electrostatically and cured for strong adhesion, UV stability, and clean architectural color control.',
			image: powderCoating,
			gallery: [powderCoating, powderCoating2, anodizing, woodTexture],
			features: [
				'Wide RAL and custom color range',
				'Strong adhesion with electrostatic application',
				'Excellent weather and chalk resistance',
				'Smooth, textured, or metallic effect options',
			],
			specs: [
				{ label: 'Process', value: 'Electrostatic powder + cure' },
				{ label: 'Film thickness', value: '60–80 µm typical' },
				{ label: 'Colors', value: 'RAL / Custom match' },
				{ label: 'Effects', value: 'Gloss / Matt / Texture' },
				{ label: 'Use', value: 'All architectural systems' },
				{ label: 'Weathering', value: 'Exterior polyester systems' },
			],
			applications: [
				{
					title: 'Brand Facades',
					description: 'Exact color matching for corporate and retail envelopes.',
					image: powderCoating,
				},
				{
					title: 'Windows & Doors',
					description: 'Uniform color across frames, sashes, and accessories.',
					image: powderCoating2,
				},
				{
					title: 'Industrial Buildings',
					description: 'Tough coatings for high-traffic and exposed sites.',
					image: anodizing,
				},
			],
			highlights: defaultHighlights,
			performance: {
				axes: [
					{ label: 'Color Range', value: 96 },
					{ label: 'Weather Resistance', value: 88 },
					{ label: 'UV Stability', value: 86 },
					{ label: 'Impact Resistance', value: 82 },
					{ label: 'Design Flexibility', value: 94 },
				],
				metrics: [
					{ label: 'Film Build', value: '60–80 µm' },
					{ label: 'Service Life', value: '15+ Years' },
					{ label: 'Color Match', value: 'RAL / Custom' },
				],
			},
			href: '/finishes/powder-coating',
		},
	] satisfies Finish[],
} as const;

export function getFinishBySlug(slug: string): Finish | undefined {
	return finishes.items.find((item) => item.slug === slug);
}

export function getRelatedFinishes(slug: string, limit = 2): Finish[] {
	return finishes.items.filter((item) => item.slug !== slug).slice(0, limit);
}
