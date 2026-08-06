import heroImage from '../assets/hero.jpg';

export const about = {
	label: 'About',
	title: 'About Us',
	description:
		'At Pak Alumex, we are building excellence every day. Modern production facilities, skilled workers and strict quality control procedures help us produce superior aluminium profiles.',
	seoTitle: 'About Pak Alumex | Leading Aluminium Manufacturer in Pakistan',
	seoDescription:
		'Pak Alumex is a leading aluminium manufacturer and pioneer in standardized powder coatings, with extrusion, anodizing, and a nationwide dealership network across Pakistan.',
	story: {
		label: 'Why Pak Alumex',
		title: 'Building Excellence Every Day',
		paragraphs: [
			'At Pak Alumex, we are building excellence every day. Modern production facilities, skilled workers and strict quality control procedures help us produce superior aluminium profiles.',
			'Pak Alumex is the leading manufacturer of aluminium profiles and that is not a coincidence. Technology, product knowledge and development are all important but equally significant is the desire, courage, power and forward-looking spirit that drives our team to success. It\'s all about the passion within us, the love of aluminium!',
			'Eager to become the largest aluminium company in Pakistan, Pak Alumex is continuously modernizing our production facility with imported tools and machinery.',
		],
		image: heroImage,
		imageAlt: 'Pak Alumex manufacturing facility and aluminium production',
	},
	stats: [
		{ label: 'Extrusion Furnaces', value: '2 Large Aluminium Extrusion Furnaces' },
		{ label: 'Extrusion Lines', value: '2 Aluminium Extrusion Lines' },
		{ label: 'Powder Coating', value: '3 Powder Coating Lines' },
		{ label: 'Anodizing Plant', value: '1 Plant with 2200 Amp Rectifiers' },
		{ label: 'Wood Finish', value: 'State-of-the-Art Wood Finish Line' },
		{ label: 'Dealership Network', value: 'Nationwide Across Pakistan' },
	],
	whyChooseUs: {
		label: 'Why Choose Us',
		title: 'Why Choose Us?',
		items: [
			{
				title: 'Quality Products',
				description: 'More than 300 profiles manufactured as per international standards.',
			},
			{
				title: 'Fast Service',
				description:
					'A dedicated team ensuring quick response, stock management and fast delivery.',
			},
			{
				title: 'Cost Efficient',
				description: 'Competitive and affordable prices to save your time and money.',
			},
		],
	},
	quality: {
		label: 'Product Range',
		title: 'Built for Modern Building Needs',
		intro:
			'By focusing on the specifications and requirements of our customers, Pak Alumex has created a product portfolio that incorporates innovative products and responds flawlessly to modern building needs. The needs of our customers are quite widespread, and so is our product portfolio. We design each of our products with one thought in mind: how to offer the best possible solution and maximize the value for our customers.',
		groups: [
			{
				label: 'Windows & Doors',
				items: [
					'Hinged Window & Door Systems',
					'Sliding Window & Door Systems',
					'Bi-Folding Door Systems',
					'Entrance Doors',
					'Fire Resistant & Heavy-duty Doors',
					'Curtain Wall & Facade Systems',
				],
			},
			{
				label: 'Architectural Systems',
				items: [
					'Office Partition Systems',
					'Solar Shading Systems',
					'Cladding Systems',
					'Railing Systems',
					'Pergola Systems',
					'Decking Systems',
				],
			},
			{
				label: 'Specialty & Custom',
				items: [
					'Elevators',
					'Noise Barriers',
					'Textile Sections',
					'Solar Panel Stands',
					'Custom Made Designs',
					'Kitchen Cabinets',
				],
			},
		],
	},
	qualityControl: {
		label: 'Quality Control',
		text: 'At Pak Alumex, product quality is our core value. Each product has to go through strict quality control procedures. From acquiring raw material to finished aluminium products, our team of experts work hard to supply our customers with high-quality aluminium products. Our zero compromise on bad quality policy led us to become Pakistan\'s Best Powder Coating Aluminium Company.',
	},
	mission: {
		label: 'Our Mission',
		text: 'To provide the most durable aluminium products.',
	},
	team: {
		label: 'Our Team',
		text: 'Our team was selected from a variety of backgrounds to promote a creative environment. We respect the experience and skills of our staff and value the contribution that every person brings to the business team. Our goal is to work together to reward, train and develop our staff in ways that acknowledge performance and individual abilities.',
	},
	supplyChain: {
		label: "Pak Alumex's Supply Chain",
		text: 'Our vast network of dealerships in many cities of Pakistan enables our end users to procure high-quality aluminium products in no time. Pak Alumex\'s main distribution center also caters to large contract-based orders.',
	},
	cta: {
		title: 'Ready to Build with Premium Aluminium?',
		description:
			'Whether you need a single system or a large contract order, Pak Alumex is your partner for high-quality aluminium products across Pakistan.',
		href: '/contact',
		label: 'Request a Quote',
	},
} as const;
