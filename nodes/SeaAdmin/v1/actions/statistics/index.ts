import * as list_active_users from './list_active_users';
import * as get_active_users_per_day from './get_active_users_per_day';

import type { INodeProperties } from 'n8n-workflow';

export { get_active_users_per_day, list_active_users };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['statistics'],
			},
		},
		options: [
			{
				name: 'List active users of one day',
				value: 'list_active_users',
				description: 'Return all active users of one specific day.',
			},
			{
				name: 'Get active users per day',
				value: 'get_active_users_per_day',
				description: 'Return the number of active users in a period of time.',
			},
		],
		default: 'list_active_users',
	},
	...list_active_users.description,
	...get_active_users_per_day.description,
];
