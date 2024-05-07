import type { SeaAdminUsersProperties } from '../../Interfaces';

export const description: SeaAdminUsersProperties = [
	{
		displayName: 'Per Page',
		name: 'per_page',
		type: 'number',
		required: false,
		placeholder: '25',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['search_user'],
			},
		},
		default: '',
		description: 'The number of results that should be returned. If no value is provided, 25 results will be returned.',
	},
];
