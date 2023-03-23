import {
	useColorModeValue,
	VStack,
	InputGroup,
	InputLeftAddon,
	Box,
	Flex,
	Stack,
	Heading,
	Text,
	Container,
	Input,
	Button,
	SimpleGrid,
	Avatar,
	AvatarGroup,
	useBreakpointValue,
	IconProps,
	Icon,
	FormLabel,
	Image,
	Textarea,
	Select,
} from "@chakra-ui/react";
import { FiCamera, FiSave } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";

import {
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaShoppingCart,
} from "react-icons/fa";
import { useRef, useState } from "react";

import { useRouter } from "next/router";

export default function Formulario() {
	const refForm = useRef();
	const router = useRouter();
	const { push } = router;
	const [modalContent, setModalContent] = useState("");

	const handleSumbit = () => {
		const url = "0.tcp.sa.ngrok.io:14480";
		const { current: form } = refForm;
		const formData = new FormData(form);
		const name = formData.get("name");
		const description = formData.get("description");
		const year = formData.get("year");
		const image = formData.get("image").split(",");

		if (
			formData &&
			name &&
			description &&
			year &&
			image
		) {
			const images = image.map((url) => ({ url: url }));
			const car = {
				name,
				description,
				year: parseInt(year),
				image: images,
			};
			(async (car) => {
				const response = await fetch(
					`http://0.tcp.sa.ngrok.io:14480/auto`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(car),
					}
				);
				const data = await response.json();
				console.log(data);
			})(car);
		} else {
			alert("Faltan datos");
		}
	};

	return (
		<Box
			position={"relative"}
			w={"full"}
			backgroundSize={"cover"}
			backgroundPosition={"25% 50%"}
			backgroundImage={
				"url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80)"
			}>
			<Container
				as={SimpleGrid}
				maxW={"7xl"}
				columns={{ base: 1, md: 2 }}
				spacing={{ base: 10, lg: 32 }}
				py={{ base: 10, sm: 20, lg: 32 }}>
				<Stack spacing={{ base: 10, md: 20 }}>
					<Heading
						color={1900}
						lineHeight={1.1}
						fontSize={{
							base: "3xl",
							sm: "4xl",
							md: "5xl",
							lg: "6xl",
						}}>
						<Text color={200} as={"span"}>
							Welcome
						</Text>{" "}
						<Text color={300} as={"span"}>
							to the
						</Text>{" "}
						<Text color={500}> upload section</Text>
					</Heading>

					<Stack
						direction={"row"}
						spacing={4}
						align={"center"}></Stack>
				</Stack>
				<Stack
					bg={"gray.50"}
					rounded={"xl"}
					p={{ base: 4, sm: 6, md: 8 }}
					spacing={{ base: 8 }}
					maxW={{ lg: "lg" }}>
					<Stack spacing={4}>
						<Heading
							color={"gray.800"}
							lineHeight={1.1}
							fontSize={{
								base: "2xl",
								sm: "3xl",
								md: "4xl",
							}}>
							Upload your Car
							<Text
								as={"span"}
								bgGradient="linear(to-r, black ,white)"
								bgClip="text">
								--
							</Text>
							<Icon as={AiFillCar} />
							<Text
								as={"span"}
								bgGradient="linear(to-r, white ,black)"
								bgClip="text">
								--
							</Text>
						</Heading>
						<Text
							color={"gray.500"}
							fontSize={{ base: "sm", sm: "md" }}>
							Welcome to the car loading section, do
							not hesitate to load the car you want
							in our database. We offer you advice
							and commitment when putting you in
							contact with the client so that you can
							make a safe sale
						</Text>
					</Stack>
					<Box as={"form"} mt={10} ref={refForm}>
						<Stack spacing={4}>
							<FormLabel>Modelo</FormLabel>
							<Input
								required
								placeholder="Modelo"
								name="name"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
								defaultValue="Prueba final"
							/>

							<FormLabel>Auto_description</FormLabel>
							<Textarea
								required
								placeholder="auto_description"
								name="description"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
								defaultValue="Nueva Amarok DC 258 cv Edicion Limitada"
							/>

							<FormLabel>auto_year</FormLabel>
							<Input
								required
								name="year"
								type={"number"}
								placeholder="auto_year"
								bg={"gray.100"}
								border={0}
								color={"gray.500"}
								_placeholder={{
									color: "gray.500",
								}}
								defaultValue={2024}
							/>

							<VStack spacing={4}>
								<FormLabel>Imagenes</FormLabel>
								<InputGroup>
									<InputLeftAddon children="https://" />
									<Textarea
										required
										name="image"
										placeholder="Ingresa los URLs de las imágenes separados por coma o espacio"
									/>
								</InputGroup>
							</VStack>
							<Button
								onClick={(e) => handleSumbit(e)}
								rounded={"none"}
								w={"full"}
								mt={8}
								size={"lg"}
								p={"7"}
								bg={useColorModeValue(
									"black",
									"black"
								)}
								color={useColorModeValue(
									"white",
									"gray"
								)}
								textTransform={"uppercase"}
								leftIcon={<FiSave w={5} h={5} />}
								_hover={{
									transform: "translateY(10px)",
									bg: "black",
								}}>
								Upload
							</Button>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
