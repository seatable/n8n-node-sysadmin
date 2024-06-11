import type { SeaAdminLogsProperties } from '../../Interfaces';

export const description: SeaAdminLogsProperties = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		required: false,
		placeholder: '1',
		displayOptions: {
			show: {
				resource: ['logs'],
				operation: ['list_login_logs'],
			},
		},
		default: 1,
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
				resource: ['logs'],
				operation: ['list_login_logs'],
			},
		},
		default: 25,
		description: 'The number of results that should be returned.',
	},
];
