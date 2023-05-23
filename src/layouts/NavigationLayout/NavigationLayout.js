import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "preact/jsx-runtime";
export const NavigationLayout = ({ children, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { children: [_jsx("a", { href: "/", children: "Home" }), _jsx("a", { href: "/terms", children: "Terms" })] }), _jsx("main", { children: children })] }));
};
