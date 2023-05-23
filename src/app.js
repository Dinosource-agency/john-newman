import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { APP_ROUTES } from '~/main.const.ts';
import { HomeView, TermsView } from '~/views';
import { Router, Route } from 'preact-router';
export const App = () => {
    return (_jsxs(Router, { children: [_jsx(Route, { path: APP_ROUTES.home, component: HomeView }), _jsx(Route, { path: APP_ROUTES.terms, component: TermsView })] }));
};
