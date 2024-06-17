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
				name: 'List Active Users of One Day',
				value: 'list_active_users',
				description: 'Return all active users of one specific day',
				action: 'List active users of one day',
			},
			{
				name: 'Get Active Users per Day',
				value: 'get_active_users_per_day',
				description: 'Return the number of active users in a period of time',
				action: 'Get active users per day',
			},
		],
		default: 'list_active_users',
	},
	...list_active_users.description,
	...get_active_users_per_day.description,
];
