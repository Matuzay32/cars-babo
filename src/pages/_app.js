// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { tema } from "../../theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={tema}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
