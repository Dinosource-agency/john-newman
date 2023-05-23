import { jsx as _jsx } from "preact/jsx-runtime";
import { render } from 'preact';
import { App } from '~/app.tsx';
import '~/styles/main.scss';
render(_jsx(App, {}), document.getElementById('app'));
