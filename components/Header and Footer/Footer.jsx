import {
	Box,
	chakra,
	Container,
	Image,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import {
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";
import { BsWhatsapp } from "react-icons/bs";

const Logo = () => {
	return <Image src="logo.svg" alt="Mi logo" />;
};

const Redes = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue(
				"linkHeader.50",
				"linkHeader.500"
			)}
			rounded={"full"}
			w={"3rem"}
			h={"3rem"}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				fontSize: "33px",

				color: "white",
				bg: useColorModeValue(
					"linkHeader.400",
					"whiteAlpha.200"
				),
				transform: "  scale(1.7);",
				transition: "all 1s",
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>

			{children}
		</chakra.button>
	);
};

export default function Footer() {
	return (
		<Box
			h={"auto"}
			bottom={0}
			w={"100%"}
			bg={useColorModeValue("white", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={2}
				justify={{
					base: "center",
					md: "space-between",
				}}
				align={{ base: "center", md: "center" }}>
				<Logo />
				<Text>
					© 2023 todos los derechos reservados
				</Text>
				<Stack direction={"row"} spacing={6}>
					<Redes
						label={"WhatsApp"}
						href={
							"https://wa.me/5491168856073?text=GENERAL_ENQUIRY"
						}>
						<BsWhatsapp />
					</Redes>
				</Stack>
			</Container>
		</Box>
	);
}
