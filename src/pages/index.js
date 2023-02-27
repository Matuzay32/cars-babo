import { Box } from "@chakra-ui/react";
import Hero from "components/FirstPage.jsx/Hero";
import Contenedor from "components/Header and Footer/Contenedor";
import React from "react";

export default function index() {
	return (
		<>
			<Contenedor>
				<Hero></Hero>
			</Contenedor>
		</>
	);
}
