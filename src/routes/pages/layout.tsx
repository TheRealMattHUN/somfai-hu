import {Flex, Text} from "@mantine/core";
import {Suspense} from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {Loading} from "./loader/loading"
function Layout() {
    return (
        <Suspense fallback={<Loading />}>
            <Flex gap="md" justify="center" align="center">
                <Text component={Link} to="/">Home</Text>
                <Text component={Link} to="/projects">Projects</Text>
            </Flex>
            <Outlet />
        </Suspense>
    )
}
export default Layout