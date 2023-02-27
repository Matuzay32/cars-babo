import { Fragment } from "react";
import {
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	Button,
	Link,
	Icon,
	Flex,
	Box,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiConfirmed, GiMoneyStack } from "react-icons/gi";
import { BsClock } from "react-icons/bs";

const features = [
	{
		title: "Garantizamos un servicio excepcional",
		detail:
			"En nuestra compañía, garantizamos un servicio post venta y seguimiento después de la entrega del auto. Nos aseguramos de que nuestros clientes estén satisfechos con su compra.",
		icon: <GiConfirmed />,
	},
	{
		title: "Financiación",
		detail:
			"ofrecemos financiación para la compra de tu auto. Además, garantizamos un servicio post venta y seguimiento. Queremos brindar un servicio completo y de calidad para que puedas disfrutar de tu auto sin preocupaciones.",
		icon: <GiMoneyStack></GiMoneyStack>,
	},
	{
		title: "Gestión ágil y eficiente",
		detail:
			"nos enfocamos en una gestión ágil y eficiente del papeleo para que puedas disfrutar de tu auto lo más pronto posible. Nos aseguramos de que la documentación esté completa y correcta para evitar retrasos innecesarios.Queremos que tu experiencia de compra sea lo más fácil y agradable posible.",
		icon: <BsClock />,
	},
];
const HeroAutos = () => {
	return (
		<Fragment>
			<Container
				maxW="6xl"
				px={{ base: 6, md: 10 }}
				py={14}>
				<Stack
					direction={{ base: "column", md: "row" }}>
					<Stack
						direction="column"
						spacing={10}
						justifyContent="center">
						<chakra.h1
							fontSize="5xl"
							lineHeight={1}
							fontWeight="bold"
							textAlign="left">
							Descubre nuestra amplia selección de
							autos
						</chakra.h1>
						<Text
							color={useColorModeValue(
								"gray.500",
								"gray.400"
							)}
							fontSize="lg"
							textAlign="left"
							fontWeight="400"
							maxW="700px">
							En nuestra compañía, nos enorgullece
							ofrecer una experiencia de compra única
							y satisfactoria para nuestros clientes.
							Desde la selección de autos 0 km de
							alta calidad, hasta la gestión ágil del
							papeleo y un servicio post venta
							excepcional, nos aseguramos de que tu
							experiencia de compra sea lo más fácil
							y agradable posible. Con nuestra
							financiación disponible, podrás obtener
							el auto de tus sueños sin
							complicaciones innecesarias. ¡No dudes
							en elegirnos para encontrar tu auto
							ideal!
						</Text>
						<Stack
							direction={{
								base: "column",
								md: "row",
							}}
							spacing={{ base: 5, md: 10 }}
							flexWrap="wrap">
							{features.map((feature, index) => (
								<Stack
									key={index}
									direction={{
										base: "row",
										md: "column",
									}}
									spacing={2}>
									<Flex
										p={3}
										maxH="52px"
										w="max-content"
										color="white"
										bgGradient="linear(to-br, #228be6, #15aabf)"
										fontSize={"1.5rem"}
										rounded="md">
										{feature.icon}
									</Flex>
									<Stack
										direction="column"
										spacing={2}>
										<Text
											fontSize="md"
											fontWeight="500">
											{feature.title}
										</Text>
										<Text
											fontSize="sm"
											color="gray.400"
											maxW={{
												base: "100%",
												md: "200px",
											}}>
											{feature.detail}
										</Text>
									</Stack>
								</Stack>
							))}
						</Stack>
						<Stack
							direction={{
								base: "column",
								sm: "row",
							}}
							spacing={{ base: 0, sm: 2 }}
							flexWrap="wrap"></Stack>
					</Stack>
				</Stack>
			</Container>
			<Box overflow="hidden">
				<svg
					fill={useColorModeValue(
						"#f7fafc",
						"#171923"
					)}
					width="150%"
					height="56px"
					transform="scaleX(-1)"
					filter="drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))"
					preserveAspectRatio="none"
					viewBox="0 0 1200 120"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d={`M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 
            250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 
            3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`}></path>
				</svg>
			</Box>
		</Fragment>
	);
};

export default HeroAutos;
