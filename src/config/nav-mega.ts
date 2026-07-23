import { finishes } from './finishes';
import { specs, systems } from './home';
import { products } from './products';
import { projects } from './projects';

const uniqueCategories = [...new Set(projects.items.map((item) => item.category))];
const featuredProject = projects.items[0];

export const projectsMega = {
	trigger: { label: 'Projects', href: '/#projects' },
	columns: [
		{
			title: 'Project category',
			links: uniqueCategories.map((category) => ({
				label: category,
				href: '/#projects',
			})),
			footer: { label: 'View all projects', href: '/#projects' },
		},
		{
			title: 'Product systems',
			links: products.items.map((item) => ({
				label: item.title,
				href: '/#products',
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
		description: projects.description,
		href: '/#projects',
		cta: 'View projects',
		image: featuredProject.image,
		imageAlt: `${featuredProject.title} — ${featuredProject.category}`,
	},
} as const;

export const productsMega = {
	trigger: { label: 'Products', href: '/#products' },
	viewAll: { label: 'View all architectural systems', href: '/#products' },
	categories: products.items.map((item, index) => ({
		id: `product-${index}`,
		title: item.title,
		description: item.description,
		href: item.href === '/products' ? '/#products' : item.href,
		image: item.image,
		imageAlt: item.title,
		capabilities: systems.items.map((capability) => ({
			label: capability.title,
			description: capability.description,
		})),
		finishes: finishes.items.slice(0, 4).map((finish) => ({
			label: finish.title,
			href: '/#finishes',
		})),
		specs: specs.map((spec) => ({
			label: spec.label,
			value: spec.value,
		})),
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
