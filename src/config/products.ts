import type { ImageMetadata } from 'astro';
import curtainWall from '../assets/products/curtain-wall-systems.jpg';
import windowsAndDoors from '../assets/products/windows-and-doors.jpg';
import slidingSystems from '../assets/products/sliding-systems.jpg';
import officePartitions from '../assets/products/office-partitions.jpg';
import structuralGlazing from '../assets/products/structural-glazing.jpg';
import customProfiles from '../assets/products/custom-architectural-profiles.jpg';
import { site } from './site';

export type ProductCategory = 'Facades' | 'Openings' | 'Interiors' | 'Custom';

export type ProductHighlightIcon = 'strength' | 'weather' | 'precision' | 'aesthetics';

export type Product = {
	slug: string;
	title: string;
	category: ProductCategory;
	shortDescription: string;
	description: string;
	image: ImageMetadata;
	gallery: ImageMetadata[];
	features: string[];
	specs: { label: string; value: string }[];
	finishes: string[];
	applications: { title: string; description: string; image: ImageMetadata }[];
	highlights: { label: string; icon: ProductHighlightIcon }[];
	performance: {
		axes: { label: string; value: number }[];
		metrics: { label: string; value: string }[];
	};
	href: string;
};

const defaultHighlights: Product['highlights'] = [
	{ label: 'High Strength', icon: 'strength' },
	{ label: 'Weather Resistant', icon: 'weather' },
	{ label: 'Precision Engineered', icon: 'precision' },
	{ label: 'Clean Modern Aesthetics', icon: 'aesthetics' },
];

const defaultPerformanceAxes = [
	{ label: 'Structural Strength', value: 88 },
	{ label: 'Weather Resistance', value: 84 },
	{ label: 'Thermal Performance', value: 76 },
	{ label: 'Acoustic Insulation', value: 72 },
	{ label: 'Design Flexibility', value: 90 },
] as const;

const baseSpecs = [
	{ label: 'Material', value: '6063-T5 Alloy' },
	{ label: 'Tolerance', value: '±0.2mm Precision' },
] as const;

export const finishDescriptions: Record<string, string> = {
	'Mill Finish': 'Natural extruded aluminium surface, ready for fabrication or coating.',
	Anodizing: 'Durable oxide layer for corrosion resistance and refined metallic tone.',
	'Powder Coating': 'Color-stable polymer finish for weather exposure and brand matching.',
	'Wood Finish': 'Architectural wood-look coating with aluminium durability underneath.',
	'Satin Finish': 'Soft sheen surface for contemporary interiors and elevations.',
	'Value Addition': 'Secondary processes for project-specific detailing and performance.',
};

export const productItems: Product[] = [
	{
		slug: 'curtain-wall-systems',
		title: 'Curtain Wall Systems',
		category: 'Facades',
		shortDescription: 'High-performance facade systems for commercial and high-rise architecture.',
		description:
			'Engineered curtain wall systems designed for commercial towers and modern facades. Profiles support glazing packages with strength, weather performance, and clean architectural lines.',
		image: curtainWall,
		gallery: [curtainWall, structuralGlazing, customProfiles, officePartitions],
		features: [
			'Stick and unitized-ready profile options',
			'Designed for high-rise wind and weather loads',
			'Compatible with thermal-break inserts',
			'Clean sightlines for contemporary elevations',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Commercial facade' },
			{ label: 'Glazing', value: 'Double / Triple IGU' },
			{ label: 'Performance', value: 'High wind & weather rated' },
			{ label: 'Installation', value: 'Stick / Unitized' },
		],
		finishes: ['Mill Finish', 'Anodizing', 'Powder Coating', 'Satin Finish'],
		applications: [
			{
				title: 'Commercial Towers',
				description: 'High-rise envelopes with clean sightlines and wind performance.',
				image: curtainWall,
			},
			{
				title: 'Corporate Campuses',
				description: 'Consistent facade language across multi-building sites.',
				image: structuralGlazing,
			},
			{
				title: 'Mixed-Use Facades',
				description: 'Flexible spanning for retail podiums and upper offices.',
				image: customProfiles,
			},
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...defaultPerformanceAxes],
			metrics: [
				{ label: 'Wind Load Resistance', value: '≥ 2800 Pa' },
				{ label: 'Thermal U-Value', value: '≤ 2.0 W/m²K' },
				{ label: 'Surface Durability', value: '10+ Years' },
			],
		},
		href: '/products/curtain-wall-systems',
	},
	{
		slug: 'windows-and-doors',
		title: 'Windows & Doors',
		category: 'Openings',
		shortDescription: 'Thermal-break window and door systems designed for comfort and durability.',
		description:
			'Window and door systems built for thermal comfort, weather sealing, and long service life. Suitable for residential and commercial openings where performance and finish quality matter.',
		image: windowsAndDoors,
		gallery: [windowsAndDoors, slidingSystems, officePartitions, customProfiles],
		features: [
			'Thermal-break options for energy efficiency',
			'Reliable sealing for weather resistance',
			'Multiple opening configurations',
			'Finish options matched to project aesthetics',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Windows & entrance doors' },
			{ label: 'Glazing', value: 'Single / Double IGU' },
			{ label: 'Performance', value: 'Thermal & weather sealed' },
			{ label: 'Installation', value: 'Frame & sash systems' },
		],
		finishes: ['Anodizing', 'Powder Coating', 'Wood Finish', 'Satin Finish'],
		applications: [
			{
				title: 'Residences',
				description: 'Comfortable openings with durable sealing and finish options.',
				image: windowsAndDoors,
			},
			{
				title: 'Offices',
				description: 'Reliable daylighting and entrance systems for workplaces.',
				image: officePartitions,
			},
			{
				title: 'Hospitality Openings',
				description: 'Quiet, refined windows and doors for guest-facing spaces.',
				image: slidingSystems,
			},
		],
		highlights: defaultHighlights,
		performance: {
			axes: [
				{ label: 'Structural Strength', value: 78 },
				{ label: 'Weather Resistance', value: 86 },
				{ label: 'Thermal Performance', value: 88 },
				{ label: 'Acoustic Insulation', value: 80 },
				{ label: 'Design Flexibility', value: 82 },
			],
			metrics: [
				{ label: 'Air Infiltration', value: 'Class A3' },
				{ label: 'Thermal U-Value', value: '≤ 1.8 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/windows-and-doors',
	},
	{
		slug: 'sliding-systems',
		title: 'Sliding Systems',
		category: 'Openings',
		shortDescription: 'Smooth, large-span sliding solutions for modern residential and commercial spaces.',
		description:
			'Large-span sliding systems for wide openings and indoor-outdoor living. Profiles are engineered for smooth travel, structural stability, and premium finishes.',
		image: slidingSystems,
		gallery: [slidingSystems, windowsAndDoors, customProfiles, structuralGlazing],
		features: [
			'Large glazed openings with stable tracks',
			'Smooth operation for daily use',
			'Suitable for residential and commercial spans',
			'Compatible with high-performance finishes',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Sliding openings' },
			{ label: 'Glazing', value: 'Large-pane IGU' },
			{ label: 'Performance', value: 'Smooth-track rated' },
			{ label: 'Installation', value: 'Floor / ceiling track' },
		],
		finishes: ['Mill Finish', 'Anodizing', 'Powder Coating', 'Wood Finish'],
		applications: [
			{
				title: 'Living Spaces',
				description: 'Wide indoor-outdoor openings with quiet smooth travel.',
				image: slidingSystems,
			},
			{
				title: 'Balconies & Terraces',
				description: 'Stable spanning for elevated residential openings.',
				image: windowsAndDoors,
			},
			{
				title: 'Retail Fronts',
				description: 'Openable storefront spans with clean architectural lines.',
				image: structuralGlazing,
			},
		],
		highlights: defaultHighlights,
		performance: {
			axes: [
				{ label: 'Structural Strength', value: 82 },
				{ label: 'Weather Resistance', value: 80 },
				{ label: 'Thermal Performance', value: 74 },
				{ label: 'Acoustic Insulation', value: 70 },
				{ label: 'Design Flexibility', value: 92 },
			],
			metrics: [
				{ label: 'Max Panel Width', value: 'Up to 3.0 m' },
				{ label: 'Thermal U-Value', value: '≤ 2.2 W/m²K' },
				{ label: 'Cycle Durability', value: '100k+ cycles' },
			],
		},
		href: '/products/sliding-systems',
	},
	{
		slug: 'office-partitions',
		title: 'Office Partitions',
		category: 'Interiors',
		shortDescription: 'Aluminium partition systems for flexible, refined workplace interiors.',
		description:
			'Interior aluminium partition systems for offices and commercial interiors. Designed for clean detailing, glazing options, and adaptable workplace layouts.',
		image: officePartitions,
		gallery: [officePartitions, windowsAndDoors, slidingSystems, curtainWall],
		features: [
			'Modular layouts for workplace planning',
			'Compatible with glazed and solid infills',
			'Clean aluminium detailing',
			'Durable finishes for high-traffic interiors',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Satin' },
			{ label: 'Use', value: 'Interior partitions' },
			{ label: 'Glazing', value: 'Single / Double glazed' },
			{ label: 'Performance', value: 'Acoustic options' },
			{ label: 'Installation', value: 'Modular framing' },
		],
		finishes: ['Anodizing', 'Powder Coating', 'Satin Finish'],
		applications: [
			{
				title: 'Corporate Offices',
				description: 'Flexible floor plates with refined aluminium detailing.',
				image: officePartitions,
			},
			{
				title: 'Meeting Rooms',
				description: 'Glazed or solid partitions for focused collaboration.',
				image: windowsAndDoors,
			},
			{
				title: 'Fit-Outs',
				description: 'Fast, adaptable systems for commercial interiors.',
				image: slidingSystems,
			},
		],
		highlights: defaultHighlights,
		performance: {
			axes: [
				{ label: 'Structural Strength', value: 70 },
				{ label: 'Weather Resistance', value: 40 },
				{ label: 'Thermal Performance', value: 55 },
				{ label: 'Acoustic Insulation', value: 86 },
				{ label: 'Design Flexibility', value: 94 },
			],
			metrics: [
				{ label: 'Acoustic Rating', value: 'Up to Rw 42 dB' },
				{ label: 'Module Height', value: 'Up to 3.6 m' },
				{ label: 'Reconfigure', value: 'Modular reuse' },
			],
		},
		href: '/products/office-partitions',
	},
	{
		slug: 'structural-glazing',
		title: 'Structural Glazing',
		category: 'Facades',
		shortDescription: 'Structural glazing profiles for seamless glass facade expression.',
		description:
			'Structural glazing solutions for seamless glass elevations. Profiles support high visual continuity while meeting performance needs for modern commercial architecture.',
		image: structuralGlazing,
		gallery: [structuralGlazing, curtainWall, customProfiles, slidingSystems],
		features: [
			'Minimal sightline facade expression',
			'Designed for glass-forward elevations',
			'Compatible with project glazing packages',
			'Engineered for weather and structural demands',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Structural glazing' },
			{ label: 'Glazing', value: 'Structural silicone IGU' },
			{ label: 'Performance', value: 'Weather & structural' },
			{ label: 'Installation', value: 'SSG / bolted systems' },
		],
		finishes: ['Anodizing', 'Powder Coating', 'Satin Finish'],
		applications: [
			{
				title: 'Landmark Facades',
				description: 'Glass-forward elevations with minimal sightlines.',
				image: structuralGlazing,
			},
			{
				title: 'Atria',
				description: 'Seamless glazed envelopes for light-filled volumes.',
				image: curtainWall,
			},
			{
				title: 'Commercial Envelopes',
				description: 'Continuous glass expression for modern offices.',
				image: customProfiles,
			},
		],
		highlights: defaultHighlights,
		performance: {
			axes: [
				{ label: 'Structural Strength', value: 90 },
				{ label: 'Weather Resistance', value: 88 },
				{ label: 'Thermal Performance', value: 78 },
				{ label: 'Acoustic Insulation', value: 74 },
				{ label: 'Design Flexibility', value: 86 },
			],
			metrics: [
				{ label: 'Wind Load Resistance', value: '≥ 3000 Pa' },
				{ label: 'Thermal U-Value', value: '≤ 1.9 W/m²K' },
				{ label: 'Sightline Depth', value: 'Minimal SSG' },
			],
		},
		href: '/products/structural-glazing',
	},
	{
		slug: 'custom-architectural-profiles',
		title: 'Custom Architectural Profiles',
		category: 'Custom',
		shortDescription: 'Bespoke extruded profiles tailored to project drawings and specifications.',
		description:
			'Custom architectural aluminium profiles for unique project requirements. From consultation through extrusion and finishing, we support architects and fabricators with purpose-built sections.',
		image: customProfiles,
		gallery: [customProfiles, slidingSystems, curtainWall, windowsAndDoors],
		features: [
			'Profiles developed from project drawings',
			'Extrusion and finishing under one roof',
			'Support for fabricators and installers',
			'Finish matching across facade packages',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Project-specified' },
			{ label: 'Use', value: 'Custom extrusion' },
			{ label: 'Glazing', value: 'As specified' },
			{ label: 'Performance', value: 'Project engineered' },
			{ label: 'Installation', value: 'Fabricator-led' },
		],
		finishes: ['Mill Finish', 'Anodizing', 'Powder Coating', 'Wood Finish', 'Satin Finish', 'Value Addition'],
		applications: [
			{
				title: 'Bespoke Facades',
				description: 'Purpose-built sections for unique architectural lines.',
				image: customProfiles,
			},
			{
				title: 'Special Detailing',
				description: 'Extrusions matched to complex junction conditions.',
				image: curtainWall,
			},
			{
				title: 'Fabrication Packages',
				description: 'Coordinated profiles for fabricators and installers.',
				image: windowsAndDoors,
			},
		],
		highlights: defaultHighlights,
		performance: {
			axes: [
				{ label: 'Structural Strength', value: 85 },
				{ label: 'Weather Resistance', value: 80 },
				{ label: 'Thermal Performance', value: 75 },
				{ label: 'Acoustic Insulation', value: 70 },
				{ label: 'Design Flexibility', value: 98 },
			],
			metrics: [
				{ label: 'Die Lead Time', value: 'Project based' },
				{ label: 'Alloy Options', value: '6063 / 6061' },
				{ label: 'Finish Matching', value: 'Full range' },
			],
		},
		href: '/products/custom-architectural-profiles',
	},
];

export const products = {
	label: 'Our Products',
	title: 'Aluminium systems for every facade.',
	description: 'Engineered profiles and systems built for precision, performance, and lasting architectural finish.',
	seoTitle: `Products | ${site.name}`,
	seoDescription:
		'Browse Pak Alumex architectural aluminium systems — curtain walls, windows, doors, sliding systems, partitions, glazing, and custom profiles.',
	items: productItems,
} as const;

export const productCategories = ['All', ...new Set(productItems.map((item) => item.category))] as const;

export function getProductBySlug(slug: string): Product | undefined {
	return productItems.find((item) => item.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 2): Product[] {
	const current = getProductBySlug(slug);
	if (!current) return productItems.slice(0, limit);
	const sameCategory = productItems.filter((item) => item.slug !== slug && item.category === current.category);
	const others = productItems.filter((item) => item.slug !== slug && item.category !== current.category);
	return [...sameCategory, ...others].slice(0, limit);
}
