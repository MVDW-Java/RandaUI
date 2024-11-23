import { useEffect, useState } from "react";
import { getComponentStyles } from "../utils/styleUtils";

export const Button = ({
    text,
    variant = "primary",
    size = "md",
    disabled = false,
    onClick,
    className = "",
}) => {
    const [styles, setStyles] = useState("");

    useEffect(() => {
        const loadStyles = async () => {
            try {
                const buttonConfig = await import(
                    "../../config/styles/components/button.yaml"
                );
                const computedStyles = getComponentStyles(
                    buttonConfig.default,
                    variant,
                    size,
                );
                setStyles(computedStyles);
            } catch (error) {
                console.error("Error loading button styles:", error);
            }
        };

        loadStyles();
    }, [variant, size]);

    return (
        <button
            className={`${styles} transition-colors duration-200 ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
