import millFinish from '../assets/finishes/mill-finish.jpg';
import powderCoating from '../assets/finishes/powder-coating.jpg';
import anodizing from '../assets/finishes/anodizing.jpg';
import woodFinish from '../assets/finishes/wood-finish.jpg';
import satinFinish from '../assets/finishes/satin-finish.jpg';
import valueAddition from '../assets/finishes/value-addition.jpg';

export const finishes = {
	label: 'Our Finishes',
	title: 'Surface finishes engineered for lasting performance.',
	description:
		'From mill finish to premium coatings, every surface treatment is applied with precision for durability, appearance, and architectural excellence.',
	items: [
		{ title: 'Mill Finish', image: millFinish },
		{ title: 'Powder Coating', image: powderCoating },
		{ title: 'Anodizing', image: anodizing },
		{ title: 'Wood Finish', image: woodFinish },
		{ title: 'Satin Finish', image: satinFinish },
		{ title: 'Value Addition', image: valueAddition },
	],
} as const;
