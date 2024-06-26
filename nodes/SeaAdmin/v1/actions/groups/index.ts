import * as list_groups from './list_groups';

import type { INodeProperties } from 'n8n-workflow';

export { list_groups };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['groups'],
			},
		},
		options: [
			{
				name: 'List Groups',
				value: 'list_groups',
				description: 'Shows a list of all groups of the system or search for a specific group by name',
				action: 'List groups',
			},
		],
		default: 'list_groups',
	},
	...list_groups.description,
];
