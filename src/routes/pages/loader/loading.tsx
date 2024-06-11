import {Center, Loader} from "@mantine/core";

export const Loading = () => {
    return (
        <Center w="100%" h="100%d " pos="fixed" top="0" left="0">
            <Loader type="bars" size="xl" color="blue"></Loader>
        </Center>
    )
}