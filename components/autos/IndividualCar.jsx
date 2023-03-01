import { PropsWithChildren } from "react";
import {
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	Image,
	Skeleton,
	Box,
	Link,
	TextProps,
} from "@chakra-ui/react";

const MissionSection = () => {
	return (
		<Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
			<Stack
				direction={{ base: "column", md: "row" }}
				justifyContent="center">
				<Box mr={{ base: 0, md: 5 }} pos="relative">
					<DottedBox />
				</Box>
				<Stack
					direction="column"
					spacing={6}
					justifyContent="center">
					<chakra.h1
						fontSize="5xl"
						lineHeight={1}
						fontWeight="bold"
						textAlign="left">
						AMAROK
					</chakra.h1>
					<Box>
						<Content>
							Building products is hard. We've built
							our fair share and we've noticed the
							problems you always run into.
						</Content>
					</Box>
					<Link
						href="#"
						fontSize="sm"
						color="blue.400">
						See how people are using our components →
					</Link>
				</Stack>
			</Stack>
		</Container>
	);
};

const Content = ({ children, ...props }) => {
	return (
		<Text
			fontSize="md"
			textAlign="left"
			lineHeight="1.375"
			fontWeight="400"
			color="gray.500"
			{...props}>
			{children}
		</Text>
	);
};

function DottedBox() {
	return (
		<Box
			position="absolute"
			left="-45px"
			top="-30px"
			height="full"
			maxW="700px"
			zIndex={-1}>
			<svg
				color={useColorModeValue(
					"rgba(55,65,81, 0.1)",
					"rgba(55,65,81, 0.7)"
				)}
				width="350"
				height="420"
				fill="none">
				<defs>
					<pattern
						id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse">
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							fill="currentColor"></rect>
					</pattern>
				</defs>
				<rect
					width="404"
					height="404"
					fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
			</svg>
		</Box>
	);
}

export default MissionSection;
