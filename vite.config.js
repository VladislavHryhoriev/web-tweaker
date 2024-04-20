import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		assetsDir: '',
		rollupOptions: {
			input: {
				allo: './src/sites/allo/index.ts',
				epicentr: './src/sites/epicentr/index.ts',
				rozetka: './src/sites/rozetka/index.ts',
				ukrstore: './src/sites/ukrstore/index.ts',
			},
		},
	},
});
