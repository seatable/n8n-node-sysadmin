import type { SeaAdminStatisticsProperties } from '../../Interfaces';

export const description: SeaAdminStatisticsProperties = [
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		required: true,
		placeholder: '2023-06-19 00:00:00',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['list_active_users'],
			},
		},
		default: '2020-06-19 00:00:00',
		description: 'The date in ISO format.',
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
		default: '1',
		description: '',
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
		default: '25',
		description: 'Number of entries to be shown.',
	},
];
