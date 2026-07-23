import { finishes } from './finishes';
import { products } from './products';
import { projects } from './projects';

const uniqueCategories = [...new Set(projects.items.map((item) => item.category))];
const featured = projects.items[0];

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
		title: featured.title,
		description: projects.description,
		href: '/#projects',
		cta: 'View projects',
		image: featured.image,
		imageAlt: `${featured.title} — ${featured.category}`,
	},
} as const;
