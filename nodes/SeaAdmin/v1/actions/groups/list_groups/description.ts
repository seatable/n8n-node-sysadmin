import type { SeaAdminGroupsProperties } from '../../Interfaces';

export const description: SeaAdminGroupsProperties = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['list_groups'],
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
				resource: ['groups'],
				operation: ['list_groups'],
			},
		},
		default: 25,
		description: 'The number of results that should be returned',
	},
	{
		displayName: 'Limit Output by Group Name',
		name: 'name',
		type: 'string',
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['list_groups'],
			},
		},
		default: '',
		description:
			'Enter any query string from the name of the group. Capitalization does not matter.',
	},
];
