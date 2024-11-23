import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import mainConfig from "/config/main.yaml";
import { flattenSitemap } from "./utils/routeUtils";
import PageRenderer from "./PageRenderer.jsx"; // You'll need to create this

const routes = flattenSitemap(mainConfig.sitemap);

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            {routes.map(({ path, conf }) => (
                <Route
                    key={path}
                    path={path}
                    element={<PageRenderer pageConfig={conf} />}
                />
            ))}
        </Routes>
    </BrowserRouter>,
);
