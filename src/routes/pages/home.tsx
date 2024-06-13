import {Image, Text, Flex, Title, Box} from "@mantine/core";
import Pic from "../../assets/cropped.webp"
const langs = import.meta.glob("../../assets/langs/*.svg")
function Home() {
    console.log(langs)
    return (
        <Box>
            <Flex className="pic" justify="center" align="center" gap="8vw" p="4vh">
                <Image src={Pic} radius={100} h="60vh" w="auto"/>
                <Flex justify="center" align="center" direction="column">
                    <Title>Somfai Máté</Title>
                    <Text>Professional Webdev</Text>
                </Flex> pu
            </Flex>
            <Flex className="intro" justify="center" align="center" p="4vh">
                <Text>Hi there! My name is Somfai Máté (Matthew Dogwood), and I'm an amateur programmer dabbling in web design and programming.</Text>
            </Flex>
        </Box>
    )
}
export default Home