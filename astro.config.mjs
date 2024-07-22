import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Deserted Tales Wiki',
			social: {
				github: 'https://github.com/phaylali/deserted_tales_wiki',
			},
			sidebar: [
				{
					label: 'Events',
					autogenerate: { directory: 'events' },
				},
				{
					label: 'Characters',
					autogenerate: { directory: 'characters' },
				},
				{
					label: 'Groups',
					autogenerate: { directory: 'groups' },
				},
				{
					label: 'Locations',
					autogenerate: { directory: 'locations' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'References',
					autogenerate: { directory: 'references' },
				},
			],
		}),
	],
});
