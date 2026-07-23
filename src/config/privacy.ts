import { site } from './site';

export const privacy = {
	label: 'Legal',
	title: 'Privacy Policy',
	description: 'How Pak Alumex handles information you share through this website. Last updated: July 22, 2026.',
	seoTitle: `Privacy Policy | ${site.name}`,
	seoDescription:
		'Privacy policy for Pak Alumex Industries — how we collect, use, and protect information from quote and contact inquiries.',
	sections: [
		{
			heading: 'Who we are',
			paragraphs: [
				`${site.name} (“we”, “us”) operates ${site.url} from ${site.address}. This policy explains what information we collect when you use our website or contact us, and how we use it.`,
			],
		},
		{
			heading: 'Information we collect',
			paragraphs: [
				'We collect information you choose to send us, mainly through our contact and quote inquiry form.',
			],
			list: [
				'Name and company',
				'Email address and phone number',
				'Inquiry type and project message',
				'Any files or details you attach or include in your message',
			],
		},
		{
			heading: 'How we use your information',
			paragraphs: ['We use inquiry details to:'],
			list: [
				'Respond to quote requests and technical questions',
				'Follow up on projects, finishes, and delivery timelines',
				'Improve how we handle and prioritize inbound requests',
			],
		},
		{
			heading: 'Form processing',
			paragraphs: [
				'Our contact form may be submitted through a third-party form service (such as Formspree) or delivered by email. Those providers process the data you submit solely to deliver your message to us, under their own terms and privacy practices.',
			],
		},
		{
			heading: 'Cookies and analytics',
			paragraphs: [
				'This site is a static marketing website. We do not run advertising trackers. Your browser may store standard technical data (such as IP address and user agent) in server or hosting logs. If we add analytics later, we will update this policy.',
			],
		},
		{
			heading: 'Sharing and retention',
			paragraphs: [
				'We do not sell your personal information. We may share inquiry details with team members or trusted service providers who help us respond to your request. We keep inquiry records only as long as needed for business follow-up and ordinary record-keeping, then delete or archive them as appropriate.',
			],
		},
		{
			heading: 'Your requests',
			paragraphs: [
				`If you want to update or remove information you previously sent us, email ${site.email} with enough detail for us to locate your inquiry. We will respond within a reasonable time.`,
			],
		},
		{
			heading: 'Changes',
			paragraphs: [
				'We may update this policy when our practices or tools change. The “Last updated” date at the top of this page will reflect the latest revision.',
			],
		},
	],
	contactNote: `Questions about privacy? Contact us at ${site.email} or ${site.phone}.`,
} as const;
