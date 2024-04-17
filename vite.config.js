// vite.config.js
export default {
	build: {
		assetsDir: '',
		rollupOptions: {
			input: {
				allo: './src/allo/index.ts',
				epicentr: './src/epicentr/index.ts',
				rozetka: './src/rozetka/index.ts',
				ukrstore: './src/ukrstore/index.ts',
			},
		},
	},
};
