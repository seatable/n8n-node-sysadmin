import type { SeaAdminBasesProperties } from '../../Interfaces';

export const description: SeaAdminBasesProperties = [
	{
		displayName: 'user id',
		name: 'user_id',
		type: 'string',
		required: true,
		placeholder: 'af19103161231@auth.local',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_users_bases'],
			},
		},
		default: '',
		description: '',
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
				operation: ['list_users_bases'],
			},
		},
		default: '1',
		description: 'The page number you want to start showing the entries. If no value is provided, 1 will be used.',
	},
	{
		displayName: 'Per Page',
		name: 'per_page',
		type: 'number',
		required: false,
		placeholder: '25',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['list_users_bases'],
			},
		},
		default: '25',
		description: 'The number of results that should be returned. If no value is provided, 25 results will be returned.',
	},

];
