import horizonTower from '../assets/projects/horizon-tower.jpg';
import crescentResidences from '../assets/projects/crescent-residences.jpg';
import metroCorporateHub from '../assets/projects/metro-corporate-hub.jpg';

export const projects = {
	label: 'Selected Projects',
	title: 'Built into Pakistan’s modern skyline.',
	description: 'From commercial towers to residential developments, our systems support demanding architectural briefs.',
	items: [
		{
			title: 'Horizon Tower',
			category: 'Commercial Facade',
			location: 'Lahore',
			image: horizonTower,
		},
		{
			title: 'Crescent Residences',
			category: 'Residential Systems',
			location: 'Islamabad',
			image: crescentResidences,
		},
		{
			title: 'Metro Corporate Hub',
			category: 'Curtain Wall',
			location: 'Karachi',
			image: metroCorporateHub,
		},
	],
} as const;
