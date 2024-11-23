import React from "react";
import { ComponentRegistry } from "./componentRegistry";

export const renderComponent = (config, index) => {
    if (!config.type) {
        console.error("Component type is required");
        return null;
    }

    const Component = ComponentRegistry[config.type];

    if (!Component) {
        console.error(`Component type "${config.type}" not found in registry`);
        return null;
    }

    const props = {
        key: index,
        className: config.className,
        ...config.props,
    };

    if (config.children) {
        return (
            <Component {...props}>
                {config.children.map((child, childIndex) =>
                    renderComponent(child, `${index}-${childIndex}`),
                )}
            </Component>
        );
    }

    if (config.content) {
        return <Component {...props}>{config.content}</Component>;
    }

    return <Component {...props} />;
};
