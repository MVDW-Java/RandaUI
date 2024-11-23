import { useEffect, useState } from "react";
import { renderComponent } from "./utils/componentRenderer";

const PageRenderer = ({ pageConfig }) => {
    const [pageData, setPageData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPageConfig = async () => {
            try {
                const config = await import(
                    `../config/pages/${pageConfig}.yaml`
                );
                setPageData(config.default);
                setError(null);
            } catch (error) {
                console.error("Error loading page configuration:", error);
                setError("Failed to load page configuration");
            }
        };

        loadPageConfig();
    }, [pageConfig]);

    if (error) {
        return <div className="text-red-500 p-4">{error}</div>;
    }

    if (!pageData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className={`page-${pageConfig}`}>
            {pageData.components?.map((componentConfig, index) =>
                renderComponent(componentConfig, index),
            )}
        </div>
    );
};

export default PageRenderer;
