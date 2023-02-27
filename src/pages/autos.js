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
	const [cars, setCars] = useState([
		{
			id: 1,
			name: "ferrary",
			description: "Descripción del producto 1",
			image: [
				"https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			],
		},
		{
			id: 2,
			name: "Vmw",
			description: "Descripción del producto 2",
			image: [
				"https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			],
		},
		{
			id: 3,
			name: "mustang",
			description: "Descripción del producto 3",
			image: [
				"https://images.unsplash.com/photo-1547744152-14d985cb937f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			],
		},
	]);
	return (
		<Contenedor>
			<HeroAutos></HeroAutos>
			<SimpleGrid columns={[1, 1, 3]} spacing="40px">
				<Card cars={cars}></Card>
			</SimpleGrid>
		</Contenedor>
	);
}
