import {lazy} from "react";
import {Route} from "react-router";

export const AppRouter = () => {
    const Layout = lazy(() => import("./pages/layout"));
    const Home = lazy(() => import("./pages/home"));
    const Projects = lazy(() => import("./pages/projects"));
    return (
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
        </Route>
    )
}