import {Box, Center, Text} from "@mantine/core";
import {Suspense} from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
function Layout() {
    return (
        <Suspense fallback="loading!">
            <Center>
                <Box>
                    <Text component={HashLink} to="/#">Home</Text>
                    <Text component={HashLink} to="/#about">About me</Text>
                    <Text component={HashLink} to="/#lang">Languages</Text>
                    <Text component={Link} to="/projects">Projects</Text>
                </Box>
            </Center>
            <Outlet />
        </Suspense>

    )
}
export default Layout