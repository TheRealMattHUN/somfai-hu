import {Box, Button, Center, Text, Title} from "@mantine/core";
import {Link} from "react-router-dom";

export const FourOFour = () => {
    return (
        <Center h={"100vh"}>
            <Box ta="center">
                <Title mb="10px">Oops, the page you just tried to reach doesn't exist!</Title>
                <Text mb="10px">(...yet.)</Text>
                <Button size={"md"} component={Link} to="/" variant="outline">Take me back!</Button>
            </Box>
        </Center>
    )
}