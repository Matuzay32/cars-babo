import {
	chakra,
	Link,
	Stack,
	Box,
	Button,
	useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icon
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { useRouter } from "next/router";

const Hero = () => {
	const router = useRouter();

	const redireccionar = () => {
		console.log(router.push("/autos"));
	};

	return (
		<Box pb={8}>
			<Stack
				pos="relative"
				backgroundSize={"cover"}
				backgroundPosition={"25% 50%"}
				backgroundImage={
					"url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80)"
				}
				// bgGradient={`linear(to-l, blue.500, blue.400 , cyan.400)`}
				height="350px"
				w="100%"></Stack>
			<Box
				maxW="3xl"
				p={4}
				isolation="isolate"
				zIndex={3}
				mt="-10rem"
				marginInline="auto">
				<Box
					boxShadow={useColorModeValue(
						"0 4px 6px rgba(160, 174, 192, 0.6)",
						"0 4px 6px rgba(9, 17, 28, 0.9)"
					)}
					bg={useColorModeValue("white", "gray.800")}
					p={{ base: 4, sm: 8 }}
					overflow="hidden"
					rounded="2xl">
					<Stack
						pos="relative"
						zIndex={1}
						direction="column"
						spacing={5}
						textAlign="left">
						<chakra.h1
							fontSize="4xl"
							lineHeight={1.2}
							fontWeight="bold">
							Autos 0 km con la mejor financiación -
							Encuentra el tuyo hoy
						</chakra.h1>
						<chakra.h1
							color="gray.400"
							fontSize="xl"
							maxW="600px"
							lineHeight={1.2}>
							Bienvenido a nuestra concesionaria de
							automóviles, donde ofrecemos una amplia
							selección de vehículos nuevos de alta
							calidad. Todos nuestros autos son 0 km
							y están disponibles con la mejor
							financiación para satisfacer tus
							necesidades.
						</chakra.h1>

						<Stack
							justifyContent={"center"}
							alignItems={"center"}
							direction={{
								base: "column",
								md: "column",
							}}
							spacing={3}>
							<chakra.button
								w={"full"}
								h={12}
								px={20}
								color="white"
								fontSize="md"
								variant="solid"
								rounded="md"
								lineHeight={1}
								bg="blue.400"
								onClick={() => redireccionar()}
								_hover={{ bg: "blue.600" }}>
								Autos
							</chakra.button>
						</Stack>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default Hero;
