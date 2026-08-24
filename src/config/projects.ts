import type { ImageMetadata } from 'astro';
import signatureBahria from '../assets/projects/1-project.png';
import tajPalace from '../assets/projects/2-project.png';
import allamaIqbalHostel from '../assets/projects/3-project.png';
import motherChildHospital from '../assets/projects/4-project.png';
import akbarPlaza from '../assets/projects/5-project.png';
import ucpSargodha from '../assets/projects/6-project.png';
import fbrRegionalTaxOffice from '../assets/projects/7-project.png';
import canalHospital from '../assets/projects/8-project.png';
import themeResidency2 from '../assets/projects/9-project.png';
import jamiaAlFurkanya from '../assets/projects/10-project.png';
import iqbalHeights from '../assets/projects/11-project.jpeg';
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
	systems: { label: string }[];
	image: ImageMetadata;
	gallery: ImageMetadata[];
	href: string;
};

export const projectItems: Project[] = [
	{
		slug: 'taj-palace',
		title: 'TAJ PALACE',
		category: 'Hospitality',
		location: 'Chishtian',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mega hospitality project.',
		description:
			'TAJ PALACE is a mega project featuring classical arched openings and ornate facade detailing. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, fabricated by AMEERKAY Aluminium, Chishtian.',
		scope: [
			'Architectural aluminium extrusion for windows and openings',
			'Powder coating finishes for durable exterior performance',
			'Fabrication by AMEERKAY Aluminium, Chishtian',
		],
		systems: [
			{ label: 'Casement Windows' },
			{ label: 'Swing Doors' },
		],
		image: tajPalace,
		gallery: [tajPalace, jamiaAlFurkanya, canalHospital, motherChildHospital],
		href: '/projects/taj-palace',
	},
	{
		slug: 'signature-bahria-town',
		title: 'SIGNATURE',
		category: 'Mixed-Use',
		location: 'Bahria Town Karachi',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mega mixed-use project by Property Master.',
		description:
			'SIGNATURE by Property Master is a mega mixed-use development in Bahria Town Karachi. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating for the project, delivered through authorized distributor Javaid Aluminium, Karachi.',
		scope: [
			'Architectural aluminium extrusion for facade and openings',
			'Powder coating finishes for durable exterior performance',
			'Supply coordination via Javaid Aluminium, Karachi',
		],
		systems: [
			{ label: 'Curtain Walls System' },
			{ label: 'Casement Windows' },
			{ label: 'French Sliding Door' },
		],
		image: signatureBahria,
		gallery: [signatureBahria, themeResidency2, akbarPlaza, tajPalace],
		href: '/projects/signature-bahria-town',
	},
	{
		slug: 'fbr-regional-tax-office',
		title: 'FBR Regional Tax Office',
		category: 'Commercial Facade',
		location: 'G-9 Islamabad',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for the FBR Regional Tax Office in Islamabad.',
		description:
			'FBR Regional Tax Office in G-9 Islamabad is a mega commercial facade project. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, fabricated by Sarhad Aluminium, Peshawar, and delivered by Haji Asghar.',
		scope: [
			'Architectural aluminium extrusion for curtain wall and openings',
			'Powder coating finishes for durable exterior performance',
			'Fabrication by Sarhad Aluminium, Peshawar',
		],
		systems: [
			{ label: 'Curtain Walls System' },
			{ label: 'Casement Windows' },
			{ label: 'Swing Doors' },
		],
		image: fbrRegionalTaxOffice,
		gallery: [fbrRegionalTaxOffice, jamiaAlFurkanya, ucpSargodha, allamaIqbalHostel],
		href: '/projects/fbr-regional-tax-office',
	},
	{
		slug: 'mother-child-care-hospital',
		title: 'Mother & Child Care Hospital',
		category: 'Institutional',
		location: 'Kot Addu, Muzaffargarh',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mega healthcare project in Kot Addu.',
		description:
			'Mother & Child Care Hospital in Kot Addu, District Muzaffargarh, is a mega institutional project. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, with Manzoor & Co as contractor.',
		scope: [
			'Architectural aluminium extrusion for windows and openings',
			'Powder coating finishes for durable exterior performance',
			'Contractor coordination with Manzoor & Co',
		],
		systems: [
			{ label: 'Casement Windows' },
			{ label: 'Swing Doors' },
			{ label: 'Curtain Walls System' },
		],
		image: motherChildHospital,
		gallery: [motherChildHospital, canalHospital, allamaIqbalHostel, ucpSargodha],
		href: '/projects/mother-child-care-hospital',
	},
	{
		slug: 'akbar-plaza',
		title: 'Akbar Plaza',
		category: 'Mixed-Use',
		location: 'Timergara',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mixed-use plaza in Timergara.',
		description:
			'Akbar Plaza in Timergara is a modern mixed-use development. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, fabricated by Ahmad Aluminium, Timergara.',
		scope: [
			'Architectural aluminium extrusion for facade and openings',
			'Powder coating finishes for durable exterior performance',
			'Fabrication by Ahmad Aluminium, Timergara',
		],
		systems: [
			{ label: 'Casement Windows' },
			{ label: 'French Sliding Door' },
			{ label: 'Swing Doors' },
		],
		image: akbarPlaza,
		gallery: [akbarPlaza, signatureBahria, themeResidency2, tajPalace],
		href: '/projects/akbar-plaza',
	},
	{
		slug: 'jamia-dar-ul-aloom-al-furkanya',
		title: 'Jamia Dar-ul-Aloom Al-Furkanya',
		category: 'Institutional',
		location: 'Peshawar',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mega institutional project in Peshawar.',
		description:
			'Jamia Dar-ul-Aloom Al-Furkanya in Peshawar is a mega institutional project featuring arched glazed elevations. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, fabricated by Sarhad Aluminium, Peshawar.',
		scope: [
			'Architectural aluminium extrusion for arched facade openings',
			'Powder coating finishes for durable exterior performance',
			'Fabrication by Sarhad Aluminium, Peshawar',
		],
		systems: [
			{ label: 'Curtain Walls System' },
			{ label: 'Casement Windows' },
			{ label: 'Contemporary Louver System' },
		],
		image: jamiaAlFurkanya,
		gallery: [jamiaAlFurkanya, fbrRegionalTaxOffice, ucpSargodha, allamaIqbalHostel],
		href: '/projects/jamia-dar-ul-aloom-al-furkanya',
	},
	{
		slug: 'allama-iqbal-hostel',
		title: 'Allama Iqbal Hostel',
		category: 'Institutional',
		location: 'Sports Complex Islamabad',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mega hostel project in Islamabad.',
		description:
			'Allama Iqbal Hostel at Sports Complex Islamabad is a mega institutional project. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, fabricated by Barki Contractors, Islamabad.',
		scope: [
			'Architectural aluminium extrusion for windows and openings',
			'Powder coating finishes for durable exterior performance',
			'Fabrication by Barki Contractors, Islamabad',
		],
		systems: [
			{ label: 'Casement Windows' },
			{ label: 'Swing Doors' },
		],
		image: allamaIqbalHostel,
		gallery: [allamaIqbalHostel, ucpSargodha, fbrRegionalTaxOffice, motherChildHospital],
		href: '/projects/allama-iqbal-hostel',
	},
	{
		slug: 'canal-hospital-sargodha',
		title: 'Canal Hospital',
		category: 'Institutional',
		location: 'Sargodha',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for Canal Hospital in Sargodha.',
		description:
			'Canal Hospital in Sargodha is a mega healthcare project. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, fabricated by Paragon Aluminium, Sargodha.',
		scope: [
			'Architectural aluminium extrusion for facade and openings',
			'Powder coating finishes for durable exterior performance',
			'Fabrication by Paragon Aluminium, Sargodha',
		],
		systems: [
			{ label: 'Curtain Walls System' },
			{ label: 'Casement Windows' },
			{ label: 'Contemporary Louver System' },
		],
		image: canalHospital,
		gallery: [canalHospital, motherChildHospital, ucpSargodha, tajPalace],
		href: '/projects/canal-hospital-sargodha',
	},
	{
		slug: 'theme-residency-2',
		title: 'Theme Residency 2',
		category: 'Mixed-Use',
		location: 'Karachi',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mega mixed-use residency in Karachi.',
		description:
			'Theme Residency 2 is a mega mixed-use development with retail podium and residential floors above. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, delivered through authorized distributor Javaid Aluminium, Karachi.',
		scope: [
			'Architectural aluminium extrusion for facade and openings',
			'Powder coating finishes for durable exterior performance',
			'Supply coordination via Javaid Aluminium, Karachi',
		],
		systems: [
			{ label: 'Casement Windows' },
			{ label: 'French Sliding Door' },
			{ label: 'Curtain Walls System' },
		],
		image: themeResidency2,
		gallery: [themeResidency2, signatureBahria, akbarPlaza, tajPalace],
		href: '/projects/theme-residency-2',
	},
	{
		slug: 'iqbal-heights',
		title: 'Iqbal Heights',
		category: 'Mixed-Use',
		location: 'Bani Gala, Islamabad',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mega mixed-use project in Islamabad.',
		description:
			'Iqbal Heights in Bani Gala, Islamabad is a mega mixed-use project featuring modern residential and commercial spaces. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, fabricated by Nadir Aluminium, Islamabad.',
		scope: [
			'Architectural aluminium extrusion for windows and openings',
			'Powder coating finishes for durable exterior performance',
			'Fabrication by Nadir Aluminium, Islamabad',
		],
		systems: [
			{ label: 'Casement Windows' },
			{ label: 'Sliding Door with Fixed Glass' },
			{ label: 'Curtain Walls System' },
		],
		image: iqbalHeights,
		gallery: [iqbalHeights, signatureBahria, themeResidency2, akbarPlaza],
		href: '/projects/iqbal-heights',
	},
	{
		slug: 'university-of-central-punjab-sargodha',
		title: 'University of Central Punjab, Sargodha',
		category: 'Institutional',
		location: 'Sargodha',
		year: '2024',
		shortDescription: 'Architectural aluminium extrusion and powder coating for a mega university campus project.',
		description:
			'University of Central Punjab, Sargodha is a mega institutional campus project. Pak Alumex Industries supplied durable architectural aluminium extrusion and powder coating, fabricated by Paragon Aluminium, Sargodha.',
		scope: [
			'Architectural aluminium extrusion for facade and openings',
			'Powder coating finishes for durable exterior performance',
			'Fabrication by Paragon Aluminium, Sargodha',
		],
		systems: [
			{ label: 'Casement Windows' },
			{ label: 'Curtain Walls System' },
			{ label: 'Swing Doors' },
		],
		image: ucpSargodha,
		gallery: [ucpSargodha, allamaIqbalHostel, motherChildHospital, canalHospital],
		href: '/projects/university-of-central-punjab-sargodha',
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

export const projectsGallery = {
	accent: 'Explore Creativity:',
	title: 'Welcome to Our Gallery',
	description: 'Browse selected project photography from facades, campuses, and mixed-use developments across Pakistan.',
	seoTitle: `Project Gallery | ${site.name}`,
	seoDescription:
		'Explore the Pak Alumex project gallery — architectural photography from commercial, residential, hospitality, and institutional aluminium projects.',
	items: projectItems.map((item) => ({
		slug: item.slug,
		title: item.title,
		category: item.category,
		location: item.location,
		year: item.year,
		image: item.image,
		href: item.href,
	})),
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
