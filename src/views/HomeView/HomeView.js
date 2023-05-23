import { jsx as _jsx } from "preact/jsx-runtime";
import { Heading } from '~/components/Heading';
export const HomeView = () => {
    return (_jsx(NavigationLayout, { children: _jsx(Heading, { headingType: "h2", headingStyle: "h2", children: "Home" }) }));
};
