import { useEffect, useState } from "react";

const ConfigurableLayout = ({ layoutName = "default", children }) => {
    const [layoutConfig, setLayoutConfig] = useState(null);

    useEffect(() => {
        const loadLayoutConfig = async () => {
            try {
                const config = await import(
                    "../../config/layouts/layouts.yaml"
                );
                setLayoutConfig(config.default[layoutName]);
            } catch (error) {
                console.error("Error loading layout configuration:", error);
            }
        };

        loadLayoutConfig();
    }, [layoutName]);

    if (!layoutConfig) {
        return <div>{children}</div>; // Fallback layout
    }

    return (
        <div className={layoutConfig.container?.className || ""}>
            {layoutConfig.sidebar && (
                <aside className={layoutConfig.sidebar.className}>
                    {/* Sidebar content can be added here */}
                </aside>
            )}
            <main className={layoutConfig.main?.className || ""}>
                {children}
            </main>
        </div>
    );
};

export default ConfigurableLayout;
