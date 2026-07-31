import type { ImageMetadata } from 'astro';
import biFoldDoors from '../assets/products/bi-fold-doors.jpg';
import automatedDoors from '../assets/products/automated-doors.jpg';
import swingDoors from '../assets/products/swing-doors.jpg';
import revolvingDoor from '../assets/products/revolving-door.jpg';
import stableDoor from '../assets/products/stable-door.jpg';
import swingDoorFixedPanel from '../assets/products/swing-door-fixed-panel.jpg';
import aluminiumDoorWithSheet from '../assets/products/aluminium-door-with-sheet.jpg';
import frenchSlidingDoor from '../assets/products/french-sliding-door.jpg';
import slidingDoorFixedGlass from '../assets/products/sliding-door-fixed-glass.jpg';
import louversDoorSsHandle from '../assets/products/louvers-door-ss-handle.jpg';
import casementWindows from '../assets/products/casement-windows.jpg';
import biFoldingWindows from '../assets/products/bi-folding-windows.jpg';
import skylightWindows from '../assets/products/skylight-windows.jpg';
import bayWindows from '../assets/products/bay-windows.jpg';
import miniOpenable from '../assets/products/mini-openable.jpg';
import fixedWindow from '../assets/products/fixed-window.jpg';
import dormerWindow from '../assets/products/dormer-window.jpg';
import sashWindow from '../assets/products/sash-window.jpg';
import topHungOpenableWindows from '../assets/products/top-hung-openable-windows.jpg';
import oneSideReflectiveGlass from '../assets/products/one-side-reflective-glass.jpg';
import slidingWindow from '../assets/products/sliding-window.jpg';
import curtainWallsSystem from '../assets/products/curtain-walls-system.jpg';
import acpCladdingCeiling from '../assets/products/acp-cladding-ceiling.jpg';
import contemporaryLouverSystem from '../assets/products/contemporary-louver-system.jpg';
import aluminumLouvers from '../assets/products/aluminum-louvers.jpg';
import mashrabiya from '../assets/products/mashrabiya.jpg';
import aluminiumLadder from '../assets/products/aluminium-ladder.jpg';
import quranStand from '../assets/products/quran-stand.jpg';
import { site } from './site';

export type ProductCategory = 'Doors' | 'Windows' | 'Facades' | 'Louvers' | 'Specialty';

export type ProductHighlightIcon = 'strength' | 'weather' | 'precision' | 'aesthetics';

export type Product = {
	slug: string;
	title: string;
	category: ProductCategory;
	shortDescription: string;
	description: string;
	image: ImageMetadata;
	gallery: ImageMetadata[];
	features: string[];
	specs: { label: string; value: string }[];
	finishes: string[];
	applications: { title: string; description: string; image: ImageMetadata }[];
	highlights: { label: string; icon: ProductHighlightIcon }[];
	performance: {
		axes: { label: string; value: number }[];
		metrics: { label: string; value: string }[];
	};
	href: string;
};

const defaultHighlights: Product['highlights'] = [
	{ label: 'High Strength', icon: 'strength' },
	{ label: 'Weather Resistant', icon: 'weather' },
	{ label: 'Precision Engineered', icon: 'precision' },
	{ label: 'Clean Modern Aesthetics', icon: 'aesthetics' },
];

const doorAxes = [
	{ label: 'Structural Strength', value: 86 },
	{ label: 'Weather Resistance', value: 84 },
	{ label: 'Thermal Performance', value: 78 },
	{ label: 'Acoustic Insulation', value: 76 },
	{ label: 'Design Flexibility', value: 88 },
] as const;

const windowAxes = [
	{ label: 'Structural Strength', value: 80 },
	{ label: 'Weather Resistance', value: 88 },
	{ label: 'Thermal Performance', value: 86 },
	{ label: 'Acoustic Insulation', value: 82 },
	{ label: 'Design Flexibility', value: 84 },
] as const;

const facadeAxes = [
	{ label: 'Structural Strength', value: 92 },
	{ label: 'Weather Resistance', value: 90 },
	{ label: 'Thermal Performance', value: 80 },
	{ label: 'Acoustic Insulation', value: 74 },
	{ label: 'Design Flexibility', value: 88 },
] as const;

const louverAxes = [
	{ label: 'Structural Strength', value: 84 },
	{ label: 'Weather Resistance', value: 86 },
	{ label: 'Thermal Performance', value: 70 },
	{ label: 'Acoustic Insulation', value: 68 },
	{ label: 'Design Flexibility', value: 94 },
] as const;

const specialtyAxes = [
	{ label: 'Structural Strength', value: 88 },
	{ label: 'Weather Resistance', value: 72 },
	{ label: 'Thermal Performance', value: 50 },
	{ label: 'Acoustic Insulation', value: 40 },
	{ label: 'Design Flexibility', value: 90 },
] as const;

const baseSpecs = [
	{ label: 'Material', value: '6063-T5 Alloy' },
	{ label: 'Tolerance', value: '±0.2mm Precision' },
] as const;

const allFinishes = ['Anodizing', 'Powder Coating', 'Wood Texture'] as const;

export { finishDescriptions } from './finishes';

export const productItems: Product[] = [
	{
		slug: 'bi-fold-doors',
		title: 'Bi-fold Doors',
		category: 'Doors',
		shortDescription: 'Folding aluminium door systems that open wide for indoor-outdoor living.',
		description:
			'Bi-fold door systems that stack neatly to open entire walls. Engineered tracks and aluminium frames deliver smooth travel, weather sealing, and clean contemporary lines for homes and hospitality spaces.',
		image: biFoldDoors,
		gallery: [biFoldDoors, frenchSlidingDoor, swingDoors, slidingDoorFixedGlass],
		features: [
			'Multi-panel folding with compact stack',
			'Smooth bottom or top-hung track options',
			'Weather-sealed frames for exposed openings',
			'Compatible with thermal-break inserts',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Patio & terrace openings' },
			{ label: 'Operation', value: 'Bi-fold multi-panel' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Floor / head track' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Living Rooms', description: 'Wide openings that connect living spaces to gardens.', image: biFoldDoors },
			{ title: 'Hospitality Terraces', description: 'Flexible cafe and lounge fronts that open fully.', image: frenchSlidingDoor },
			{ title: 'Villas', description: 'Premium residential patio spans with refined finishes.', image: swingDoors },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Panel Span', value: 'Up to 1.2 m' },
				{ label: 'Cycle Durability', value: '80k+ cycles' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/bi-fold-doors',
	},
	{
		slug: 'automated-doors',
		title: 'Automated Doors',
		category: 'Doors',
		shortDescription: 'Motorized aluminium entrance doors for high-traffic commercial entries.',
		description:
			'Automated aluminium door systems for lobbies, retail, and institutional entrances. Profiles support operator hardware with reliable sealing, clean sightlines, and durable finishes for continuous daily use.',
		image: automatedDoors,
		gallery: [automatedDoors, revolvingDoor, swingDoors, frenchSlidingDoor],
		features: [
			'Operator-ready aluminium framing',
			'Designed for high-traffic entrances',
			'Reliable sealing and safety clearances',
			'Finish options for brand-matched lobbies',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Commercial entrances' },
			{ label: 'Operation', value: 'Automatic sliding / swing' },
			{ label: 'Performance', value: 'High-cycle rated' },
			{ label: 'Installation', value: 'Operator integrated' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Office Lobbies', description: 'Hands-free entrances for corporate towers.', image: automatedDoors },
			{ title: 'Retail Fronts', description: 'Smooth automatic access for busy storefronts.', image: revolvingDoor },
			{ title: 'Hospitals & Campuses', description: 'Accessible entries for institutional buildings.', image: swingDoors },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Cycle Durability', value: '200k+ cycles' },
				{ label: 'Opening Width', value: 'Project sized' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/automated-doors',
	},
	{
		slug: 'swing-doors',
		title: 'Swing Doors',
		category: 'Doors',
		shortDescription: 'Classic hinged aluminium doors for residential and commercial entrances.',
		description:
			'Swing door systems with precision aluminium frames for main entrances and internal openings. Built for weather performance, hardware flexibility, and finishes that match modern elevations.',
		image: swingDoors,
		gallery: [swingDoors, swingDoorFixedPanel, aluminiumDoorWithSheet, stableDoor],
		features: [
			'Single and double-leaf configurations',
			'Hardware-ready for locks and closers',
			'Weather stripping for external use',
			'Glazed or solid panel options',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Entrance & passage doors' },
			{ label: 'Operation', value: 'Hinged swing' },
			{ label: 'Performance', value: 'Weather & impact ready' },
			{ label: 'Installation', value: 'Frame & leaf' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Main Entrances', description: 'Durable hinged doors for homes and offices.', image: swingDoors },
			{ title: 'Side Entries', description: 'Secondary openings with matching finishes.', image: swingDoorFixedPanel },
			{ title: 'Commercial Suites', description: 'Clean aluminium doors for tenant spaces.', image: aluminiumDoorWithSheet },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Leaf Height', value: 'Up to 2.4 m' },
				{ label: 'Air Infiltration', value: 'Class A3' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/swing-doors',
	},
	{
		slug: 'revolving-door',
		title: 'Revolving Door',
		category: 'Doors',
		shortDescription: 'Aluminium revolving door systems for climate-controlled lobby entries.',
		description:
			'Revolving door packages that reduce lobby air exchange while keeping pedestrian flow continuous. Aluminium framing supports glazed wings, safety detailing, and premium entrance finishes.',
		image: revolvingDoor,
		gallery: [revolvingDoor, automatedDoors, swingDoors, frenchSlidingDoor],
		features: [
			'Reduced lobby air exchange',
			'Glazed wing construction',
			'Designed for continuous pedestrian flow',
			'Premium lobby-ready finishes',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Hotel & tower lobbies' },
			{ label: 'Operation', value: 'Manual / motorized revolving' },
			{ label: 'Performance', value: 'Climate buffer entry' },
			{ label: 'Installation', value: 'Drum & canopy package' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Hotel Lobbies', description: 'Climate-buffered guest entrances with polished finish.', image: revolvingDoor },
			{ title: 'Corporate Towers', description: 'High-volume entries with reduced HVAC loss.', image: automatedDoors },
			{ title: 'Banks & Institutions', description: 'Secure, formal entrance statements.', image: swingDoors },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Drum Diameter', value: 'Project sized' },
				{ label: 'Throughput', value: 'High volume' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/revolving-door',
	},
	{
		slug: 'stable-door',
		title: 'Stable Door',
		category: 'Doors',
		shortDescription: 'Split-leaf aluminium stable doors for kitchens, shops, and courtyards.',
		description:
			'Stable doors with independently operable upper and lower leaves. Aluminium construction keeps the classic Dutch-door function while delivering modern weather sealing and finish quality.',
		image: stableDoor,
		gallery: [stableDoor, swingDoors, aluminiumDoorWithSheet, louversDoorSsHandle],
		features: [
			'Independent upper and lower leaves',
			'Ventilation with security when half-open',
			'Weather-sealed for external use',
			'Hardware matched to residential detailing',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Kitchen & courtyard doors' },
			{ label: 'Operation', value: 'Split hinged leaves' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Frame & dual leaf' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Kitchens', description: 'Half-open ventilation while keeping pets and kids in.', image: stableDoor },
			{ title: 'Courtyard Shops', description: 'Friendly storefronts with classic split-leaf charm.', image: louversDoorSsHandle },
			{ title: 'Service Entries', description: 'Practical dual-leaf doors for utility spaces.', image: aluminiumDoorWithSheet },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Leaf Split', value: 'Upper / lower' },
				{ label: 'Air Infiltration', value: 'Class A2' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/stable-door',
	},
	{
		slug: 'swing-door-fixed-panel',
		title: 'Swing Door with Fixed Panel',
		category: 'Doors',
		shortDescription: 'Hinged door paired with a fixed sidelight for wider entrance compositions.',
		description:
			'Swing door and fixed-panel combinations for generous entrance compositions. Shared aluminium framing keeps sightlines consistent while adding daylight beside the operable leaf.',
		image: swingDoorFixedPanel,
		gallery: [swingDoorFixedPanel, swingDoors, slidingDoorFixedGlass, frenchSlidingDoor],
		features: [
			'Operable leaf with fixed sidelight',
			'Shared frame for clean detailing',
			'More daylight at the entrance',
			'Flexible left or right handing',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Entrance compositions' },
			{ label: 'Operation', value: 'Swing + fixed panel' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Combined frame set' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Villa Entrances', description: 'Wider door sets with sidelight daylighting.', image: swingDoorFixedPanel },
			{ title: 'Office Suites', description: 'Formal entries with glazed fixed panels.', image: swingDoors },
			{ title: 'Lobby Doors', description: 'Matched compositions for hospitality and offices.', image: frenchSlidingDoor },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Opening Width', value: 'Project sized' },
				{ label: 'Air Infiltration', value: 'Class A3' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/swing-door-fixed-panel',
	},
	{
		slug: 'aluminium-door-with-sheet',
		title: 'Aluminium Door with Sheet',
		category: 'Doors',
		shortDescription: 'Solid-sheet aluminium doors for privacy, security, and service rooms.',
		description:
			'Aluminium doors with sheet infills where privacy and durability matter more than full glazing. Suitable for utility rooms, plant areas, and elevations that need a solid, weather-ready leaf.',
		image: aluminiumDoorWithSheet,
		gallery: [aluminiumDoorWithSheet, swingDoors, stableDoor, louversDoorSsHandle],
		features: [
			'Solid sheet or panel infill',
			'Higher privacy and impact resistance',
			'Hardware-ready for locks and closers',
			'Durable exterior-grade finishes',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Utility & privacy doors' },
			{ label: 'Infill', value: 'Aluminium sheet / panel' },
			{ label: 'Performance', value: 'Impact & weather ready' },
			{ label: 'Installation', value: 'Frame & leaf' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Plant Rooms', description: 'Solid leaves for mechanical and storage spaces.', image: aluminiumDoorWithSheet },
			{ title: 'Service Corridors', description: 'Durable doors for back-of-house traffic.', image: swingDoors },
			{ title: 'Boundary Entries', description: 'Privacy-first doors on exposed elevations.', image: stableDoor },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Infill', value: 'Sheet / panel' },
				{ label: 'Impact Resistance', value: 'High' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/aluminium-door-with-sheet',
	},
	{
		slug: 'french-sliding-door',
		title: 'French Sliding Door',
		category: 'Doors',
		shortDescription: 'Elegant sliding aluminium doors with multi-pane French styling.',
		description:
			'French-style sliding doors that combine classic multi-pane expression with modern aluminium performance. Smooth track operation and refined muntin detailing suit residential and boutique hospitality projects.',
		image: frenchSlidingDoor,
		gallery: [frenchSlidingDoor, slidingDoorFixedGlass, biFoldDoors, casementWindows],
		features: [
			'French multi-pane aesthetic in aluminium',
			'Smooth sliding track operation',
			'Wide indoor-outdoor openings',
			'Finish options including wood texture',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Living & terrace openings' },
			{ label: 'Operation', value: 'Sliding French style' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Floor / ceiling track' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Living Spaces', description: 'Classic French look with modern sliding ease.', image: frenchSlidingDoor },
			{ title: 'Terraces', description: 'Wide spans that open to outdoor living.', image: slidingDoorFixedGlass },
			{ title: 'Boutique Hotels', description: 'Refined guest-room and suite openings.', image: biFoldDoors },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Max Panel Width', value: 'Up to 2.5 m' },
				{ label: 'Cycle Durability', value: '100k+ cycles' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/french-sliding-door',
	},
	{
		slug: 'sliding-door-fixed-glass',
		title: 'Sliding Door with Fixed Glass',
		category: 'Doors',
		shortDescription: 'Sliding door systems with adjacent fixed glazing for larger wall openings.',
		description:
			'Sliding door and fixed-glass combinations for expansive glazed walls. Operable panels slide clear while fixed lights keep daylight continuous across the opening.',
		image: slidingDoorFixedGlass,
		gallery: [slidingDoorFixedGlass, frenchSlidingDoor, biFoldDoors, swingDoorFixedPanel],
		features: [
			'Operable sliding panel with fixed lights',
			'Larger glazed wall compositions',
			'Smooth-track daily operation',
			'Consistent aluminium framing throughout',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Wide glazed openings' },
			{ label: 'Operation', value: 'Sliding + fixed glass' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Multi-bay frame' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Garden Rooms', description: 'Fixed and sliding bays for garden outlooks.', image: slidingDoorFixedGlass },
			{ title: 'Showrooms', description: 'Large glazed fronts with operable access.', image: frenchSlidingDoor },
			{ title: 'Apartments', description: 'Balcony openings with extra fixed daylight.', image: biFoldDoors },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Bay Width', value: 'Project sized' },
				{ label: 'Thermal U-Value', value: '≤ 2.2 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/sliding-door-fixed-glass',
	},
	{
		slug: 'louvers-door-ss-handle',
		title: 'Louvers Door & SS Handle',
		category: 'Doors',
		shortDescription: 'Louvered aluminium doors with stainless-steel handles for ventilated entries.',
		description:
			'Louvered aluminium doors that allow airflow while screening the opening. Stainless-steel handle detailing completes a durable package for utility rooms, plant areas, and ventilated service doors.',
		image: louversDoorSsHandle,
		gallery: [louversDoorSsHandle, aluminiumDoorWithSheet, stableDoor, aluminumLouvers],
		features: [
			'Integrated aluminium louvers for airflow',
			'Stainless-steel handle hardware',
			'Screens mechanical and service spaces',
			'Corrosion-ready exterior finishes',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Ventilated service doors' },
			{ label: 'Infill', value: 'Fixed louvers' },
			{ label: 'Hardware', value: 'SS handle' },
			{ label: 'Installation', value: 'Frame & leaf' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Plant Rooms', description: 'Ventilated access with screened airflow.', image: louversDoorSsHandle },
			{ title: 'Generator Rooms', description: 'Durable doors for equipment spaces.', image: aluminiumDoorWithSheet },
			{ title: 'Courtyard Utilities', description: 'Service doors that stay cool and dry.', image: stableDoor },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Ventilation', value: 'Louvered airflow' },
				{ label: 'Hardware', value: 'Stainless steel' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/louvers-door-ss-handle',
	},
	{
		slug: 'casement-windows',
		title: 'Casement Windows',
		category: 'Windows',
		shortDescription: 'Side-hinged aluminium casement windows with strong weather sealing.',
		description:
			'Casement windows that open outward or inward on side hinges for full ventilation. Aluminium frames deliver tight sealing, thermal options, and clean sightlines for residential and commercial elevations.',
		image: casementWindows,
		gallery: [casementWindows, slidingWindow, sashWindow, topHungOpenableWindows],
		features: [
			'Side-hinged full-open ventilation',
			'Tight weather and air sealing',
			'Thermal-break profile options',
			'Multipoint locking hardware ready',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Residential & commercial' },
			{ label: 'Operation', value: 'Side-hinged casement' },
			{ label: 'Performance', value: 'High weather seal' },
			{ label: 'Installation', value: 'Frame & sash' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Residences', description: 'Comfortable bedrooms and living-room openings.', image: casementWindows },
			{ title: 'Offices', description: 'Operable daylighting for workplace floors.', image: slidingWindow },
			{ title: 'Schools', description: 'Reliable ventilation for classrooms.', image: sashWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Air Infiltration', value: 'Class A4' },
				{ label: 'Thermal U-Value', value: '≤ 1.8 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/casement-windows',
	},
	{
		slug: 'bi-folding-windows',
		title: 'Bi-folding Windows',
		category: 'Windows',
		shortDescription: 'Folding aluminium windows that stack aside for wide open views.',
		description:
			'Bi-folding window systems that concertina open to create wide unobstructed openings. Ideal for counter windows, cafes, and residential spans where maximum openness matters.',
		image: biFoldingWindows,
		gallery: [biFoldingWindows, casementWindows, slidingWindow, bayWindows],
		features: [
			'Folding panels that stack clear',
			'Wide opening for serving counters',
			'Smooth track hardware',
			'Weather-sealed when closed',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Counters & wide openings' },
			{ label: 'Operation', value: 'Bi-fold window' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Sill / head track' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Cafe Counters', description: 'Open serving windows that fold fully aside.', image: biFoldingWindows },
			{ title: 'Kitchens', description: 'Pass-through openings to courtyards and gardens.', image: casementWindows },
			{ title: 'Retail Kiosks', description: 'Flexible fronts for seasonal opening.', image: slidingWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Panel Span', value: 'Up to 1.0 m' },
				{ label: 'Cycle Durability', value: '60k+ cycles' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/bi-folding-windows',
	},
	{
		slug: 'skylight-windows',
		title: 'Skylight Windows',
		category: 'Windows',
		shortDescription: 'Roof-mounted aluminium skylights for daylight into deep interiors.',
		description:
			'Skylight window systems that bring daylight from above into atria, corridors, and living spaces. Aluminium framing is engineered for roof loads, drainage, and weather-tight glazing.',
		image: skylightWindows,
		gallery: [skylightWindows, fixedWindow, dormerWindow, bayWindows],
		features: [
			'Roof-mounted daylighting frames',
			'Drainage and weather detailing',
			'Fixed or openable options',
			'Compatible with IGU glazing packages',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Roof daylighting' },
			{ label: 'Operation', value: 'Fixed / openable skylight' },
			{ label: 'Performance', value: 'Roof weather rated' },
			{ label: 'Installation', value: 'Kerbed roof mount' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Atria', description: 'Top light for circulation and lobby volumes.', image: skylightWindows },
			{ title: 'Living Rooms', description: 'Daylight into deep residential plans.', image: fixedWindow },
			{ title: 'Corridors', description: 'Natural light for long institutional halls.', image: dormerWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Water Tightness', value: 'Roof rated' },
				{ label: 'Thermal U-Value', value: '≤ 2.0 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/skylight-windows',
	},
	{
		slug: 'bay-windows',
		title: 'Bay Windows',
		category: 'Windows',
		shortDescription: 'Projecting aluminium bay windows that expand views and floor space.',
		description:
			'Bay window systems that step out from the facade for panoramic outlooks and interior seating niches. Angled aluminium frames keep junctions tidy while supporting multi-pane glazing.',
		image: bayWindows,
		gallery: [bayWindows, casementWindows, fixedWindow, dormerWindow],
		features: [
			'Angled projecting bay geometry',
			'Expanded views and interior niche space',
			'Multi-pane framing with clean junctions',
			'Operable and fixed bay combinations',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Residential bays' },
			{ label: 'Geometry', value: 'Angled / box bay' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Projected frame set' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Living Niches', description: 'Window seats with panoramic street views.', image: bayWindows },
			{ title: 'Bedrooms', description: 'Projected openings that brighten sleeping spaces.', image: casementWindows },
			{ title: 'Heritage Updates', description: 'Classic bay form in modern aluminium.', image: dormerWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Bay Projection', value: 'Project sized' },
				{ label: 'Thermal U-Value', value: '≤ 1.9 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/bay-windows',
	},
	{
		slug: 'mini-openable',
		title: 'Mini Openable',
		category: 'Windows',
		shortDescription: 'Compact openable aluminium windows for ventilation in tight spaces.',
		description:
			'Mini openable windows sized for bathrooms, kitchens, and secondary rooms. Compact aluminium frames provide secure ventilation without dominating the elevation.',
		image: miniOpenable,
		gallery: [miniOpenable, topHungOpenableWindows, casementWindows, fixedWindow],
		features: [
			'Compact size for secondary rooms',
			'Secure openable ventilation',
			'Clean aluminium sightlines',
			'Easy daily operation',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Bathrooms & utilities' },
			{ label: 'Operation', value: 'Mini openable sash' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Frame & sash' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Bathrooms', description: 'Secure ventilation without large openings.', image: miniOpenable },
			{ title: 'Kitchens', description: 'Compact exhaust-friendly windows.', image: topHungOpenableWindows },
			{ title: 'Stairwells', description: 'Secondary daylight and airflow.', image: fixedWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Sash Size', value: 'Compact' },
				{ label: 'Air Infiltration', value: 'Class A3' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/mini-openable',
	},
	{
		slug: 'fixed-window',
		title: 'Fixed Window',
		category: 'Windows',
		shortDescription: 'Non-operable aluminium fixed windows for maximum glass and sealing.',
		description:
			'Fixed aluminium windows for large glazed areas where ventilation is handled elsewhere. Minimal frames maximize daylight while delivering excellent weather and air performance.',
		image: fixedWindow,
		gallery: [fixedWindow, casementWindows, oneSideReflectiveGlass, slidingWindow],
		features: [
			'Non-operable maximum glass area',
			'Excellent weather and air sealing',
			'Minimal aluminium sightlines',
			'Ideal for large facade lights',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Fixed glazed lights' },
			{ label: 'Operation', value: 'Fixed' },
			{ label: 'Performance', value: 'Highest seal class' },
			{ label: 'Installation', value: 'Direct glazed frame' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Stair Glazing', description: 'Fixed lights for vertical circulation.', image: fixedWindow },
			{ title: 'Feature Walls', description: 'Large glass planes with slim frames.', image: oneSideReflectiveGlass },
			{ title: 'Office Facades', description: 'Fixed bays paired with operable neighbors.', image: casementWindows },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Air Infiltration', value: 'Class A4' },
				{ label: 'Thermal U-Value', value: '≤ 1.7 W/m²K' },
				{ label: 'Service Life', value: '20+ Years' },
			],
		},
		href: '/products/fixed-window',
	},
	{
		slug: 'dormer-window',
		title: 'Dormer Window',
		category: 'Windows',
		shortDescription: 'Roof dormer aluminium windows for attic and loft daylighting.',
		description:
			'Dormer window systems that bring light and ventilation into loft spaces. Aluminium frames suit pitched-roof projections with weather-tight junctions to roof finishes.',
		image: dormerWindow,
		gallery: [dormerWindow, skylightWindows, sashWindow, bayWindows],
		features: [
			'Designed for dormer roof projections',
			'Daylight and ventilation for lofts',
			'Weather-tight roof junctions',
			'Operable sash options',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Loft & attic dormers' },
			{ label: 'Operation', value: 'Fixed / openable' },
			{ label: 'Performance', value: 'Roof weather rated' },
			{ label: 'Installation', value: 'Dormer cheek framing' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Loft Conversions', description: 'Daylight for attic bedrooms and studios.', image: dormerWindow },
			{ title: 'Attic Offices', description: 'Comfortable workspaces under the roof.', image: sashWindow },
			{ title: 'Heritage Homes', description: 'Classic dormer form in modern aluminium.', image: bayWindows },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Water Tightness', value: 'Roof rated' },
				{ label: 'Thermal U-Value', value: '≤ 1.9 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/dormer-window',
	},
	{
		slug: 'sash-window',
		title: 'Sash Window',
		category: 'Windows',
		shortDescription: 'Vertical sliding aluminium sash windows with classic proportions.',
		description:
			'Sash windows with vertically sliding aluminium sashes for traditional elevations updated with modern performance. Balanced operation and slim meeting rails keep the classic look.',
		image: sashWindow,
		gallery: [sashWindow, casementWindows, slidingWindow, dormerWindow],
		features: [
			'Vertical sliding sash operation',
			'Classic proportions in aluminium',
			'Balanced smooth travel',
			'Modern weather and air sealing',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Classic residential elevations' },
			{ label: 'Operation', value: 'Vertical sliding sash' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Boxed sash frame' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Heritage Facades', description: 'Classic sash look with aluminium durability.', image: sashWindow },
			{ title: 'Townhouses', description: 'Traditional street elevations updated.', image: casementWindows },
			{ title: 'Apartments', description: 'Slim vertical openings for urban blocks.', image: slidingWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Air Infiltration', value: 'Class A3' },
				{ label: 'Thermal U-Value', value: '≤ 1.9 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/sash-window',
	},
	{
		slug: 'top-hung-openable-windows',
		title: 'Top Hung Openable Windows',
		category: 'Windows',
		shortDescription: 'Top-hung aluminium windows that project outward for secure ventilation.',
		description:
			'Top-hung openable windows hinged at the head so the sash projects outward. A practical choice for upper floors and rain-resistant ventilation while the opening stays partially sheltered.',
		image: topHungOpenableWindows,
		gallery: [topHungOpenableWindows, miniOpenable, casementWindows, fixedWindow],
		features: [
			'Head-hinged projecting sash',
			'Ventilation with rain shelter',
			'Secure restricted opening options',
			'Suitable for higher floor levels',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Upper-floor ventilation' },
			{ label: 'Operation', value: 'Top hung openable' },
			{ label: 'Performance', value: 'Rain-resistant vent' },
			{ label: 'Installation', value: 'Frame & projecting sash' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'High-Rise Flats', description: 'Safe restricted openings on upper floors.', image: topHungOpenableWindows },
			{ title: 'Bathrooms', description: 'Sheltered ventilation in wet rooms.', image: miniOpenable },
			{ title: 'Corridors', description: 'Secondary airflow for common areas.', image: fixedWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Opening Angle', value: 'Restricted options' },
				{ label: 'Air Infiltration', value: 'Class A3' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/top-hung-openable-windows',
	},
	{
		slug: 'one-side-reflective-glass',
		title: 'One Side Reflective Glass',
		category: 'Windows',
		shortDescription: 'Aluminium glazed openings with one-way reflective glass for privacy and solar control.',
		description:
			'Window and facade lights with one-side reflective glass that reduces solar gain and adds daytime privacy. Aluminium framing supports reflective IGUs for offices, residences, and street-facing elevations.',
		image: oneSideReflectiveGlass,
		gallery: [oneSideReflectiveGlass, fixedWindow, casementWindows, curtainWallsSystem],
		features: [
			'Daytime privacy with reflective coating',
			'Solar control for hot climates',
			'Compatible with aluminium window frames',
			'Clean modern glass expression',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Solar & privacy glazing' },
			{ label: 'Glazing', value: 'One-side reflective IGU' },
			{ label: 'Performance', value: 'Solar control' },
			{ label: 'Installation', value: 'Frame glazed' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Street Facades', description: 'Privacy for ground and mid-level rooms.', image: oneSideReflectiveGlass },
			{ title: 'Offices', description: 'Solar control for west and south exposures.', image: fixedWindow },
			{ title: 'Residences', description: 'Cooler interiors with reflective daylight.', image: casementWindows },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Solar Control', value: 'Reflective coating' },
				{ label: 'Thermal U-Value', value: '≤ 1.8 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/one-side-reflective-glass',
	},
	{
		slug: 'sliding-window',
		title: 'Sliding Window',
		category: 'Windows',
		shortDescription: 'Horizontal sliding aluminium windows for easy everyday ventilation.',
		description:
			'Sliding window systems with horizontal travel for simple, space-saving ventilation. Aluminium tracks and sashes suit apartments, offices, and residential elevations across Pakistan.',
		image: slidingWindow,
		gallery: [slidingWindow, casementWindows, sashWindow, biFoldingWindows],
		features: [
			'Horizontal sliding for tight spaces',
			'Easy daily operation',
			'Weather-sealed meeting rails',
			'Single or multi-track options',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Apartments & offices' },
			{ label: 'Operation', value: 'Horizontal sliding' },
			{ label: 'Performance', value: 'Weather sealed' },
			{ label: 'Installation', value: 'Multi-track frame' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Apartments', description: 'Space-saving ventilation for urban flats.', image: slidingWindow },
			{ title: 'Offices', description: 'Simple operable lights on workplace floors.', image: casementWindows },
			{ title: 'Hotels', description: 'Quiet guest-room openings with easy travel.', image: sashWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Cycle Durability', value: '100k+ cycles' },
				{ label: 'Thermal U-Value', value: '≤ 2.0 W/m²K' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/sliding-window',
	},
	{
		slug: 'curtain-walls-system',
		title: 'Curtain Walls System',
		category: 'Facades',
		shortDescription: 'High-performance aluminium curtain wall systems for commercial elevations.',
		description:
			'Engineered curtain wall systems for commercial towers and modern facades. Profiles support glazing packages with strength, weather performance, and clean architectural sightlines.',
		image: curtainWallsSystem,
		gallery: [curtainWallsSystem, acpCladdingCeiling, oneSideReflectiveGlass, fixedWindow],
		features: [
			'Stick and unitized-ready profile options',
			'Designed for high-rise wind and weather loads',
			'Compatible with thermal-break inserts',
			'Clean sightlines for contemporary elevations',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Commercial facade' },
			{ label: 'Glazing', value: 'Double / Triple IGU' },
			{ label: 'Performance', value: 'High wind & weather rated' },
			{ label: 'Installation', value: 'Stick / Unitized' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Commercial Towers', description: 'High-rise envelopes with clean sightlines.', image: curtainWallsSystem },
			{ title: 'Corporate Campuses', description: 'Consistent facade language across blocks.', image: acpCladdingCeiling },
			{ title: 'Mixed-Use Facades', description: 'Flexible spanning for podiums and offices.', image: oneSideReflectiveGlass },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Wind Load Resistance', value: '≥ 2800 Pa' },
				{ label: 'Thermal U-Value', value: '≤ 2.0 W/m²K' },
				{ label: 'Surface Durability', value: '10+ Years' },
			],
		},
		href: '/products/curtain-walls-system',
	},
	{
		slug: 'acp-cladding-ceiling',
		title: 'ACP Cladding & Ceiling',
		category: 'Facades',
		shortDescription: 'Aluminium composite panel cladding and ceiling systems for crisp envelopes.',
		description:
			'ACP cladding and ceiling packages for rainscreen facades, soffits, and interior feature ceilings. Flat, durable panels with aluminium framing create crisp contemporary surfaces indoors and out.',
		image: acpCladdingCeiling,
		gallery: [acpCladdingCeiling, curtainWallsSystem, aluminumLouvers, contemporaryLouverSystem],
		features: [
			'ACP rainscreen and ceiling panels',
			'Flat, durable contemporary surfaces',
			'Suitable for facades and soffits',
			'Wide colour and finish matching',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'PVDF / Powder Coated' },
			{ label: 'Use', value: 'Cladding & ceilings' },
			{ label: 'Panel', value: 'Aluminium composite' },
			{ label: 'Performance', value: 'Weather & fire options' },
			{ label: 'Installation', value: 'Rainscreen / cassette' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Commercial Facades', description: 'Crisp rainscreen cladding for street elevations.', image: acpCladdingCeiling },
			{ title: 'Entrance Soffits', description: 'Feature ceilings for lobbies and canopies.', image: curtainWallsSystem },
			{ title: 'Retail Podia', description: 'Brand-matched cladding for podium fronts.', image: aluminumLouvers },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Panel Flatness', value: 'Architectural grade' },
				{ label: 'Colour Fastness', value: 'PVDF options' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/acp-cladding-ceiling',
	},
	{
		slug: 'contemporary-louver-system',
		title: 'Contemporary Louver System',
		category: 'Louvers',
		shortDescription: 'Modern aluminium louver systems for solar control and facade rhythm.',
		description:
			'Contemporary louver systems that shade elevations while adding depth and rhythm. Adjustable or fixed aluminium blades support solar control, privacy, and architectural expression.',
		image: contemporaryLouverSystem,
		gallery: [contemporaryLouverSystem, aluminumLouvers, mashrabiya, acpCladdingCeiling],
		features: [
			'Fixed or adjustable blade options',
			'Solar shading for hot climates',
			'Facade depth and visual rhythm',
			'Finish matching to curtain wall packages',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Facade solar control' },
			{ label: 'Blade', value: 'Fixed / adjustable' },
			{ label: 'Performance', value: 'Solar & privacy' },
			{ label: 'Installation', value: 'Bracketed facade mount' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Office Facades', description: 'Horizontal louvers for west and south sun.', image: contemporaryLouverSystem },
			{ title: 'Parking Screens', description: 'Ventilated screens with architectural finish.', image: aluminumLouvers },
			{ title: 'Courtyards', description: 'Shaded outdoor rooms with filtered light.', image: mashrabiya },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...louverAxes],
			metrics: [
				{ label: 'Solar Control', value: 'Blade shaded' },
				{ label: 'Blade Pitch', value: 'Project sized' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/contemporary-louver-system',
	},
	{
		slug: 'aluminum-louvers',
		title: 'Aluminum Louvers',
		category: 'Louvers',
		shortDescription: 'Durable aluminium louvers for ventilation, screening, and sun control.',
		description:
			'Aluminium louvers for plant screening, facade ventilation, and solar control. Extruded blades and frames deliver long service life with finishes matched to the wider aluminium package.',
		image: aluminumLouvers,
		gallery: [aluminumLouvers, contemporaryLouverSystem, mashrabiya, louversDoorSsHandle],
		features: [
			'Extruded aluminium blades',
			'Ventilation with visual screening',
			'Suitable for plant and MEP zones',
			'Corrosion-ready finishes',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Screening & ventilation' },
			{ label: 'Blade', value: 'Extruded fixed' },
			{ label: 'Performance', value: 'Weather & airflow' },
			{ label: 'Installation', value: 'Frame / modular banks' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'MEP Screens', description: 'Conceal plant while keeping airflow.', image: aluminumLouvers },
			{ title: 'Facade Bands', description: 'Horizontal louver bands on commercial shells.', image: contemporaryLouverSystem },
			{ title: 'Boundary Walls', description: 'Ventilated privacy screens for compounds.', image: mashrabiya },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...louverAxes],
			metrics: [
				{ label: 'Airflow', value: 'High free area' },
				{ label: 'Screening', value: 'Visual privacy' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/aluminum-louvers',
	},
	{
		slug: 'mashrabiya',
		title: 'Mashrabiya',
		category: 'Louvers',
		shortDescription: 'Ornamental aluminium mashrabiya screens for shade, privacy, and pattern.',
		description:
			'Mashrabiya-inspired aluminium screens that filter light and add cultural pattern to facades and courtyards. Precision-cut or framed panels deliver shade and privacy with contemporary metal craft.',
		image: mashrabiya,
		gallery: [mashrabiya, contemporaryLouverSystem, aluminumLouvers, acpCladdingCeiling],
		features: [
			'Patterned shade and privacy screens',
			'Cultural facade expression in aluminium',
			'Filtered daylight for interiors and courtyards',
			'Custom pattern options',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Facade & courtyard screens' },
			{ label: 'Pattern', value: 'Custom mashrabiya' },
			{ label: 'Performance', value: 'Shade & privacy' },
			{ label: 'Installation', value: 'Panel / frame mount' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Courtyard Screens', description: 'Patterned privacy with filtered light.', image: mashrabiya },
			{ title: 'Feature Facades', description: 'Cultural motif as a modern metal skin.', image: contemporaryLouverSystem },
			{ title: 'Balcony Screens', description: 'Shade for residential balconies.', image: aluminumLouvers },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...louverAxes],
			metrics: [
				{ label: 'Pattern', value: 'Custom cut' },
				{ label: 'Shade Factor', value: 'High' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
		href: '/products/mashrabiya',
	},
	{
		slug: 'aluminium-ladder',
		title: 'Aluminium Ladder',
		category: 'Specialty',
		shortDescription: 'Lightweight structural aluminium ladders for industrial and site use.',
		description:
			'Aluminium ladders fabricated for strength at low weight. Suitable for industrial access, plant rooms, and site work where corrosion resistance and portability matter.',
		image: aluminiumLadder,
		gallery: [aluminiumLadder, quranStand, aluminiumDoorWithSheet, aluminumLouvers],
		features: [
			'Lightweight high-strength aluminium',
			'Corrosion resistant for outdoor use',
			'Industrial and site access ready',
			'Custom length options',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Mill / Anodized' },
			{ label: 'Use', value: 'Access & industrial' },
			{ label: 'Construction', value: 'Welded / riveted' },
			{ label: 'Performance', value: 'Load rated' },
			{ label: 'Installation', value: 'Portable / fixed mount' },
		],
		finishes: ['Anodizing'],
		applications: [
			{ title: 'Plant Access', description: 'Light ladders for mechanical rooms.', image: aluminiumLadder },
			{ title: 'Site Work', description: 'Portable access for construction teams.', image: aluminiumDoorWithSheet },
			{ title: 'Warehouses', description: 'Durable access for storage mezzanines.', image: aluminumLouvers },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...specialtyAxes],
			metrics: [
				{ label: 'Weight', value: 'Lightweight alloy' },
				{ label: 'Load Rating', value: 'Industrial' },
				{ label: 'Service Life', value: '10+ Years' },
			],
		},
		href: '/products/aluminium-ladder',
	},
	{
		slug: 'quran-stand',
		title: 'Quran Stand',
		category: 'Specialty',
		shortDescription: 'Crafted aluminium Quran stands for mosques, homes, and institutions.',
		description:
			'Purpose-built aluminium Quran stands combining structural stability with refined detailing. Suitable for mosques, prayer rooms, and homes seeking durable metal craftsmanship.',
		image: quranStand,
		gallery: [quranStand, aluminiumLadder, mashrabiya, aluminiumDoorWithSheet],
		features: [
			'Stable aluminium frame construction',
			'Refined detailing for sacred spaces',
			'Lightweight and durable',
			'Custom size and finish options',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Mosque & home' },
			{ label: 'Construction', value: 'Fabricated stand' },
			{ label: 'Performance', value: 'Stable & durable' },
			{ label: 'Installation', value: 'Freestanding' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Mosques', description: 'Durable stands for prayer halls.', image: quranStand },
			{ title: 'Homes', description: 'Refined metal craft for private prayer spaces.', image: mashrabiya },
			{ title: 'Institutions', description: 'Matching stands for schools and foundations.', image: aluminiumLadder },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...specialtyAxes],
			metrics: [
				{ label: 'Stability', value: 'Weighted base options' },
				{ label: 'Finish Range', value: 'Full catalogue' },
				{ label: 'Service Life', value: '10+ Years' },
			],
		},
		href: '/products/quran-stand',
	},
];

export const products = {
	label: 'Our Products',
	title: 'Aluminium systems for every opening and facade.',
	description: 'Doors, windows, facades, louvers, and specialty aluminium — engineered for precision, performance, and lasting finish.',
	seoTitle: `Products | ${site.name}`,
	seoDescription:
		'Browse Pak Alumex aluminium products — doors, windows, curtain walls, ACP cladding, louvers, mashrabiya, and specialty fabrications.',
	items: productItems,
} as const;

export const productCategories = ['All', ...new Set(productItems.map((item) => item.category))] as const;

export function getProductBySlug(slug: string): Product | undefined {
	return productItems.find((item) => item.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 2): Product[] {
	const current = getProductBySlug(slug);
	if (!current) return productItems.slice(0, limit);
	const sameCategory = productItems.filter((item) => item.slug !== slug && item.category === current.category);
	const others = productItems.filter((item) => item.slug !== slug && item.category !== current.category);
	return [...sameCategory, ...others].slice(0, limit);
}
