import * as list_all_bases from './list_all_bases';
import * as list_users_bases from './list_users_bases';

import type { INodeProperties } from 'n8n-workflow';

export {list_all_bases,list_users_bases };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bases'],
			},
		},
		options: [
			{
				name: 'List All Bases',
				value: 'list_all_bases',
				description: 'Lists all Bases',
				action: 'List all Bases',
			},
			{
				name: 'List All Users Bases',
				value: 'list_users_bases',
				description: 'Lists all Bases by User',
				action: 'Lists all Bases by User',
			},
		],
		default: 'list_active_users',
	},
	...list_all_bases.description,
	...list_users_bases.description,
];
