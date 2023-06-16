import { render } from 'preact';
import { App } from '~/app.tsx';
import '~styles/main.scss';

render(<App />, document.getElementById('app') as HTMLElement);
