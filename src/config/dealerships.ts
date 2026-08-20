export type DealerScene = 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type DealerRegion = 'Sindh' | 'Punjab & Capital' | 'KPK';

export interface Dealer {
	id: string;
	name: string;
	lat: number;
	lon: number;
	region: DealerRegion;
	scene: DealerScene;
	label?: boolean;
}

export interface DealerRoute {
	from: string;
	to: string;
}

export const headquarters = {
	id: 'headquarters',
	name: 'Pak Alumex Headquarters',
	address: '5 Kilometer Painsra Road, Gojra, Faisalabad, Pakistan 36120',
	lat: 31.1930644,
	lon: 72.7172928,
} as const;

export const networkScenes = [
	{
		id: 1,
		duration: 3,
		eyebrow: 'Nationwide Presence',
		title: "Building Pakistan's Strongest Dealership Network",
		description: 'A connected network built for reliable access, service, and long-term growth.',
	},
	{
		id: 2,
		duration: 4,
		eyebrow: 'Network Origin',
		title: 'Pak Alumex Headquarters',
		description: 'Painsra Road, Gojra — where the nationwide network begins.',
	},
	{
		id: 3,
		duration: 4,
		eyebrow: 'Dual Corridor Launch',
		title: 'Growing north and south together',
		description: 'The first regional branches expand simultaneously from headquarters.',
	},
	{
		id: 4,
		duration: 6,
		eyebrow: 'Regional Expansion',
		title: 'Coverage moves in both directions',
		description: 'Connected routes extend toward Pakistan’s northern and southern markets.',
	},
	{
		id: 5,
		duration: 7,
		eyebrow: 'Connected Markets',
		title: 'Local reach becomes national strength',
		description: 'Each wave activates dealers across both sides of the network.',
	},
	{
		id: 6,
		duration: 6,
		eyebrow: 'Nationwide Momentum',
		title: 'Two corridors, one connected network',
		description: 'Expansion continues toward the coast and the northern cities.',
	},
	{
		id: 7,
		duration: 3,
		eyebrow: 'Outer Corridors',
		title: 'Reaching the edges of every market',
		description: 'The longest branches connect the network’s outer regions.',
	},
	{
		id: 8,
		duration: 4,
		eyebrow: 'Full Reach',
		title: 'The final links come online',
		description: 'Northern and southern routes complete the nationwide network.',
	},
	{
		id: 9,
		duration: 5,
		eyebrow: 'Nationwide Network',
		title: '44+ Authorized Dealers',
		description: 'Serving customers across Pakistan.',
	},
] as const;

export const dealers: Dealer[] = [
	{ id: 'karachi', name: 'Karachi', lat: 24.8607, lon: 67.0011, region: 'Sindh', scene: 7, label: true },
	{ id: 'hyderabad', name: 'Hyderabad', lat: 25.396, lon: 68.3578, region: 'Sindh', scene: 6, label: true },
	{ id: 'tando-allahyar', name: 'Tando Allahyar', lat: 25.4626, lon: 68.7192, region: 'Sindh', scene: 5 },
	{ id: 'tando-adam', name: 'Tando Adam', lat: 25.7682, lon: 68.6619, region: 'Sindh', scene: 4 },
	{ id: 'sukkur', name: 'Sukkur', lat: 27.7244, lon: 68.8228, region: 'Sindh', scene: 3, label: true },

	{ id: 'rahim-yar-khan', name: 'Rahim Yar Khan', lat: 28.4212, lon: 70.2989, region: 'Punjab & Capital', scene: 6 },
	{ id: 'sadiqabad', name: 'Sadiqabad', lat: 28.3062, lon: 70.1307, region: 'Punjab & Capital', scene: 7 },
	{ id: 'khanpur', name: 'Khanpur', lat: 28.6474, lon: 70.6569, region: 'Punjab & Capital', scene: 5 },
	{ id: 'dera-ghazi-khan', name: 'Dera Ghazi Khan', lat: 30.0561, lon: 70.6348, region: 'Punjab & Capital', scene: 7 },
	{ id: 'rajanpur', name: 'Rajanpur', lat: 29.1044, lon: 70.3301, region: 'Punjab & Capital', scene: 6 },
	{ id: 'kehror-pakka', name: 'Kehror Pakka', lat: 29.6243, lon: 71.9167, region: 'Punjab & Capital', scene: 4 },
	{ id: 'multan', name: 'Multan', lat: 30.1575, lon: 71.5249, region: 'Punjab & Capital', scene: 3, label: true },

	{ id: 'bahawalpur', name: 'Bahawalpur', lat: 29.3956, lon: 71.6836, region: 'Punjab & Capital', scene: 8, label: true },
	{ id: 'haroonabad', name: 'Haroonabad', lat: 29.6121, lon: 73.1383, region: 'Punjab & Capital', scene: 7 },
	{ id: 'fort-abbas', name: 'Fort Abbas', lat: 29.1934, lon: 72.8554, region: 'Punjab & Capital', scene: 8 },
	{ id: 'chishtian', name: 'Chishtian', lat: 29.7971, lon: 72.8572, region: 'Punjab & Capital', scene: 6 },
	{ id: 'arifwala', name: 'Arifwala', lat: 30.2906, lon: 73.0657, region: 'Punjab & Capital', scene: 5 },
	{ id: 'sahiwal', name: 'Sahiwal', lat: 30.6682, lon: 73.1114, region: 'Punjab & Capital', scene: 4, label: true },
	{ id: 'okara', name: 'Okara', lat: 30.809, lon: 73.4532, region: 'Punjab & Capital', scene: 5 },
	{ id: 'depalpur', name: 'Depalpur', lat: 30.6709, lon: 73.6534, region: 'Punjab & Capital', scene: 6 },
	{ id: 'mian-channu', name: 'Mian Channu', lat: 30.439, lon: 72.3546, region: 'Punjab & Capital', scene: 7 },
	{ id: 'burewala', name: 'Burewala', lat: 30.1664, lon: 72.6503, region: 'Punjab & Capital', scene: 8 },
	{ id: 'pir-mahal', name: 'Pir Mahal', lat: 30.767, lon: 72.4341, region: 'Punjab & Capital', scene: 6 },
	{ id: 'toba-tek-singh', name: 'Toba Tek Singh', lat: 30.9713, lon: 72.4827, region: 'Punjab & Capital', scene: 5 },
	{ id: 'jhang', name: 'Jhang', lat: 31.2681, lon: 72.3181, region: 'Punjab & Capital', scene: 4 },
	{ id: 'faisalabad', name: 'Faisalabad', lat: 31.4504, lon: 73.135, region: 'Punjab & Capital', scene: 3, label: true },

	{ id: 'lahore', name: 'Lahore', lat: 31.5204, lon: 74.3587, region: 'Punjab & Capital', scene: 5, label: true },
	{ id: 'kasur', name: 'Kasur', lat: 31.1187, lon: 74.4502, region: 'Punjab & Capital', scene: 6 },
	{ id: 'sheikhupura', name: 'Sheikhupura', lat: 31.7167, lon: 73.985, region: 'Punjab & Capital', scene: 4 },
	{ id: 'shahkot', name: 'Shahkot', lat: 31.5709, lon: 73.485, region: 'Punjab & Capital', scene: 3 },
	{ id: 'gujranwala', name: 'Gujranwala', lat: 32.1877, lon: 74.1945, region: 'Punjab & Capital', scene: 5, label: true },
	{ id: 'sialkot', name: 'Sialkot', lat: 32.4945, lon: 74.5229, region: 'Punjab & Capital', scene: 6 },
	{ id: 'gujrat', name: 'Gujrat', lat: 32.5731, lon: 74.1005, region: 'Punjab & Capital', scene: 6 },
	{ id: 'kharian', name: 'Kharian', lat: 32.8167, lon: 73.865, region: 'Punjab & Capital', scene: 7 },
	{ id: 'jhelum', name: 'Jhelum', lat: 32.9331, lon: 73.7264, region: 'Punjab & Capital', scene: 8 },
	{ id: 'sargodha', name: 'Sargodha', lat: 32.0836, lon: 72.6711, region: 'Punjab & Capital', scene: 3, label: true },
	{ id: 'joharabad', name: 'Joharabad', lat: 32.29, lon: 72.281, region: 'Punjab & Capital', scene: 4 },

	{ id: 'islamabad', name: 'Islamabad', lat: 33.6844, lon: 73.0479, region: 'Punjab & Capital', scene: 3, label: true },
	{ id: 'attock', name: 'Attock', lat: 33.766, lon: 72.3609, region: 'Punjab & Capital', scene: 5 },
	{ id: 'wah-cantt', name: 'Wah Cantt', lat: 33.7715, lon: 72.7511, region: 'Punjab & Capital', scene: 4 },

	{ id: 'peshawar', name: 'Peshawar', lat: 34.0151, lon: 71.5249, region: 'KPK', scene: 3, label: true },
	{ id: 'mardan', name: 'Mardan', lat: 34.1989, lon: 72.0401, region: 'KPK', scene: 4 },
	{ id: 'timergara', name: 'Timergara', lat: 34.8281, lon: 71.8407, region: 'KPK', scene: 5 },
	{ id: 'mansehra', name: 'Mansehra', lat: 34.3302, lon: 73.1968, region: 'KPK', scene: 3 },
];

export const dealerRoutes: DealerRoute[] = [
	// Southbound branch
	{ from: 'headquarters', to: 'sukkur' },
	{ from: 'sukkur', to: 'tando-adam' },
	{ from: 'tando-adam', to: 'tando-allahyar' },
	{ from: 'tando-allahyar', to: 'hyderabad' },
	{ from: 'hyderabad', to: 'karachi' },
	{ from: 'headquarters', to: 'multan' },
	{ from: 'multan', to: 'kehror-pakka' },
	{ from: 'kehror-pakka', to: 'khanpur' },
	{ from: 'khanpur', to: 'rahim-yar-khan' },
	{ from: 'rahim-yar-khan', to: 'sadiqabad' },
	{ from: 'khanpur', to: 'rajanpur' },
	{ from: 'rajanpur', to: 'dera-ghazi-khan' },

	// Central branches
	{ from: 'headquarters', to: 'faisalabad' },
	{ from: 'faisalabad', to: 'jhang' },
	{ from: 'jhang', to: 'toba-tek-singh' },
	{ from: 'toba-tek-singh', to: 'pir-mahal' },
	{ from: 'pir-mahal', to: 'mian-channu' },
	{ from: 'mian-channu', to: 'burewala' },
	{ from: 'faisalabad', to: 'sahiwal' },
	{ from: 'sahiwal', to: 'arifwala' },
	{ from: 'arifwala', to: 'chishtian' },
	{ from: 'chishtian', to: 'haroonabad' },
	{ from: 'haroonabad', to: 'fort-abbas' },
	{ from: 'fort-abbas', to: 'bahawalpur' },
	{ from: 'sahiwal', to: 'okara' },
	{ from: 'okara', to: 'depalpur' },

	// Northbound branches
	{ from: 'headquarters', to: 'sargodha' },
	{ from: 'sargodha', to: 'joharabad' },
	{ from: 'headquarters', to: 'shahkot' },
	{ from: 'shahkot', to: 'sheikhupura' },
	{ from: 'sheikhupura', to: 'lahore' },
	{ from: 'lahore', to: 'kasur' },
	{ from: 'sheikhupura', to: 'gujranwala' },
	{ from: 'gujranwala', to: 'sialkot' },
	{ from: 'gujranwala', to: 'gujrat' },
	{ from: 'gujrat', to: 'kharian' },
	{ from: 'kharian', to: 'jhelum' },
	{ from: 'headquarters', to: 'islamabad' },
	{ from: 'islamabad', to: 'wah-cantt' },
	{ from: 'wah-cantt', to: 'attock' },
	{ from: 'headquarters', to: 'peshawar' },
	{ from: 'peshawar', to: 'mardan' },
	{ from: 'mardan', to: 'timergara' },
	{ from: 'headquarters', to: 'mansehra' },
];

// Simplified from hqakhtar/PakistanMap (MIT), including Gilgit-Baltistan and AJK.
export const pakistanOutline: [number, number][] = [
	[70.180784, 27.855145], [70.562631, 28.019802], [70.757668, 27.717208],
	[71.658286, 27.86893], [72.208848, 28.399983], [72.384697, 28.76394],
	[72.943755, 29.029911], [73.385399, 29.926019], [73.966317, 30.19505],
	[73.873214, 30.383439], [74.5318, 31.00929], [74.651993, 31.909861],
	[75.239166, 32.08715], [75.330421, 32.33171], [74.698419, 32.484939],
	[74.471956, 32.778362], [74.08284, 33.180741], [73.966461, 33.740321],
	[73.96022, 34.696683], [74.302781, 34.797539], [75.464637, 34.543388],
	[75.749207, 34.515831], [77.010139, 34.956288], [77.427276, 35.469041],
	[76.221825, 35.850933], [75.918868, 36.620478], [75.372352, 36.943619],
	[74.821594, 37.060299], [74.07244, 36.840324], [73.660995, 36.889804],
	[72.656167, 36.849842], [71.657035, 36.477925], [71.230942, 36.06968],
	[71.480279, 35.857697], [71.690292, 35.215469], [71.006814, 34.461116],
	[71.076286, 34.062507], [70.767937, 33.954856], [69.909989, 34.020131],
	[70.341698, 33.393138], [69.590996, 33.08476], [69.2407, 32.461389],
	[69.318435, 31.929872], [68.804938, 31.609981], [68.17749, 31.814499],
	[67.304871, 31.18234], [66.902275, 31.296169], [66.389686, 30.838872],
	[66.266503, 29.841996], [65.097138, 29.542835], [64.631928, 29.581081],
	[64.094346, 29.363863], [63.664895, 29.476407], [62.478648, 29.376551],
	[60.899437, 29.837495], [61.804156, 28.640169], [62.43967, 28.40713],
	[62.768226, 28.032406], [62.855392, 27.465138], [63.184223, 27.241436],
	[63.169185, 26.647295], [62.315068, 26.528869], [61.870755, 26.24674],
	[61.610455, 25.194953], [61.845974, 25.033471], [62.590417, 25.270695],
	[63.488472, 25.205694], [63.69208, 25.385693], [64.400971, 25.236529],
	[66.355973, 25.460695], [66.746528, 25.185695], [66.687637, 24.907507],
	[67.407363, 24.779582], [67.493469, 24.237638], [68.079025, 24.009583],
	[68.749245, 23.962045], [68.764121, 24.284123], [69.600678, 24.277847],
	[70.024087, 24.169353], [71.084961, 24.661421], [70.681137, 25.66076],
	[70.106683, 25.92421], [70.167741, 26.550744], [69.522415, 26.736011],
	[69.586661, 27.177985], [70.180784, 27.855145],
];

const ids = new Set(dealers.map(({ id }) => id));
const networkIds = new Set([...ids, headquarters.id]);
const routeTargets = new Set(dealerRoutes.map(({ to }) => to));
const dealerById = new Map(dealers.map((dealer) => [dealer.id, dealer]));
const reachable = new Set<string>([headquarters.id]);
for (let pass = 0; pass < dealerRoutes.length; pass += 1) {
	for (const { from, to } of dealerRoutes) {
		if (reachable.has(from)) reachable.add(to);
	}
}
const expectedScenes = new Map<DealerScene, number>([
	[2, 0], [3, 8], [4, 8], [5, 9], [6, 9], [7, 6], [8, 4],
]);

if (dealers.length !== 44 || ids.size !== 44) {
	throw new Error('Dealership network must contain exactly 44 uniquely identified locations.');
}

if (
	dealerRoutes.length !== dealers.length ||
	routeTargets.size !== dealers.length ||
	dealerRoutes.some(({ from, to }) => !networkIds.has(from) || !ids.has(to)) ||
	dealers.some(({ id }) => !routeTargets.has(id)) ||
	dealers.some(({ id }) => !reachable.has(id)) ||
	dealerRoutes.some(({ from, to }) => {
		if (from === headquarters.id) return false;
		const parent = dealerById.get(from);
		const child = dealerById.get(to);
		return !parent || !child || parent.scene > child.scene;
	})
) {
	throw new Error('Dealership routes must form one connected tree originating at headquarters.');
}

for (const [scene, expected] of expectedScenes) {
	if (dealers.filter((dealer) => dealer.scene === scene).length !== expected) {
		throw new Error(`Dealership scene ${scene} must contain ${expected} locations.`);
	}
}
