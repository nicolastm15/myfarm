var id = 0,
	tipo = 0;

export const secao = [
	"anomalias",
	"fungicas",
	"bacterioses",
	"viroses",
	"pragas",
	"climaticas"
];

export const data = [
	{ key: id++, section: true, label: "Anomalias fisiológicas" },
	{ key: id++, label: "Podridão-apical", tipo: tipo },
	{ key: id++, label: "Lóculo-aberto", tipo: tipo },
	{ key: id++, label: "Queda de flores e frutos", tipo: tipo },
	{ key: id++, label: "Frutos amarelos", tipo: tipo },
	{ key: id++, label: "Frutos ocados", tipo: tipo },
	{ key: id++, label: "Frutos rachados", tipo: tipo },
	{ key: id++, label: "Frutos com escaldadura", tipo: tipo },
	{ key: id++, label: "Amarelo-baixeiro (fisiológico)", tipo: tipo },
	{ key: id++, label: "Enrolamento de folhas baixeiras", tipo: tipo },
	{ key: id++, label: "Fitotoxidez por resíduos de herbicidas", tipo: tipo },

	{ key: id++, section: true, label: "Doenças fúngicas", tipo: ++tipo },
	{ key: id++, label: "Requeima", tipo: tipo },
	{ key: id++, label: "Pinta-de-alternária", tipo: tipo },
	{ key: id++, label: "Septoriose", tipo: tipo },
	{ key: id++, label: "Mancha-de-estenfílio", tipo: tipo },
	{ key: id++, label: "Murcha-fusáriana", tipo: tipo },
	{ key: id++, label: "Murcha-verticilar", tipo: tipo },
	{ key: id++, label: "Murcha-de-esclerócio", tipo: tipo },
	{ key: id++, label: "Rizoctoniose", tipo: tipo },
	{ key: id++, label: "Podridão-de-esclerotínia", tipo: tipo },

	{ key: id++, section: true, label: "Bacterioses", tipo: ++tipo },
	{ key: id++, label: "Cancro-bacteriano", tipo: tipo },
	{ key: id++, label: "Murcha-bacteriana", tipo: tipo },
	{ key: id++, label: "Pústula-bacteriana", tipo: tipo },
	{ key: id++, label: "Pinta-bacteriana", tipo: tipo },
	{ key: id++, label: "Talo-oco", tipo: tipo },

	{ key: id++, section: true, label: "Viroses", tipo: ++tipo },
	{ key: id++, label: "Mosaico-comum", tipo: tipo },
	{ key: id++, label: "Vira-cabeça (Tospovirose)", tipo: tipo },
	{ key: id++, label: "Mosaico-dourado (Geminivirose)", tipo: tipo },
	{ key: id++, label: "Topo-amarelo", tipo: tipo },
	{ key: id++, label: "Amarelo-baixeiro (Virótico)", tipo: tipo },
	{ key: id++, label: "Mosaico Y", tipo: tipo },
	{ key: id++, label: "Broto-Crespo", tipo: tipo },

	{ key: id++, section: true, label: "Praga", tipo: ++tipo },
	{ key: id++, label: "Brocas-dos-frutos", tipo: tipo },
	{ key: id++, label: "Pulgões", tipo: tipo },
	{ key: id++, label: "Mosca-branca", tipo: tipo },
	{ key: id++, label: "Mosca-minadora", tipo: tipo },
	{ key: id++, label: "Tripes", tipo: tipo },
	{ key: id++, label: "Cigarrinha", tipo: tipo },
	{ key: id++, label: "Ácaros fitófagos", tipo: tipo },
	{ key: id++, label: "Nematóides", tipo: tipo },

	{ key: id++, section: true, label: "Climáticas", tipo: ++tipo },
	{ key: id++, label: "Cheia", tipo: tipo },
	{ key: id++, label: "Vento", tipo: tipo },
	{ key: id++, label: "Granizo", tipo: tipo },
	{ key: id++, label: "Geada", tipo: tipo },
	{ key: id++, label: "Sol", tipo: tipo }
];
