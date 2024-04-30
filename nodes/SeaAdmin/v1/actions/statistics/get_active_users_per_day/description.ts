import type { SeaAdminStatisticsProperties } from '../../Interfaces';

export const description: SeaAdminStatisticsProperties = [
	{
		displayName: 'Start Date',
		name: 'start',
		type: 'string',
		required: true,
		placeholder: '2023-06-19 00:00:00',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['get_active_users_per_day'],
			},
		},
		default: '2023-06-19 00:00:00',
		description: 'The Start date in ISO format.',
	},
	{
		displayName: 'End Date',
		name: 'end',
		type: 'string',
		required: true,
		placeholder: '2023-06-20 00:00:00',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['get_active_users_per_day'],
			},
		},
		default: '2023-06-20 00:00:00',
		description: 'The End date in ISO format.',
	},

];
