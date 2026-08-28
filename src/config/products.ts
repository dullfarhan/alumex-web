import type { ImageMetadata } from 'astro';
import biFoldDoors from '../assets/products/bi-fold-doors.jpg';
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
import slidingWindow from '../assets/products/sliding-window.jpg';
import curtainWallsSystem from '../assets/products/Unitized-Curtain-Wall-System.jpeg';
import contemporaryLouverSystem from '../assets/products/contemporary-louver-system.jpg';
import aluminiumRailingSystem from '../assets/products/Aluminium-Railing-System.webp';
import aluminiumOfficePartition from '../assets/products/aluminium-office-partition.jpeg';
import doubleGlazedCurtainWallSystem from '../assets/products/Double-Glazed-Curtain-Wall-System.jpeg';
import entranceDoor from '../assets/products/Entrance-Door.jpeg';
import hingedDoor from '../assets/products/Hinged-Door.jpg';
import hingedWindow from '../assets/products/Hinged-Window.jpeg';
import kitchenCabinet from '../assets/products/kitchen-cabinet.jpeg';
import openableCurtainWallSystem from '../assets/products/Openable-Curtain-Wall-System.jpeg';
import pergolaSystem from '../assets/products/Pergola-System.jpeg';
import solarShading from '../assets/products/Solar-Shading.jpeg';
import spiderGlazing from '../assets/products/Spider-Glazing.webp';
import { site } from './site';

export type ProductCategory = 'Doors' | 'Windows' | 'Facades' | 'Louvers';

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
		gallery: [biFoldDoors, frenchSlidingDoor, stableDoor, slidingDoorFixedGlass],
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
			{ title: 'Villas', description: 'Premium residential patio spans with refined finishes.', image: stableDoor },
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
	},
	{
		slug: 'stable-door',
		title: 'Stable Door',
		category: 'Doors',
		shortDescription: 'Split-leaf aluminium stable doors for kitchens, shops, and courtyards.',
		description:
			'Stable doors with independently operable upper and lower leaves. Aluminium construction keeps the classic Dutch-door function while delivering modern weather sealing and finish quality.',
		image: stableDoor,
		gallery: [stableDoor, aluminiumDoorWithSheet, louversDoorSsHandle, frenchSlidingDoor],
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
	},
	{
		slug: 'swing-door-fixed-panel',
		title: 'Swing Door with Fixed Panel',
		category: 'Doors',
		shortDescription: 'Hinged door paired with a fixed sidelight for wider entrance compositions.',
		description:
			'Swing door and fixed-panel combinations for generous entrance compositions. Shared aluminium framing keeps sightlines consistent while adding daylight beside the operable leaf.',
		image: swingDoorFixedPanel,
		gallery: [swingDoorFixedPanel, stableDoor, slidingDoorFixedGlass, frenchSlidingDoor],
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
			{ title: 'Office Suites', description: 'Formal entries with glazed fixed panels.', image: swingDoorFixedPanel },
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
	},
	{
		slug: 'aluminium-door-with-sheet',
		title: 'Aluminium Door with Sheet',
		category: 'Doors',
		shortDescription: 'Solid-sheet aluminium doors for privacy, security, and service rooms.',
		description:
			'Aluminium doors with sheet infills where privacy and durability matter more than full glazing. Suitable for utility rooms, plant areas, and elevations that need a solid, weather-ready leaf.',
		image: aluminiumDoorWithSheet,
		gallery: [aluminiumDoorWithSheet, stableDoor, louversDoorSsHandle, frenchSlidingDoor],
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
			{ title: 'Service Corridors', description: 'Durable doors for back-of-house traffic.', image: stableDoor },
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
	},
	{
		slug: 'louvers-door-ss-handle',
		title: 'Louvers Door & SS Handle',
		category: 'Doors',
		shortDescription: 'Louvered aluminium doors with stainless-steel handles for ventilated entries.',
		description:
			'Louvered aluminium doors that allow airflow while screening the opening. Stainless-steel handle detailing completes a durable package for utility rooms, plant areas, and ventilated service doors.',
		image: louversDoorSsHandle,
		gallery: [louversDoorSsHandle, aluminiumDoorWithSheet, stableDoor, contemporaryLouverSystem],
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
	},
	{
		slug: 'fixed-window',
		title: 'Fixed Window',
		category: 'Windows',
		shortDescription: 'Non-operable aluminium fixed windows for maximum glass and sealing.',
		description:
			'Fixed aluminium windows for large glazed areas where ventilation is handled elsewhere. Minimal frames maximize daylight while delivering excellent weather and air performance.',
		image: fixedWindow,
		gallery: [fixedWindow, casementWindows, skylightWindows, slidingWindow],
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
			{ title: 'Feature Walls', description: 'Large glass planes with slim frames.', image: fixedWindow },
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
	},
	{
		slug: 'curtain-walls-system',
		title: 'Curtain Walls System',
		category: 'Facades',
		shortDescription: 'High-performance aluminium curtain wall systems for commercial elevations.',
		description:
			'Engineered curtain wall systems for commercial towers and modern facades. Profiles support glazing packages with strength, weather performance, and clean architectural sightlines.',
		image: curtainWallsSystem,
		gallery: [curtainWallsSystem, fixedWindow, casementWindows, contemporaryLouverSystem],
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
			{ title: 'Corporate Campuses', description: 'Consistent facade language across blocks.', image: fixedWindow },
			{ title: 'Mixed-Use Facades', description: 'Flexible spanning for podiums and offices.', image: fixedWindow },
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
	},
	{
		slug: 'contemporary-louver-system',
		title: 'Contemporary Louver System',
		category: 'Louvers',
		shortDescription: 'Modern aluminium louver systems for solar control and facade rhythm.',
		description:
			'Contemporary louver systems that shade elevations while adding depth and rhythm. Adjustable or fixed aluminium blades support solar control, privacy, and architectural expression.',
		image: contemporaryLouverSystem,
		gallery: [contemporaryLouverSystem, curtainWallsSystem, louversDoorSsHandle, fixedWindow],
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
			{ title: 'Parking Screens', description: 'Ventilated screens with architectural finish.', image: curtainWallsSystem },
			{ title: 'Courtyards', description: 'Shaded outdoor rooms with filtered light.', image: louversDoorSsHandle },
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
	},
	{
		slug: 'entrance-door',
		title: 'Entrance Door',
		category: 'Doors',
		shortDescription: 'Premium double-leaf glass entrance doors for lobbies, storefronts, and main entries.',
		description:
			'Large-format aluminium entrance doors with expansive glazing for commercial lobbies and architectural main entries. Slim frames, vertical pull handles, and weather-sealed construction deliver a professional first impression with lasting durability.',
		image: entranceDoor,
		gallery: [entranceDoor, swingDoorFixedPanel, frenchSlidingDoor, slidingDoorFixedGlass],
		features: [
			'Double-leaf configurations for wide openings',
			'Full-height glazing with slim aluminium frames',
			'Commercial-grade hardware and pull handles',
			'Weather-sealed for exposed main entries',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Main entrance' },
			{ label: 'Operation', value: 'Double swing' },
			{ label: 'Glazing', value: 'Single / Double IGU' },
			{ label: 'Installation', value: 'Framed entrance set' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Commercial Lobbies', description: 'Grand entries for offices and retail.', image: entranceDoor },
			{ title: 'Storefronts', description: 'Transparent shop fronts with secure access.', image: frenchSlidingDoor },
			{ title: 'Residential Entrances', description: 'Modern villa and apartment main doors.', image: swingDoorFixedPanel },
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
	},
	{
		slug: 'hinged-door',
		title: 'Hinged Door',
		category: 'Doors',
		shortDescription: 'Classic hinged aluminium doors with glazed panels for residential and commercial openings.',
		description:
			'Versatile hinged door systems with aluminium frames and large glass panels. Suitable for interior and exterior openings where reliable swing operation, clean sightlines, and durable hardware are required.',
		image: hingedDoor,
		gallery: [hingedDoor, entranceDoor, swingDoorFixedPanel, frenchSlidingDoor],
		features: [
			'Single or double-leaf hinged operation',
			'Glazed panels with slim frame profiles',
			'Lock-ready hardware and durable hinges',
			'Interior and exterior configurations',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Interior & exterior doors' },
			{ label: 'Operation', value: 'Side-hung swing' },
			{ label: 'Glazing', value: 'Single / Double IGU' },
			{ label: 'Installation', value: 'Frame & leaf' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Living Areas', description: 'Glazed doors connecting rooms and gardens.', image: hingedDoor },
			{ title: 'Office Suites', description: 'Professional entries with natural light.', image: entranceDoor },
			{ title: 'Balcony Access', description: 'Secure hinged leaves for terrace doors.', image: frenchSlidingDoor },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...doorAxes],
			metrics: [
				{ label: 'Cycle Durability', value: '100k+ cycles' },
				{ label: 'Air Infiltration', value: 'Class A3' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
	},
	{
		slug: 'hinged-window',
		title: 'Hinged Window',
		category: 'Windows',
		shortDescription: 'Side-hung hinged windows for natural ventilation and classic architectural openings.',
		description:
			'Hinged window systems that swing outward for effective ventilation and easy cleaning. Engineered aluminium frames with secure hardware suit residential and commercial elevations that need reliable operable glazing.',
		image: hingedWindow,
		gallery: [hingedWindow, casementWindows, topHungOpenableWindows, fixedWindow],
		features: [
			'Outward-opening side-hung leaves',
			'Multi-point locking for secure closure',
			'Compatible with double-glazed units',
			'Classic grid or clear glass options',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder / Wood' },
			{ label: 'Use', value: 'Residential & commercial' },
			{ label: 'Operation', value: 'Side-hung swing' },
			{ label: 'Glazing', value: 'Single / Double IGU' },
			{ label: 'Installation', value: 'Frame & sash' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Bedrooms', description: 'Comfortable ventilation with secure locking.', image: hingedWindow },
			{ title: 'Living Rooms', description: 'Wide openings with classic hinged operation.', image: casementWindows },
			{ title: 'Offices', description: 'Operable lights for workplace floors.', image: fixedWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...windowAxes],
			metrics: [
				{ label: 'Thermal U-Value', value: '≤ 2.0 W/m²K' },
				{ label: 'Air Infiltration', value: 'Class A3' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
	},
	{
		slug: 'double-glazed-curtain-wall-system',
		title: 'Double-Glazed Curtain Wall System',
		category: 'Facades',
		shortDescription: 'Insulated double-glazed curtain wall facades for energy-efficient commercial buildings.',
		description:
			'Double-glazed curtain wall systems that combine expansive glass envelopes with improved thermal performance. Engineered aluminium mullions and transoms support IGU packages for modern towers, offices, and retail facades.',
		image: doubleGlazedCurtainWallSystem,
		gallery: [doubleGlazedCurtainWallSystem, curtainWallsSystem, openableCurtainWallSystem, spiderGlazing],
		features: [
			'Double-glazed unit integration',
			'Improved thermal and acoustic performance',
			'Stick and unitized installation options',
			'Clean sightlines for large glazed facades',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Commercial facade' },
			{ label: 'Glazing', value: 'Double IGU' },
			{ label: 'Performance', value: 'Thermal & weather rated' },
			{ label: 'Installation', value: 'Stick / Unitized' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Office Towers', description: 'Energy-efficient envelopes with full glazing.', image: doubleGlazedCurtainWallSystem },
			{ title: 'Retail Fronts', description: 'Bright storefronts with insulated glass.', image: curtainWallsSystem },
			{ title: 'Mixed-Use Blocks', description: 'Consistent facade language across uses.', image: fixedWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Thermal U-Value', value: '≤ 1.8 W/m²K' },
				{ label: 'Wind Load Resistance', value: '≥ 2800 Pa' },
				{ label: 'Surface Durability', value: '10+ Years' },
			],
		},
	},
	{
		slug: 'openable-curtain-wall-system',
		title: 'Openable Curtain Wall System',
		category: 'Facades',
		shortDescription: 'Ventilated curtain wall facades with integrated top-hung opening panels.',
		description:
			'Curtain wall systems with integrated openable panels for natural ventilation without breaking the facade grid. Top-hung opening units maintain clean architectural lines while allowing airflow in offices and commercial buildings.',
		image: openableCurtainWallSystem,
		gallery: [openableCurtainWallSystem, doubleGlazedCurtainWallSystem, curtainWallsSystem, topHungOpenableWindows],
		features: [
			'Top-hung openable panels within the facade grid',
			'Natural ventilation for occupied floors',
			'Matched mullions for seamless sightlines',
			'High-rise wind and weather performance',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Ventilated commercial facade' },
			{ label: 'Operation', value: 'Top-hung openable' },
			{ label: 'Glazing', value: 'Double IGU' },
			{ label: 'Installation', value: 'Stick / Unitized' },
		],
		finishes: [...allFinishes],
		applications: [
			{ title: 'Office Floors', description: 'Ventilated workspaces behind full glazing.', image: openableCurtainWallSystem },
			{ title: 'Atria', description: 'Openable panels for stack ventilation.', image: curtainWallsSystem },
			{ title: 'Hotels', description: 'Guest floors with operable facade lights.', image: doubleGlazedCurtainWallSystem },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Wind Load Resistance', value: '≥ 2800 Pa' },
				{ label: 'Opening Type', value: 'Top-hung' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
	},
	{
		slug: 'spider-glazing',
		title: 'Spider Glazing',
		category: 'Facades',
		shortDescription: 'Point-fixed glass facades with minimal visible framing for premium elevations.',
		description:
			'Spider glazing systems that suspend glass panels with discrete point fixings for near frameless facades. Ideal for entrances, atria, and feature walls where maximum transparency and architectural impact are required.',
		image: spiderGlazing,
		gallery: [spiderGlazing, curtainWallsSystem, entranceDoor, doubleGlazedCurtainWallSystem],
		features: [
			'Point-fixed glass with minimal visible structure',
			'High transparency for feature elevations',
			'Engineered fixings for wind and dead loads',
			'Suitable for entrances, canopies, and atria',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Feature glazing' },
			{ label: 'Fixing', value: 'Spider / point fixed' },
			{ label: 'Glazing', value: 'Tempered / laminated' },
			{ label: 'Installation', value: 'Structural backup wall' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Building Entrances', description: 'Frameless lobby and canopy glazing.', image: spiderGlazing },
			{ title: 'Atria', description: 'Vertical glass walls with minimal structure.', image: entranceDoor },
			{ title: 'Showrooms', description: 'Premium transparent retail fronts.', image: curtainWallsSystem },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Glass Span', value: 'Project sized' },
				{ label: 'Wind Load Resistance', value: 'Engineered' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
	},
	{
		slug: 'aluminium-office-partition',
		title: 'Aluminium Office Partition',
		category: 'Facades',
		shortDescription: 'Modular glass office partitions for meeting rooms and flexible workspaces.',
		description:
			'Modular aluminium and glass partition systems for modern offices. Frosted band options balance privacy with daylight, creating meeting rooms, executive offices, and flexible workspaces without sacrificing an open-plan feel.',
		image: aluminiumOfficePartition,
		gallery: [aluminiumOfficePartition, entranceDoor, hingedDoor, fixedWindow],
		features: [
			'Modular aluminium-framed glass panels',
			'Frosted privacy bands and clear vision zones',
			'Integrated door sets with matching hardware',
			'Fast installation for fit-out projects',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Office interiors' },
			{ label: 'Glazing', value: 'Clear / frosted glass' },
			{ label: 'Configuration', value: 'Modular panels' },
			{ label: 'Installation', value: 'Floor & ceiling track' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Meeting Rooms', description: 'Private spaces with daylight and clean lines.', image: aluminiumOfficePartition },
			{ title: 'Executive Offices', description: 'Glazed enclosures with premium finishes.', image: entranceDoor },
			{ title: 'Open Offices', description: 'Flexible divisions without blocking light.', image: fixedWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Panel Height', value: 'Floor to ceiling' },
				{ label: 'Acoustic Rating', value: 'Project sized' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
	},
	{
		slug: 'aluminium-railing-system',
		title: 'Aluminium Railing System',
		category: 'Facades',
		shortDescription: 'Glass and aluminium railing systems for balconies, decks, and staircases.',
		description:
			'Contemporary railing systems combining aluminium posts with tempered glass panels. Side-mounted or face-fixed options suit balconies, terraces, staircases, and commercial walkways with unobstructed views and durable finishes.',
		image: aluminiumRailingSystem,
		gallery: [aluminiumRailingSystem, pergolaSystem, curtainWallsSystem, fixedWindow],
		features: [
			'Glass panel infill with aluminium posts',
			'Side-mounted or face-fixed options',
			'Weather-resistant exterior finishes',
			'Compliant heights for balconies and stairs',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Balconies & stairs' },
			{ label: 'Infill', value: 'Tempered glass' },
			{ label: 'Mounting', value: 'Side / face fixed' },
			{ label: 'Installation', value: 'Post & panel' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Balconies', description: 'Safe barriers with clear views.', image: aluminiumRailingSystem },
			{ title: 'Terraces', description: 'Modern deck edges for villas and hotels.', image: pergolaSystem },
			{ title: 'Staircases', description: 'Interior and exterior stair guarding.', image: fixedWindow },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Load Rating', value: 'Code compliant' },
				{ label: 'Glass Type', value: 'Tempered' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
	},
	{
		slug: 'pergola-system',
		title: 'Pergola System',
		category: 'Facades',
		shortDescription: 'Aluminium pergola structures with glass roofing for outdoor living spaces.',
		description:
			'Engineered aluminium pergola systems with optional glass roofing for patios, terraces, and garden rooms. Robust posts and rafters create sheltered outdoor spaces that extend living areas with clean contemporary lines.',
		image: pergolaSystem,
		gallery: [pergolaSystem, aluminiumRailingSystem, solarShading, contemporaryLouverSystem],
		features: [
			'Structural aluminium posts and rafters',
			'Optional glass or louvered roof panels',
			'Integrated drainage and fixing options',
			'Custom spans for patios and terraces',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Outdoor shelter' },
			{ label: 'Roof', value: 'Glass / louvered' },
			{ label: 'Structure', value: 'Aluminium frame' },
			{ label: 'Installation', value: 'Bolted / anchored' },
		],
		finishes: ['Anodizing', 'Powder Coating'],
		applications: [
			{ title: 'Residential Patios', description: 'Covered outdoor dining and lounging.', image: pergolaSystem },
			{ title: 'Hotel Terraces', description: 'Shaded guest areas with premium finish.', image: aluminiumRailingSystem },
			{ title: 'Restaurant Decks', description: 'All-weather seating extensions.', image: solarShading },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Span', value: 'Project sized' },
				{ label: 'Wind Load', value: 'Engineered' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
	},
	{
		slug: 'kitchen-cabinet',
		title: 'Kitchen Cabinet',
		category: 'Facades',
		shortDescription: 'Aluminium-framed kitchen cabinetry with glass doors for modern interiors.',
		description:
			'Modular kitchen and storage cabinetry with aluminium-framed doors and frosted or clear glass panels. Durable, easy to clean, and suited to contemporary kitchens, pantries, and office break areas.',
		image: kitchenCabinet,
		gallery: [kitchenCabinet, aluminiumOfficePartition, hingedDoor, fixedWindow],
		features: [
			'Aluminium-framed door panels',
			'Frosted or clear glass infill options',
			'Modular wall and base units',
			'Easy-clean finishes for kitchens',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Kitchen & storage' },
			{ label: 'Door', value: 'Aluminium frame + glass' },
			{ label: 'Configuration', value: 'Wall & base units' },
			{ label: 'Installation', value: 'Modular fit-out' },
		],
		finishes: ['Anodizing', 'Powder Coating', 'Wood Texture'],
		applications: [
			{ title: 'Modern Kitchens', description: 'Sleek cabinetry for residential fit-outs.', image: kitchenCabinet },
			{ title: 'Office Pantries', description: 'Durable storage for workplace kitchens.', image: aluminiumOfficePartition },
			{ title: 'Retail Back-of-House', description: 'Organized storage with clean fronts.', image: hingedDoor },
		],
		highlights: defaultHighlights,
		performance: {
			axes: [...facadeAxes],
			metrics: [
				{ label: 'Door Cycle', value: '50k+ cycles' },
				{ label: 'Moisture Resistance', value: 'Kitchen rated' },
				{ label: 'Service Life', value: '15+ Years' },
			],
		},
	},
	{
		slug: 'solar-shading',
		title: 'Solar Shading',
		category: 'Louvers',
		shortDescription: 'External solar shading with aluminium louvers for facade sun control.',
		description:
			'External solar shading systems using aluminium louvers and slats to reduce heat gain and glare. Cantilevered canopies and integrated window screens add architectural depth while improving comfort in hot climates.',
		image: solarShading,
		gallery: [solarShading, contemporaryLouverSystem, pergolaSystem, curtainWallsSystem],
		features: [
			'Horizontal louver blades for sun control',
			'Cantilevered canopy and screen options',
			'Reduces glare and solar heat gain',
			'Finish matching to facade packages',
		],
		specs: [
			...baseSpecs,
			{ label: 'Finish', value: 'Anodized / Powder Coated' },
			{ label: 'Use', value: 'Facade sun shading' },
			{ label: 'Blade', value: 'Fixed aluminium louvers' },
			{ label: 'Performance', value: 'Solar & glare control' },
			{ label: 'Installation', value: 'Bracketed facade mount' },
		],
		finishes: ['Anodizing', 'Powder Coating', 'Wood Texture'],
		applications: [
			{ title: 'West-Facing Facades', description: 'Afternoon sun control for offices.', image: solarShading },
			{ title: 'Residential Windows', description: 'Shaded openings with privacy.', image: contemporaryLouverSystem },
			{ title: 'Outdoor Terraces', description: 'Cantilevered shade over patios.', image: pergolaSystem },
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
	},
];

export const products = {
	label: 'Our Products',
	title: 'Aluminium systems for every opening and facade.',
	description: 'Doors, windows, facades, louvers, and specialty aluminium — engineered for precision, performance, and lasting finish.',
	seoTitle: `Products | ${site.name}`,
	seoDescription:
		'Browse Pak Alumex aluminium products — doors, windows, curtain walls, louvers, and architectural aluminium systems.',
	items: productItems,
} as const;

export const productCategories = ['All', ...new Set(productItems.map((item) => item.category))] as const;
