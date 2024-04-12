import * as list_active_users from './list_active_users';

import type { INodeProperties } from 'n8n-workflow';

export { list_active_users };

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
				name: 'List Active Users (one day)',
				value: 'list_active_users',
				description: 'Returns all active users of one specific day.',
				action: 'List Active Users (one day)',
			},
		],
		default: 'list_active_users',
	},
	...list_active_users.description,
];
