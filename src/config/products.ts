import type { ImageMetadata } from 'astro';
import curtainWall from '../assets/products/curtain-wall-systems.jpg';
import windowsAndDoors from '../assets/products/windows-and-doors.jpg';
import slidingSystems from '../assets/products/sliding-systems.jpg';
import anodizing from '../assets/finishes/anodizing.jpg';
import powderCoating from '../assets/finishes/powder-coating.jpg';
import woodFinish from '../assets/finishes/wood-finish.jpg';
import satinFinish from '../assets/finishes/satin-finish.jpg';
import { site } from './site';

export type ProductCategory = 'Facades' | 'Openings' | 'Interiors' | 'Custom';

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
	applications: string[];
	href: string;
};

const baseSpecs = [
	{ label: 'Material', value: '6063-T5 Alloy' },
	{ label: 'Tolerance', value: '±0.2mm Precision' },
] as const;

export const productItems: Product[] = [
	{
		slug: 'curtain-wall-systems',
		title: 'Curtain Wall Systems',
		category: 'Facades',
		shortDescription: 'High-performance facade systems for commercial and high-rise architecture.',
		description:
			'Engineered curtain wall systems designed for commercial towers and modern facades. Profiles support glazing packages with strength, weather performance, and clean architectural lines.',
		image: curtainWall,
		gallery: [curtainWall, anodizing, powderCoating],
		features: [
			'Stick and unitized-ready profile options',
			'Designed for high-rise wind and weather loads',
			'Compatible with thermal-break inserts',
			'Clean sightlines for contemporary elevations',
		],
		specs: [...baseSpecs, { label: 'Finish', value: 'Anodized / Powder Coated' }, { label: 'Use', value: 'Commercial facade' }],
		finishes: ['Mill Finish', 'Anodizing', 'Powder Coating', 'Satin Finish'],
		applications: ['Commercial towers', 'Corporate campuses', 'Mixed-use facades'],
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
		gallery: [windowsAndDoors, woodFinish, powderCoating],
		features: [
			'Thermal-break options for energy efficiency',
			'Reliable sealing for weather resistance',
			'Multiple opening configurations',
			'Finish options matched to project aesthetics',
		],
		specs: [...baseSpecs, { label: 'Finish', value: 'Anodized / Powder / Wood' }, { label: 'Use', value: 'Windows & entrance doors' }],
		finishes: ['Anodizing', 'Powder Coating', 'Wood Finish', 'Satin Finish'],
		applications: ['Residences', 'Offices', 'Hospitality openings'],
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
		gallery: [slidingSystems, anodizing, woodFinish],
		features: [
			'Large glazed openings with stable tracks',
			'Smooth operation for daily use',
			'Suitable for residential and commercial spans',
			'Compatible with high-performance finishes',
		],
		specs: [...baseSpecs, { label: 'Finish', value: 'Anodized / Powder / Wood' }, { label: 'Use', value: 'Sliding openings' }],
		finishes: ['Mill Finish', 'Anodizing', 'Powder Coating', 'Wood Finish'],
		applications: ['Living spaces', 'Balconies & terraces', 'Retail fronts'],
		href: '/products/sliding-systems',
	},
	{
		slug: 'office-partitions',
		title: 'Office Partitions',
		category: 'Interiors',
		shortDescription: 'Aluminium partition systems for flexible, refined workplace interiors.',
		description:
			'Interior aluminium partition systems for offices and commercial interiors. Designed for clean detailing, glazing options, and adaptable workplace layouts.',
		image: satinFinish,
		gallery: [satinFinish, windowsAndDoors, anodizing],
		features: [
			'Modular layouts for workplace planning',
			'Compatible with glazed and solid infills',
			'Clean aluminium detailing',
			'Durable finishes for high-traffic interiors',
		],
		specs: [...baseSpecs, { label: 'Finish', value: 'Anodized / Powder / Satin' }, { label: 'Use', value: 'Interior partitions' }],
		finishes: ['Anodizing', 'Powder Coating', 'Satin Finish'],
		applications: ['Corporate offices', 'Meeting rooms', 'Fit-outs'],
		href: '/products/office-partitions',
	},
	{
		slug: 'structural-glazing',
		title: 'Structural Glazing',
		category: 'Facades',
		shortDescription: 'Structural glazing profiles for seamless glass facade expression.',
		description:
			'Structural glazing solutions for seamless glass elevations. Profiles support high visual continuity while meeting performance needs for modern commercial architecture.',
		image: powderCoating,
		gallery: [powderCoating, curtainWall, anodizing],
		features: [
			'Minimal sightline facade expression',
			'Designed for glass-forward elevations',
			'Compatible with project glazing packages',
			'Engineered for weather and structural demands',
		],
		specs: [...baseSpecs, { label: 'Finish', value: 'Anodized / Powder Coated' }, { label: 'Use', value: 'Structural glazing' }],
		finishes: ['Anodizing', 'Powder Coating', 'Satin Finish'],
		applications: ['Landmark facades', 'Atria', 'Commercial envelopes'],
		href: '/products/structural-glazing',
	},
	{
		slug: 'custom-architectural-profiles',
		title: 'Custom Architectural Profiles',
		category: 'Custom',
		shortDescription: 'Bespoke extruded profiles tailored to project drawings and specifications.',
		description:
			'Custom architectural aluminium profiles for unique project requirements. From consultation through extrusion and finishing, we support architects and fabricators with purpose-built sections.',
		image: woodFinish,
		gallery: [woodFinish, slidingSystems, powderCoating],
		features: [
			'Profiles developed from project drawings',
			'Extrusion and finishing under one roof',
			'Support for fabricators and installers',
			'Finish matching across facade packages',
		],
		specs: [...baseSpecs, { label: 'Finish', value: 'Project-specified' }, { label: 'Use', value: 'Custom extrusion' }],
		finishes: ['Mill Finish', 'Anodizing', 'Powder Coating', 'Wood Finish', 'Satin Finish', 'Value Addition'],
		applications: ['Bespoke facades', 'Special detailing', 'Fabrication packages'],
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
