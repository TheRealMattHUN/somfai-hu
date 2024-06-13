import {ActionIcon, Box, Flex, Text, useComputedColorScheme, useMantineColorScheme} from "@mantine/core";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {IconMoon, IconSun} from '@tabler/icons-react';
function Layout() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');
    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
    };
    return (
        <Box h="100vh">
            <Flex gap="xl" justify="center" align="center" p="md">
                <Text component={Link} to="/somfai-hu/">Home</Text>
                <ActionIcon onClick={toggleColorScheme}>
                    { colorScheme === "light" ? <IconSun/> : <IconMoon />}
                </ActionIcon>
                <Text component={Link} to="/somfai-hu/projects">Projects</Text>
            </Flex>
            <Outlet />
        </Box>
    )
}
export default Layout