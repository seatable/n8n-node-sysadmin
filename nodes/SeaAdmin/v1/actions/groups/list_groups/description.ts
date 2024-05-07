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
				resource: ['groups'],
				operation: ['list_groups'],
			},
		},
		default: '25',
		description: 'The number of results that should be returned. If no value is provided, 25 results will be returned.',
	},
	{
		displayName: 'Name',
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
		default: 'Enter any query string from the name of the group.',
		description: '',
	},


];
