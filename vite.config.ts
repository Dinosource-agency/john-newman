import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths(), preact()],
	resolve: {
		alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
	},
});
