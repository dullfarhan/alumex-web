import heroImage from '../assets/hero.jpg';

export const about = {
	label: 'About',
	title: 'About Us',
	description:
		'Pak Alumex is the leading manufacturer of aluminium with our dealership network all over Pakistan. We are proud to be a pioneer in Standardized Powder coatings.',
	seoTitle: 'About Pak Alumex | Leading Aluminium Manufacturer in Pakistan',
	seoDescription:
		'Pak Alumex is a leading aluminium manufacturer and pioneer in standardized powder coatings, with extrusion, anodizing, and a nationwide dealership network across Pakistan.',
	story: {
		label: 'Who we are',
		title: 'Leading Aluminium Manufacturing Across Pakistan',
		paragraphs: [
			'Pak Alumex is the leading manufacturer of aluminium with our dealership network all over Pakistan. We are proud to be a pioneer in Standardized Powder coatings.',
			'Eager to become the largest aluminium company in Pakistan, Pak Alumex is continuously modernizing our production facility with imported tools and machinery.',
			'By focusing on the specifications and requirements of customers, Pak Alumex has created a product portfolio that incorporates innovative products and responds flawlessly to modern building needs. The needs of our customers are quite widespread, and so is our product portfolio.',
			"Our vast network of dealerships in many cities of Pakistan enables our end users to procure high-quality aluminium products in no time. Pak Alumex's main distribution center also caters to large contract-based orders.",
		],
		image: heroImage,
		imageAlt: 'Pak Alumex manufacturing facility and aluminium production',
	},
	stats: [
		{ label: 'Extrusion Furnaces', value: '2 Large Aluminium Furnaces' },
		{ label: 'Extrusion Lines', value: '2 Aluminium Extrusion Lines' },
		{ label: 'Powder Coating', value: '6 Powder Coating Lines' },
		{ label: 'Anodizing Plant', value: '2200 Amp Rectifiers' },
		{ label: 'Wood Finish', value: 'State-of-the-Art Wood Finish Line' },
		{ label: 'Dealership Network', value: 'Nationwide Across Pakistan' },
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
					'Using modern production techniques and imported tools and machinery, we manufacture aluminium profiles with strict quality control.',
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
					'Our dealership network and main distribution center deliver efficiently — from retail orders to large contract-based projects.',
			},
		],
	},
	quality: {
		label: 'Product Portfolio',
		title: 'Built for Modern Building Needs',
		intro:
			'By focusing on the specifications and requirements of customers, Pak Alumex has created a product portfolio that incorporates innovative products and responds flawlessly to modern building needs.',
		groups: [
			{
				label: 'Windows & Doors',
				items: [
					'Hinged window & door systems',
					'Sliding window & door systems',
					'Bi-folding door systems',
					'Entrance doors',
					'Fire resistant & heavy duty doors',
					'Curtain wall & facade systems',
				],
			},
			{
				label: 'Architectural Systems',
				items: [
					'Office partition systems',
					'Solar shading systems',
					'Cladding systems',
					'Railing systems',
					'Pergola systems',
					'Decking systems',
				],
			},
			{
				label: 'Specialty & Custom',
				items: [
					'Elevators',
					'Noise barriers',
					'Textile sections',
					'Solar panel stands',
					'Custom made designs',
					'Kitchen cabinets',
				],
			},
		],
	},
	mission: {
		label: 'Our Mission',
		text: 'To manufacture high-quality aluminium products that meet customer specifications and modern building needs — delivered quickly through our nationwide dealership network and distribution center.',
	},
	vision: {
		label: 'Our Vision',
		text: "To become the largest aluminium company in Pakistan by continuously modernizing our production facilities and setting the standard in powder coating and architectural aluminium systems.",
	},
	values: {
		label: 'Our Core Values',
		title: 'What guides every project we deliver.',
		items: [
			'Quality Excellence',
			'Customer Focus',
			'Innovation',
			'Reliability',
			'Nationwide Reach',
			'Continuous Modernization',
		],
	},
	cta: {
		title: 'Ready to Build with Premium Aluminium?',
		description:
			'Whether you need a single system or a large contract order, Pak Alumex is your partner for high-quality aluminium products across Pakistan.',
		href: '/contact',
		label: 'Request a Quote',
	},
} as const;
