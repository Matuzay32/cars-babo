import {
	Heading,
	Box,
	Image,
	HStack,
	Flex,
	Text,
	Button,
} from "@chakra-ui/react";
import Contenedor from "components/Header and Footer/Contenedor";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { autos } from "components/autos/listaDeAutos";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IndividualCar from "components/autos/IndividualCar";

export default function id() {
	const router = useRouter();
	const { id } = router.query;
	const [arrayFotos, setArrayFotos] = useState(
		autos?.find((car) => car.id === parseInt(id))
			?.image || []
	);

	console.log(arrayFotos);
	useEffect(() => {
		if (id) {
			const car = autos.find(
				(car) => car.id === parseInt(id)
			);
			setArrayFotos(car?.image);
		}

		return () => {};
	}, [id]);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 0.5,
		slidesToScroll: 2,
		centerMode: true,
		centerPadding: "0px",
		swipeToSlide: true,
		arrows: true,
		variableWidth: true,
		// nextArrow: <NextArrow />,
		// prevArrow: <PrevArrow />,
	};

	return (
		<Contenedor>
			<IndividualCar></IndividualCar>
			{/* Carru */}
			<Box
				maxW={{
					base: "100%",
					md: "90%",
					lg: "90%",
				}}
				mx="auto"
				textAlign="center">
				<Slider {...settings}>
					{arrayFotos?.map((image, index) => (
						<Box key={index} px="4px">
							<Image
								objectFit={"contain"}
								w={{
									base: "full",
									md: "full",
									lg: "full",
								}}
								h={{
									base: "50vw",
									md: "400px",
									lg: "400px",
								}}
								src={image}
								alt={`Image ${index + 1}`}
							/>
						</Box>
					))}
				</Slider>
			</Box>
		</Contenedor>
	);
}
