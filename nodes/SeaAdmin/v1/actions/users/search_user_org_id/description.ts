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
				operation: ['search_user_org_id'],
			},
		},
		default: '',
		description: "Enter any query string from the user's name, ID, or contact email.",
	},
	{
		displayName: 'Organization ID / Team ID',
		name: 'org_id',
		type: 'number',
		required: true,
		placeholder: '13',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['search_user_org_id'],
			},
		},
		default: '1',
		description: 'Search for user in a specific organization/team with specified org_id',
	},
	{
		displayName: 'limit',
		name: 'limit',
		type: 'number',
		required: false,
		placeholder: '100',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['search_user_org_id'],
			},
		},
		default: '10',
		description: 'Limit the amount of results',
	},
];
