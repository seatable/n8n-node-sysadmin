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
				operation: ['search_user_org_id'],
			},
		},
		default: '',
		description: 'Enter any query string from the user\'s name, ID, or contact email.',
	},
	{
		displayName: 'org id',
		name: 'org_id',
		type: 'number',
		required: false,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['search_user_org_id'],
			},
		},
		default: '1',
		description: 'search for user in the org with specified org_id',
	},
	{
		displayName: 'limit',
		name: 'limit',
		type: 'number',
		required: false,
		placeholder: '1000',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['search_user_org_id'],
			},
		},
		default: '1000',
		description: 'limit the amount of results',
	},
];
