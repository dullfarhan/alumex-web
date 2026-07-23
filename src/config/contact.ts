import { footer } from './footer';
import { site } from './site';

export const contact = {
	label: 'Contact',
	title: 'Request a quote or technical guidance.',
	description:
		'Tell us about your project and our team will help with systems, finishes, and delivery timelines.',
	seoTitle: `Contact | ${site.name}`,
	seoDescription:
		'Contact Pak Alumex for aluminium extrusion quotes, facade systems, finishes, and technical support. Plant in Lahore, Pakistan.',
	/** Paste your Formspree (or similar) endpoint here */
	formAction: 'https://formspree.io/f/your-form-id',
	hours: footer.hours,
	inquiryTypes: [
		'Curtain Walls',
		'Windows & Doors',
		'Sliding Systems',
		'Custom Extrusion',
		'Surface Finishes',
		'Other',
	],
	rfqTips: [
		'Project type and building use',
		'Drawings or approximate profile sizes',
		'Preferred finish (mill, anodized, powder, wood)',
		'Quantity estimate and required timeline',
	],
	faq: [
		{
			question: 'How long does a quote usually take?',
			answer:
				'Standard inquiries are reviewed within 1–2 business days. Complex facade packages may need a short technical review before we confirm pricing.',
		},
		{
			question: 'Do you need drawings before quoting?',
			answer:
				'Drawings help us quote accurately. If you only have sizes and a finish preference, send those and we will guide the next step.',
		},
		{
			question: 'Can we visit the plant?',
			answer:
				'Yes. Schedule a visit during plant hours and we will arrange a walkthrough of extrusion, finishing, and fabrication capability.',
		},
	],
} as const;
