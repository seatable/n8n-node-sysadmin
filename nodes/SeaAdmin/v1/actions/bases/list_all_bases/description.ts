import type { SeaAdminBasesProperties } from '../../Interfaces';

export const description: SeaAdminBasesProperties = [
	{
		displayName: 'Per Page',
		name: 'per_page',
		type: 'number',
		required: false,
		placeholder: '25',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_all_bases'],
			},
		},
		default: '25',
		description: 'The Start date in ISO format.',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		required: false,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_all_bases'],
			},
		},
		default: '1',
		description: 'The End date in ISO format.',
	},

];
