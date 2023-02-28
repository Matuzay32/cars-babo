import {
	Box,
	Text,
	Button,
	Image,
	Badge,
	SimpleGrid,
} from "@chakra-ui/react";
import Card from "components/autos/Card";
import HeroAutos from "components/autos/HeroAutos";
import Contenedor from "components/Header and Footer/Contenedor";
import React, { useState } from "react";

export default function autos() {
	return (
		<Contenedor>
			<HeroAutos></HeroAutos>
			<SimpleGrid columns={[1, 1, 3]} spacing="40px">
				<Card></Card>
			</SimpleGrid>
		</Contenedor>
	);
}
