import { finishes } from './finishes';
import { systems } from './home';
import { productItems, type ProductCategory } from './products';
import { projectItems } from './projects';

const uniqueCategories = [...new Set(projectItems.map((item) => item.category))];

export const projectsMega = {
	trigger: { label: 'Projects', href: '/projects' },
	columns: [
		{
			title: 'Project category',
			links: uniqueCategories.map((category) => ({
				label: category,
				href: '/projects',
			})),
			footers: [
				{ label: 'View all projects', href: '/projects' },
				{ label: 'Project Gallery', href: '/projects/gallery' },
			],
		},
		{
			title: 'Featured projects',
			links: projectItems.slice(0, 4).map((item) => ({
				label: item.title,
				href: item.href,
				slug: item.slug,
				description: item.shortDescription,
				image: item.image,
				imageAlt: `${item.title} — ${item.category}`,
			})),
		},
		{
			title: 'Surface finishes',
			links: finishes.items.map((item) => ({
				label: item.title,
				href: item.href,
			})),
		},
	],
	featured: {
		label: 'From vision to reality',
		cta: 'View project',
		items: projectItems.slice(0, 4).map((item) => ({
			slug: item.slug,
			title: item.title,
			description: item.shortDescription,
			href: item.href,
			image: item.image,
			imageAlt: `${item.title} — ${item.category}`,
		})),
	},
} as const;

const megaCategoryOrder = ['Doors', 'Windows', 'Facades', 'Louvers'] as const satisfies readonly ProductCategory[];

const megaCategoryCopy: Record<(typeof megaCategoryOrder)[number], string> = {
	Doors: 'Aluminium door systems for residential and commercial entrances — swinging, sliding, bi-fold, and more.',
	Windows: 'Precision window systems for daylight, ventilation, and weather performance across every opening type.',
	Facades: 'Curtain wall and facade systems engineered for high-rise strength, weather sealing, and clean sightlines.',
	Louvers: 'Architectural louver systems for solar control, screening, and facade rhythm.',
};

export const productsMega = {
	trigger: { label: 'Products', href: '/products' },
	viewAll: { label: 'View all architectural systems', href: '/products' },
	categories: megaCategoryOrder
		.map((category) => {
			const inCategory = productItems.filter((item) => item.category === category);
			const featured = inCategory[0];
			if (!featured) return null;

			const finishNames = [...new Set(inCategory.flatMap((item) => item.finishes))].slice(0, 4);

			return {
				id: category.toLowerCase(),
				title: category,
				description: megaCategoryCopy[category],
				href: `/products?category=${encodeURIComponent(category)}`,
				count: inCategory.length,
				image: featured.image,
				imageAlt: `${category} — ${featured.title}`,
				capabilities: systems.items.map((capability) => ({
					label: capability.title,
					description: capability.description,
				})),
				finishes: finishNames.map((finish) => {
					const match = finishes.items.find((f) => f.title === finish);
					return {
						label: finish,
						href: match?.href ?? '/#finishes',
					};
				}),
				specs: featured.specs,
			};
		})
		.filter((item): item is NonNullable<typeof item> => Boolean(item)),
	footerTiles: [
		{
			title: 'Request a quote',
			description: 'Share drawings or project details for systems, finishes, and timelines.',
			href: '/contact',
		},
		{
			title: 'Surface finishes',
			description: 'Explore wood texture, anodizing, and powder coating options.',
			href: '/#finishes',
		},
		{
			title: 'Talk to our team',
			description: 'Get technical guidance for architects, contractors, and fabricators.',
			href: '/contact',
		},
	],
} as const;
