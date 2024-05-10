import type { SeaAdminStatisticsProperties } from '../../Interfaces';

export const description: SeaAdminStatisticsProperties = [
	{
		displayName: 'Start Date',
		name: 'start',
		type: 'dateTime',
		required: true,
		placeholder: '2024-05-19 00:00:00',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['get_active_users_per_day'],
			},
		},
		default: '',
		description: 'The Start date in ISO format like 2024-02-20 00:00:00.',
	},
	{
		displayName: 'End Date',
		name: 'end',
		type: 'dateTime',
		required: true,
		placeholder: '2024-05-20 00:00:00',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['get_active_users_per_day'],
			},
		},
		default: '',
		description: 'The End date in ISO format like 2024-02-20 00:00:00.',
	},
];
