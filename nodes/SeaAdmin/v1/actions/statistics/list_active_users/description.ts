import type { SeaAdminStatisticsProperties } from '../../Interfaces';

export const description: SeaAdminStatisticsProperties = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'dateTime',
		required: true,
		placeholder: '2024-06-19 00:00:00',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['list_active_users'],
			},
		},
		default: '',
		description: 'The date in ISO format like 2024-02-20 00:00:00',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		required: true,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['list_active_users'],
			},
		},
		default: 0,
		description: 'The page number you want to start showing the entries',
	},
	{
		displayName: 'Per Page',
		name: 'per_page',
		type: 'number',
		required: true,
		placeholder: '25',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['list_active_users'],
			},
		},
		default: 0,
		description: 'The number of results that should be returned',
	},
];
