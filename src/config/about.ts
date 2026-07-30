import heroImage from '../assets/hero.jpg';

export const about = {
	label: 'About',
	title: 'Building Modern Spaces with Premium Aluminium Solutions',
	description:
		'At Pak Alumex Industries, we manufacture high-quality architectural aluminium profiles designed to deliver strength, durability, and elegant aesthetics for modern residential, commercial, and industrial projects.',
	seoTitle: 'Pak Alumex Industries | Premium Aluminium Profiles Manufacturer in Pakistan',
	seoDescription:
		'Pak Alumex Industries manufactures premium architectural aluminium profiles for windows, doors, façades, and commercial projects. Quality aluminium solutions engineered for strength, durability, and modern design across Pakistan.',
	story: {
		label: 'Who we are',
		title: 'Excellence in Aluminium Manufacturing',
		paragraphs: [
			'Pak Alumex Industries is a Pakistani manufacturer specializing in premium aluminium profiles, architectural systems, and aluminium solutions for windows, doors, façades, and modern construction projects. Our products are engineered to combine exceptional strength with refined aesthetics, ensuring every project meets today\'s architectural standards.',
			'Driven by quality and innovation, we utilize advanced manufacturing processes and precision engineering to produce aluminium sections that offer superior weather resistance, long-lasting performance, and reliable structural integrity. Every product is designed to enhance both functionality and appearance.',
			'Over the years, we have built strong relationships with architects, contractors, builders, fabricators, and homeowners by consistently delivering dependable aluminium solutions for projects of every scale. Our commitment to quality and customer satisfaction has established us as a trusted manufacturing partner.',
			"From our manufacturing facility in Faisalabad, we continue to support the construction industry with products that meet modern design trends while maintaining the durability required for Pakistan's diverse environmental conditions.",
		],
		image: heroImage,
		imageAlt: 'Pak Alumex manufacturing facility and aluminium production',
	},
	stats: [
		{ label: 'Industry', value: 'Aluminium Manufacturing' },
		{ label: 'Products', value: 'Architectural Aluminium Profiles' },
		{ label: 'Applications', value: 'Windows, Doors, Facades, Partitions' },
		{ label: 'Headquarters', value: 'Gojra, Faisalabad, Pakistan' },
		{ label: 'Service Coverage', value: 'Nationwide' },
		{ label: 'Manufacturing Focus', value: 'Residential, Commercial & Industrial' },
	],
	process: {
		label: 'How we work',
		title: 'From consultation to delivery & support.',
		steps: [
			{
				number: '01',
				title: 'Consultation',
				description:
					'We understand project requirements, architectural specifications, and customer expectations before production begins.',
			},
			{
				number: '02',
				title: 'Precision Manufacturing',
				description:
					'Using modern production techniques, we manufacture aluminium profiles with strict quality control and dimensional accuracy.',
			},
			{
				number: '03',
				title: 'Quality Inspection',
				description:
					'Every product undergoes inspection for durability, finish quality, strength, and consistency before dispatch.',
			},
			{
				number: '04',
				title: 'Delivery & Support',
				description:
					'Products are delivered efficiently with ongoing support to contractors, fabricators, architects, and project partners.',
			},
		],
	},
	quality: {
		label: 'Quality & Specifications',
		title: 'Engineered for Performance',
		intro:
			'Pak Alumex Industries manufactures aluminium profiles that combine structural strength with premium finishing to meet the demands of modern architecture.',
		groups: [
			{
				label: 'Materials',
				items: [
					'High-quality architectural aluminium',
					'Premium aluminium extrusion profiles',
					'Durable structural sections',
				],
			},
			{
				label: 'Surface Finish',
				items: ['Powder Coating', 'Anodized Finish', 'Decorative Colour Finishes'],
			},
			{
				label: 'Performance Features',
				items: [
					'Excellent weather resistance',
					'Corrosion-resistant',
					'High structural strength',
					'Long service life',
					'Low maintenance',
					'Precision engineered profiles',
					'Smooth finish for modern aesthetics',
				],
			},
		],
	},
	mission: {
		label: 'Our Mission',
		text: 'To manufacture premium-quality aluminium profiles that deliver exceptional durability, precision, and value while supporting architects, builders, and homeowners in creating stronger, smarter, and more beautiful spaces.',
	},
	vision: {
		label: 'Our Vision',
		text: "To become Pakistan's most trusted aluminium manufacturing company by setting new standards in innovation, quality, customer satisfaction, and sustainable industrial excellence.",
	},
	values: {
		label: 'Our Core Values',
		title: 'What guides every project we deliver.',
		items: [
			'Quality Excellence',
			'Precision Engineering',
			'Customer Commitment',
			'Innovation',
			'Reliability',
			'Integrity',
			'Continuous Improvement',
		],
	},
	cta: {
		title: 'Ready to Build with Premium Aluminium?',
		description:
			"Whether you're working on residential, commercial, or industrial projects, Pak Alumex Industries is your trusted partner for high-performance aluminium solutions.",
		href: '/contact',
		label: 'Request a Quote',
	},
} as const;
