import pulver from '../assets/partners/pulver.png';
import surtec from '../assets/partners/surtec.png';
import tkgHuchem from '../assets/partners/TKG-Huchem.png';
import jotun from '../assets/partners/jotun.png';
import sitaraChemical from '../assets/partners/Sitara-chemical.png';
import yueXingMechanical from '../assets/partners/Yue-Xing-Mechanical.png';
import jiansuGiantally from '../assets/partners/Jiansu-giantally.png';
import parcoGass from '../assets/partners/parco-gass.png';
import aluwell from '../assets/partners/Aluwell.png';

export const partners = {
	label: 'Our Partners',
	title: 'Trusted by industry leaders',
	items: [
		{ name: 'Pulver', logo: pulver },
		{ name: 'Surtec', logo: surtec },
		{ name: 'TKG Huchem', logo: tkgHuchem },
		{ name: 'Jotun', logo: jotun },
		{ name: 'Sitara Chemical', logo: sitaraChemical },
		{ name: 'Yue Xing Mechanical', logo: yueXingMechanical },
		{ name: 'Giansu Giantally', logo: jiansuGiantally },
		{ name: 'Parco Gass', logo: parcoGass },
		{ name: 'Aluwell', logo: aluwell },
	],
} as const;
