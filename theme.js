import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
	//Lo uso para los links y el color de los botones
	//De esta forma al cambiar el color aqui cambia en el resto
	linkHeader: {
		800: "#4A5568",
		50: "#EDF2F7",
		400: "#4299E1",
		500: "#3182CE",
		200: "rgba(255, 255, 255, 0.452)",
		900: "linear(to-l, #0ea5e9,#2563eb)",
	},

	footerBg: {
		50: "#90CDF4",
		400: "#A0AEC0",
		100: "#F7FAFC",
		200: "rgba(255, 255, 255, 0.452)",
	},

	tecnologies: {
		100: "RGBA(0, 0, 0, 0.08)",
	},
};

export const tema = extendTheme({ colors });
