import type { SeaAdminGroupsProperties } from '../../Interfaces';

export const description: SeaAdminGroupsProperties = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		required: false,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['list_groups'],
			},
		},
		default: '1',
		description: 'The page number you want to start showing the entries.',
	},
	{
		displayName: 'Per Page',
		name: 'per_page',
		type: 'number',
		required: false,
		placeholder: '25',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['list_groups'],
			},
		},
		default: '25',
		description: 'The number of results that should be returned.',
	},
	{
		displayName: 'Limit output by group name',
		name: 'name',
		type: 'string',
		required: false,
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
