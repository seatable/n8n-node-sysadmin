import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['list_users'],
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
				resource: ['users'],
				operation: ['list_users'],
			},
		},
		default: 25,
		description: 'The number of results that should be returned',
	},
];
