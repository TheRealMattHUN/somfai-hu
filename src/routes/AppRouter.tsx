import {lazy} from "react";
import {Route} from "react-router";

export const AppRouter = () => {
    const Home = lazy(() => import("./pages/home.tsx"));
    const Projects = lazy(() => import("./pages/projects.tsx"));
    const Layout = lazy(() => import("./pages/layout.tsx"));
    return (
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
        </Route>
    )
}