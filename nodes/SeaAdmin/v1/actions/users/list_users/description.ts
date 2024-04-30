import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		required: false,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['list_users'],
			},
		},
		default: '',
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
				resource: ['users'],
				operation: ['list_users'],
			},
		},
		default: '',
		description: 'The number of results that should be returned. If no value is provided, 25 results will be returned.',
	},
];
