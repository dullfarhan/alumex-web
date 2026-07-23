import heroImage from '../assets/hero.jpg';
import { hero } from './hero';
import { specs } from './home';
import { site } from './site';

export const about = {
	label: 'About',
	title: 'Engineering Excellence in Aluminium Solutions',
	description:
		'Pak Alumex Industries is a trusted manufacturer and supplier of premium architectural aluminium systems based in Faisalabad, Pakistan.',
	seoTitle: `About | ${site.name}`,
	seoDescription:
		'About Pak Alumex Industries — premium architectural aluminium systems from Faisalabad, Pakistan. Curtain walls, windows, doors, sliding systems, and custom profiles.',
	story: {
		label: 'Who we are',
		title: 'Trusted aluminium systems for modern architecture.',
		paragraphs: [
			'Pak Alumex Industries is a trusted manufacturer and supplier of premium architectural aluminium systems based in Faisalabad, Pakistan. We specialize in delivering innovative aluminium solutions that combine durability, precision, and modern aesthetics for residential, commercial, and industrial projects.',
			'With a commitment to quality craftsmanship and advanced manufacturing, we provide a comprehensive range of aluminium systems including curtain walls, windows, doors, sliding systems, office partitions, structural glazing, and custom architectural profiles. Every product is designed to meet the highest standards of performance, safety, and long-term reliability.',
			'Our experienced team works closely with architects, contractors, developers, and fabricators to transform ideas into practical, high-quality aluminium solutions. From consultation and design to manufacturing and installation support, we focus on delivering projects on time while maintaining exceptional quality.',
			"Driven by innovation and customer satisfaction, Pak Alumex Industries continues to invest in modern technology and skilled professionals to meet the evolving demands of Pakistan's construction industry.",
		],
		image: heroImage,
		imageAlt: 'Pak Alumex aluminium manufacturing and architectural systems',
	},
	stats: hero.stats.map(({ value, label }) => ({ value, label })),
	process: {
		label: 'How we work',
		title: 'From consultation to building-ready systems.',
		steps: [
			{
				number: '01',
				title: 'Consultation & design',
				description: 'We work with architects, contractors, and developers to define the right system for each project.',
			},
			{
				number: '02',
				title: 'Manufacturing',
				description: 'Premium architectural profiles produced with a focus on durability, precision, and finish quality.',
			},
			{
				number: '03',
				title: 'Systems & fabrication',
				description: 'Curtain walls, windows, doors, sliding systems, partitions, and custom profiles prepared for site use.',
			},
			{
				number: '04',
				title: 'Installation support',
				description: 'On-time delivery with installation support so projects move from fabrication to facade with confidence.',
			},
		],
	},
	quality: {
		label: 'Built to standard',
		title: 'Material, finish, and tolerance you can specify.',
		intro: 'Every product is designed for performance, safety, and long-term reliability across residential, commercial, and industrial builds.',
		specs,
	},
	mission: {
		label: 'Our Mission',
		text: 'To provide innovative, reliable, and high-quality aluminium systems that enhance modern architecture while delivering exceptional value and service to our customers.',
	},
	vision: {
		label: 'Our Vision',
		text: "To become one of Pakistan's leading architectural aluminium solution providers, recognized for quality, innovation, and long-lasting customer relationships.",
	},
	values: {
		label: 'Our Core Values',
		title: 'What guides every project we deliver.',
		items: [
			'Quality Without Compromise',
			'Innovation & Continuous Improvement',
			'Customer-Centric Approach',
			'Integrity & Transparency',
			'Precision Engineering',
			'Sustainable Manufacturing',
		],
	},
	cta: {
		title: 'Ready to specify Pak Alumex on your next project?',
		description: 'Share drawings or project details and our team will help with systems, finishes, and timelines.',
		href: '/contact',
		label: 'Request Quote',
	},
} as const;
