import {
	Heading,
	Box,
	Image,
	HStack,
	Flex,
	Text,
	Button,
} from "@chakra-ui/react";
import HeroAutos from "components/autos/HeroAutos";
import Contenedor from "components/Header and Footer/Contenedor";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { autos } from "components/autos/listaDeAutos";

export default function id() {
	const router = useRouter();
	const { id } = router.query;
	const [posicion, setPosicion] = useState(0);
	const [arrayFotos, setArrayFotos] = useState(
		autos?.find((car) => car.id === parseInt(id))
			?.image || []
	);
	const largo = arrayFotos ? arrayFotos.length : 0;

	const arrowStyles = {
		cursor: "pointer",
		pos: "absolute",
		top: "50%",
		w: "auto",
		mt: "-22px",
		p: "16px",
		color: "white",
		fontWeight: "bold",
		fontSize: "18px",
		transition: "0.6s ease",
		borderRadius: "0 3px 3px 0",
		userSelect: "none",
		_hover: {
			opacity: 0.8,
			bg: "black",
		},
	};

	const fotoAnterior = () => {
		setPosicion((s) => (s === 0 ? largo - 1 : s - 1));
	};

	const siguienteFoto = () => {
		setPosicion((s) => (s === largo - 1 ? 0 : s + 1));
	};

	const setSlide = (slide) => {
		setPosicion(slide);
	};

	useEffect(() => {
		if (id) {
			const car = autos.find(
				(car) => car.id === parseInt(id)
			);
			setArrayFotos(car?.image || []);
		}

		return () => {};
	}, [id]);

	useEffect(() => {
		let intervalId;

		if (arrayFotos.length > 0) {
			intervalId = setInterval(() => {
				siguienteFoto();
			}, 3000);
		}

		return () => clearInterval(intervalId);
	}, [arrayFotos, siguienteFoto]);

	const carouselStyle = {
		transition: "all .5s",
		ml: `-${posicion * 100}%`,
	};

	return (
		<Contenedor>
			<Flex
				w="full"
				bg="#edf3f8"
				_dark={{
					bg: "#3e3e3e",
				}}
				p={10}
				alignItems="center"
				justifyContent="center">
				<Flex w="full" overflow="hidden" pos="relative">
					<Flex h="400px" w="full" {...carouselStyle}>
						{arrayFotos?.map((photo, indice) => (
							<Box
								key={`slide-${indice}`}
								boxSize="full"
								shadow="md"
								flex="none">
								<Text
									color="white"
									fontSize="xs"
									p="8px 12px"
									pos="absolute"
									top="0">
									{indice + 1} / {largo}
								</Text>
								<Image
									src={photo}
									alt="carousel image"
									boxSize="full"
									backgroundSize="cover"
								/>
							</Box>
						))}
					</Flex>

					<HStack
						justify="center"
						pos="absolute"
						bottom="8px"
						w="full">
						{Array.from({
							length: largo,
						}).map((_, slide) => (
							<Box
								key={`dots-${slide}`}
								cursor="pointer"
								boxSize={["7px", null, "15px"]}
								m="0 2px"
								bg={
									posicion === slide
										? "blackAlpha.800"
										: "blackAlpha.500"
								}
								rounded="50%"
								display="inline-block"
								transition="background-color 0.6s ease"
								_hover={{
									bg: "blackAlpha.800",
								}}
								onClick={() =>
									setSlide(slide)
								}></Box>
						))}
					</HStack>
				</Flex>
			</Flex>
		</Contenedor>
	);
}
