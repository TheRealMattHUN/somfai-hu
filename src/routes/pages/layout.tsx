import {Box, Flex, Text} from "@mantine/core";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
function Layout() {
    return (
        <Box h="100vh">
            <Flex gap="xl" justify="center" align="center" p="md">
                <Text component={Link} to="/somfai-hu/">Home</Text>
                <Text component={Link} to="/somfai-hu/projects">Projects</Text>
            </Flex>
            <Outlet />
        </Box>
    )
}
export default Layout