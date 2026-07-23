import { site } from './site';

export const terms = {
	label: 'Legal',
	title: 'Terms of Use',
	description: 'Rules for using the Pak Alumex website and related inquiry tools. Last updated: July 22, 2026.',
	seoTitle: `Terms of Use | ${site.name}`,
	seoDescription:
		'Terms of use for the Pak Alumex website — site content, quote inquiries, intellectual property, and liability.',
	sections: [
		{
			heading: 'Agreement',
			paragraphs: [
				`By accessing ${site.url} (the “Site”), you agree to these Terms of Use. If you do not agree, please do not use the Site.`,
			],
		},
		{
			heading: 'Informational content',
			paragraphs: [
				'Product descriptions, finishes, project references, and other content on the Site are for general information. Specifications, availability, lead times, and pricing can change. Published material is not a formal offer, warranty, or engineering certification unless we confirm it in writing for a specific project.',
			],
		},
		{
			heading: 'Quotes and inquiries',
			paragraphs: [
				`Submitting a contact or quote form does not create a binding contract. Any quotation, proposal, or order becomes binding only when confirmed by ${site.name} in writing under agreed commercial terms. You are responsible for the accuracy of drawings, sizes, finishes, and quantities you provide.`,
			],
		},
		{
			heading: 'Acceptable use',
			paragraphs: ['You agree not to:'],
			list: [
				'Misuse the Site or form to send spam, malware, or unlawful content',
				'Attempt to disrupt, scrape at abusive scale, or reverse-engineer the Site',
				'Impersonate another person or misrepresent your affiliation when contacting us',
			],
		},
		{
			heading: 'Intellectual property',
			paragraphs: [
				`The ${site.name} name, logo, and Site content (including text, images, and layout) are owned by us or our licensors. You may view and share pages for ordinary business reference. You may not copy, republish, or commercially reuse Site materials without our prior written permission.`,
			],
		},
		{
			heading: 'Third-party links',
			paragraphs: [
				'The Site may link to third-party websites (for example maps or social profiles). We are not responsible for their content, availability, or practices.',
			],
		},
		{
			heading: 'Limitation of liability',
			paragraphs: [
				'To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the Site or reliance on Site content. Our total liability related to Site use is limited to the greatest extent allowed under applicable law.',
			],
		},
		{
			heading: 'Governing law',
			paragraphs: [
				`These terms are governed by the laws of Pakistan. Courts in Pakistan have exclusive jurisdiction over disputes arising from these terms or your use of the Site, without prejudice to any mandatory consumer protections that may apply.`,
			],
		},
		{
			heading: 'Changes',
			paragraphs: [
				'We may revise these terms from time to time. Continued use of the Site after changes are posted means you accept the updated terms. The “Last updated” date on this page shows the latest revision.',
			],
		},
	],
	contactNote: `Questions about these terms? Contact ${site.name} at ${site.email} or ${site.phone} (${site.address}).`,
} as const;
