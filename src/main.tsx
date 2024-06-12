import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css'
import {AppRouter} from "./routes/AppRouter.tsx";
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {Loading} from "./routes/pages/loader/loading.tsx";
import {Suspense} from "react";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Suspense>
    </MantineProvider>
)
