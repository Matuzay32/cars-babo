import React from "react";
import {
	Box,
	Text,
	Button,
	Image,
	Badge,
	Flex,
	chakra,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

export default function Card({ cars }) {
	return (
		<>
			{cars.map((car) => (
				<Flex
					key={car.id}
					p={50}
					w="full"
					alignItems="center"
					justifyContent="center">
					<Flex
						direction="column"
						justifyContent="center"
						alignItems="center"
						w="sm"
						mx="auto">
						<Box
							cursor={"pointer"}
							bg="gray.300"
							h={64}
							w="full"
							rounded="lg"
							shadow="md"
							bgSize="cover"
							bgPos="center"
							style={{
								backgroundImage: `url(${car?.image})`,
							}}></Box>

						<Box
							w={{
								base: 56,
								md: 64,
							}}
							bg="white"
							_dark={{
								bg: "gray.800",
							}}
							mt={-10}
							shadow="lg"
							rounded="lg"
							overflow="hidden">
							<chakra.h3
								py={2}
								textAlign="center"
								fontWeight="bold"
								textTransform="uppercase"
								color="gray.800"
								_dark={{
									color: "white",
								}}
								letterSpacing={1}>
								{car.name}
							</chakra.h3>

							<Flex
								alignItems="center"
								justifyContent="space-between"
								py={2}
								px={3}
								bg="gray.200"
								_dark={{
									bg: "gray.700",
								}}>
								<chakra.span
									fontWeight="bold"
									color="gray.800"
									_dark={{
										color: "gray.200",
									}}>
									Precio
								</chakra.span>
								<Button
									leftIcon={<BsWhatsapp />}
									bgGradient="linear(to-br, #228be6, #15aabf)"
									fontSize="xs"
									fontWeight="bold"
									color="white"
									px={2}
									py={1}
									rounded="lg"
									textTransform="uppercase"
									_hover={{
										bg: "blue.500",
										_dark: {
											bg: "gray.600",
										},
									}}
									_focus={{
										bg: "gray.700",
										_dark: {
											bg: "gray.600",
										},
										outline: "none",
									}}>
									Consultar
								</Button>
							</Flex>

							<Flex
								alignItems="center"
								justifyContent="space-between"
								py={2}
								px={3}
								bg="gray.200"
								_dark={{
									bg: "gray.700",
								}}>
								<chakra.span
									fontWeight="bold"
									color="gray.800"
									_dark={{
										color: "gray.200",
									}}>
									Año
								</chakra.span>

								<chakra.span
									fontWeight="bold"
									color="gray.800"
									_dark={{
										color: "gray.200",
									}}>
									2015
								</chakra.span>
							</Flex>

							<Flex
								alignItems="center"
								justifyContent="space-between"
								py={2}
								px={3}
								bg="gray.200"
								_dark={{
									bg: "gray.700",
								}}>
								<chakra.span
									fontWeight="bold"
									color="gray.800"
									_dark={{
										color: "gray.200",
									}}>
									Km
								</chakra.span>

								<chakra.span
									fontWeight="bold"
									color="gray.800"
									_dark={{
										color: "gray.200",
									}}>
									0
								</chakra.span>
							</Flex>
						</Box>
					</Flex>
				</Flex>
			))}
		</>
	);
}
