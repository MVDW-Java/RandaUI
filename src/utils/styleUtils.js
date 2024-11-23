export const getComponentStyles = (
    componentConfig,
    variant = "primary",
    size = "md",
) => {
    if (!componentConfig || !componentConfig.variants) {
        return "";
    }

    const variantConfig = componentConfig.variants[variant];
    if (!variantConfig) {
        return "";
    }

    // Combine all classes in a more structured way
    const classes = [
        // Base styles
        variantConfig.base || "",
        // State styles
        Object.values(variantConfig.states || {}).join(" "),
        // Size styles
        variantConfig.sizes?.[size] || "",
    ];

    return classes.filter(Boolean).join(" ").trim();
};
