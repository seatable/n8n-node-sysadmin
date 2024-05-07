import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'query',
		name: 'query',
		type: 'string',
		required: false,
		placeholder: 'teamuser001@example.com',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['search_user'],
			},
		},
		default: '',
		description: 'Enter any query string from the user\'s name, ID, or contact email.',
	},
];
