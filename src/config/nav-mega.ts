import { finishes } from './finishes';
import { systems } from './home';
import { productItems } from './products';
import { projectItems } from './projects';

const uniqueCategories = [...new Set(projectItems.map((item) => item.category))];
const featuredProject = projectItems[0];

export const projectsMega = {
	trigger: { label: 'Projects', href: '/projects' },
	columns: [
		{
			title: 'Project category',
			links: uniqueCategories.map((category) => ({
				label: category,
				href: '/projects',
			})),
			footer: { label: 'View all projects', href: '/projects' },
		},
		{
			title: 'Featured projects',
			links: projectItems.slice(0, 4).map((item) => ({
				label: item.title,
				href: item.href,
			})),
		},
		{
			title: 'Surface finishes',
			links: finishes.items.map((item) => ({
				label: item.title,
				href: '/#finishes',
			})),
		},
	],
	featured: {
		label: 'From vision to reality',
		title: featuredProject.title,
		description: featuredProject.shortDescription,
		href: featuredProject.href,
		cta: 'View project',
		image: featuredProject.image,
		imageAlt: `${featuredProject.title} — ${featuredProject.category}`,
	},
} as const;

export const productsMega = {
	trigger: { label: 'Products', href: '/products' },
	viewAll: { label: 'View all architectural systems', href: '/products' },
	categories: productItems.map((item) => ({
		id: item.slug,
		title: item.title,
		description: item.shortDescription,
		href: item.href,
		image: item.image,
		imageAlt: item.title,
		capabilities: systems.items.map((capability) => ({
			label: capability.title,
			description: capability.description,
		})),
		finishes: item.finishes.slice(0, 4).map((finish) => ({
			label: finish,
			href: '/#finishes',
		})),
		specs: item.specs,
	})),
	footerTiles: [
		{
			title: 'Request a quote',
			description: 'Share drawings or project details for systems, finishes, and timelines.',
			href: '/contact',
		},
		{
			title: 'Surface finishes',
			description: 'Explore mill, anodizing, powder coating, wood, and satin options.',
			href: '/#finishes',
		},
		{
			title: 'Talk to our team',
			description: 'Get technical guidance for architects, contractors, and fabricators.',
			href: '/contact',
		},
	],
} as const;
