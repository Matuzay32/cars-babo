import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

export default function Contenedor({ children }) {
	return (
		<Box pos={"relative"} minH={"100vh"}>
			<Header></Header>
			<Box mb={"6rem"}>{children}</Box>

			<Footer></Footer>
		</Box>
	);
}
