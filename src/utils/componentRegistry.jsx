import { Button } from "../components/Button";

// Add basic HTML elements
const BasicElements = {
    div: "div",
    section: "section",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    span: "span",
};

// Map component types to their implementations
export const ComponentRegistry = {
    ...BasicElements,
    Button,
};
