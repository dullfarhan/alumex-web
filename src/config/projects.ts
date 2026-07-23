import type { ImageMetadata } from 'astro';
import horizonTower from '../assets/projects/horizon-tower.jpg';
import crescentResidences from '../assets/projects/crescent-residences.jpg';
import metroCorporateHub from '../assets/projects/metro-corporate-hub.jpg';
import canalViewCampus from '../assets/projects/canal-view-campus.jpg';
import harbourMixedUse from '../assets/projects/harbour-mixed-use.jpg';
import sereneHotel from '../assets/projects/serene-hotel-islamabad.jpg';
import { site } from './site';

export type Project = {
	slug: string;
	title: string;
	category: string;
	location: string;
	year: string;
	shortDescription: string;
	description: string;
	scope: string[];
	systems: { label: string; href: string }[];
	image: ImageMetadata;
	gallery: ImageMetadata[];
	href: string;
};

export const projectItems: Project[] = [
	{
		slug: 'horizon-tower',
		title: 'Horizon Tower',
		category: 'Commercial Facade',
		location: 'Lahore',
		year: '2024',
		shortDescription: 'High-rise curtain wall package for a landmark commercial tower.',
		description:
			'Pak Alumex supplied curtain wall profiles and finishes for Horizon Tower’s primary elevations. The package supported large glazed bays, clean sightlines, and weather performance suited to a high-rise commercial brief in Lahore.',
		scope: [
			'Curtain wall profile supply for primary elevations',
			'Finish matching across facade zones',
			'Coordination with fabricators on glazing interfaces',
		],
		systems: [
			{ label: 'Curtain Wall Systems', href: '/products/curtain-wall-systems' },
			{ label: 'Structural Glazing', href: '/products/structural-glazing' },
		],
		image: horizonTower,
		gallery: [horizonTower, metroCorporateHub, canalViewCampus, harbourMixedUse],
		href: '/projects/horizon-tower',
	},
	{
		slug: 'crescent-residences',
		title: 'Crescent Residences',
		category: 'Residential Systems',
		location: 'Islamabad',
		year: '2023',
		shortDescription: 'Windows, doors, and sliding systems for a contemporary residential development.',
		description:
			'For Crescent Residences, we delivered opening systems and finishes aligned with the project’s residential aesthetic. Thermal-break windows, entrance doors, and large sliding spans support comfort and indoor-outdoor living across the development.',
		scope: [
			'Window and door systems for apartment openings',
			'Large-span sliding packages for living spaces',
			'Coordinated powder and wood-look finishes',
		],
		systems: [
			{ label: 'Windows & Doors', href: '/products/windows-and-doors' },
			{ label: 'Sliding Systems', href: '/products/sliding-systems' },
		],
		image: crescentResidences,
		gallery: [crescentResidences, sereneHotel, harbourMixedUse, metroCorporateHub],
		href: '/projects/crescent-residences',
	},
	{
		slug: 'metro-corporate-hub',
		title: 'Metro Corporate Hub',
		category: 'Curtain Wall',
		location: 'Karachi',
		year: '2024',
		shortDescription: 'Curtain wall and glazing profiles for a multi-tenant corporate campus.',
		description:
			'Metro Corporate Hub required a coherent facade language across multiple corporate blocks. Pak Alumex provided curtain wall systems and finish options that keep elevations consistent while meeting commercial performance expectations in Karachi.',
		scope: [
			'Stick curtain wall profiles for office blocks',
			'Shared finish specification across campus buildings',
			'Support for phased fabrication and install',
		],
		systems: [
			{ label: 'Curtain Wall Systems', href: '/products/curtain-wall-systems' },
			{ label: 'Custom Architectural Profiles', href: '/products/custom-architectural-profiles' },
		],
		image: metroCorporateHub,
		gallery: [metroCorporateHub, horizonTower, canalViewCampus, harbourMixedUse],
		href: '/projects/metro-corporate-hub',
	},
	{
		slug: 'canal-view-campus',
		title: 'Canal View Campus',
		category: 'Institutional',
		location: 'Faisalabad',
		year: '2025',
		shortDescription: 'Facade and opening systems for a new institutional campus in Faisalabad.',
		description:
			'Canal View Campus brought together curtain wall bays, classroom openings, and entrance systems under one aluminium package. Based in Faisalabad, our team supported local coordination from specification through finish selection.',
		scope: [
			'Facade profiles for academic and admin blocks',
			'Windows and doors for teaching spaces',
			'Entrance and lobby framing packages',
		],
		systems: [
			{ label: 'Curtain Wall Systems', href: '/products/curtain-wall-systems' },
			{ label: 'Windows & Doors', href: '/products/windows-and-doors' },
		],
		image: canalViewCampus,
		gallery: [canalViewCampus, horizonTower, metroCorporateHub, sereneHotel],
		href: '/projects/canal-view-campus',
	},
	{
		slug: 'harbour-mixed-use',
		title: 'Harbour Mixed-Use',
		category: 'Mixed-Use',
		location: 'Karachi',
		year: '2023',
		shortDescription: 'Retail podium and residential tower openings with matched finishes.',
		description:
			'Harbour Mixed-Use paired a retail podium with residential floors above. Pak Alumex supplied sliding systems, windows, and custom profiles so podium and tower detailing stayed visually aligned with durable coastal-ready finishes.',
		scope: [
			'Sliding and window systems for residential floors',
			'Retail front framing for podium levels',
			'Custom profiles for balcony and canopy interfaces',
		],
		systems: [
			{ label: 'Sliding Systems', href: '/products/sliding-systems' },
			{ label: 'Windows & Doors', href: '/products/windows-and-doors' },
			{ label: 'Custom Architectural Profiles', href: '/products/custom-architectural-profiles' },
		],
		image: harbourMixedUse,
		gallery: [harbourMixedUse, metroCorporateHub, crescentResidences, canalViewCampus],
		href: '/projects/harbour-mixed-use',
	},
	{
		slug: 'serene-hotel-islamabad',
		title: 'Serene Hotel Islamabad',
		category: 'Hospitality',
		location: 'Islamabad',
		year: '2025',
		shortDescription: 'Guest-room openings and lobby glazing for a boutique hospitality project.',
		description:
			'Serene Hotel Islamabad called for refined openings and lobby glazing that balance guest comfort with a calm architectural finish. We supplied window and door systems, partition-ready interiors profiles, and coordinated anodized and satin finishes.',
		scope: [
			'Guest-room window and door packages',
			'Lobby and amenity glazing frames',
			'Interior partition profiles for back-of-house zones',
		],
		systems: [
			{ label: 'Windows & Doors', href: '/products/windows-and-doors' },
			{ label: 'Office Partitions', href: '/products/office-partitions' },
		],
		image: sereneHotel,
		gallery: [sereneHotel, crescentResidences, harbourMixedUse, canalViewCampus],
		href: '/projects/serene-hotel-islamabad',
	},
];

export const projects = {
	label: 'Selected Projects',
	title: 'Built into Pakistan’s modern skyline.',
	description: 'From commercial towers to residential developments, our systems support demanding architectural briefs.',
	seoTitle: `Projects | ${site.name}`,
	seoDescription:
		'Selected Pak Alumex projects across Pakistan — commercial facades, residential systems, mixed-use, hospitality, and institutional aluminium packages.',
	items: projectItems,
} as const;

export const projectCategories = ['All', ...new Set(projectItems.map((item) => item.category))] as const;

export function getProjectBySlug(slug: string): Project | undefined {
	return projectItems.find((item) => item.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
	const current = getProjectBySlug(slug);
	if (!current) return projectItems.slice(0, limit);
	const sameCategory = projectItems.filter((item) => item.slug !== slug && item.category === current.category);
	const others = projectItems.filter((item) => item.slug !== slug && item.category !== current.category);
	return [...sameCategory, ...others].slice(0, limit);
}
