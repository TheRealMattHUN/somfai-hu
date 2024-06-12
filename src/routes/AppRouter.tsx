import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router";
import {FourOFour} from "./pages/FourOFour/FourOFour.tsx"
import {Loading} from "./pages/loader/loading.tsx";

export const AppRouter = () => {
    const Layout = lazy(() => import("./pages/layout"));
    const Home = lazy(() => import("./pages/home"));
    const Projects = lazy(() => import("./pages/projects"));
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/projects" element={<Projects />}/>
                </Route>
                <Route path='*' element={<FourOFour />}/>
            </Routes>
        </Suspense>
    )
}