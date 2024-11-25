import ConfigurableLayout from "../layouts/ConfigurableLayout";

export const LayoutRegistry = {
    default: (props) => <ConfigurableLayout layoutName="default" {...props} />,
    centered: (props) => (
        <ConfigurableLayout layoutName="centered" {...props} />
    ),
    sidebar: (props) => <ConfigurableLayout layoutName="sidebar" {...props} />,
};
