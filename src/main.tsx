import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css'
import {AppRouter} from "./routes/AppRouter.tsx";
import {MantineProvider} from "@mantine/core";
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

export const router = createBrowserRouter(createRoutesFromElements(AppRouter()))

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <RouterProvider router={router}/>
    </MantineProvider>
)
