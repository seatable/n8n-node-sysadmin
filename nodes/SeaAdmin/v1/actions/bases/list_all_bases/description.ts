import type { SeaAdminBasesProperties } from '../../Interfaces';

export const description: SeaAdminBasesProperties = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_all_bases'],
			},
		},
		default: 1,
		description: 'The page number you want to start showing the entries',
	},
	{
		displayName: 'Per Page',
		name: 'per_page',
		type: 'number',
		placeholder: '25',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_all_bases'],
			},
		},
		default: 25,
		description: 'The number of results that should be returned',
	},
];
