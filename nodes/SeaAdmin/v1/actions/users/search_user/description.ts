import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'Search query',
		name: 'query',
		type: 'string',
		required: true,
		placeholder: 'me@example.com',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['search_user'],
			},
		},
		default: '',
		description: "Enter any query string from the user's name, user id, or contact email.",
	},
];
