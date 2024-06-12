import {Image, Text, Flex, Title, Box} from "@mantine/core";
import Pic from "../../assets/cropped.webp"
function Home() {
  return (
      <Box>
        <Flex className="pic" justify="center" align="center" gap="5vw" p="md">
          <Image src={Pic} radius={100} h="30vh" w="auto"/>
          <Flex justify="center" align="center" direction="column">
            <Title order={1}>Somfai Máté</Title>
          </Flex>
        </Flex>
        <Flex className="intro" justify="center" align="center" direction="column" p="xl">
          <Title order={4}>Hi there! My name is Somfai Máté (Matthew Dogwood), and I'm an amateur programmer dabbling in web design and programming.</Title>
          <Text>I started learning programming when I was about 12 years old, but didn't really take it seriously until recently.</Text>
        </Flex>
        <Box className="langs">
          <Flex justify="center" align="center" >
            <Title order={2}>Expertise in these languages:</Title>
          </Flex>
        </Box>
      </Box>
    )
}
export default Home