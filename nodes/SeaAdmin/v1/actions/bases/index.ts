import * as list_all_bases from './list_all_bases';
import * as list_users_bases from './list_users_bases';

import type { INodeProperties } from 'n8n-workflow';

export { list_all_bases, list_users_bases };

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
				name: 'List all bases',
				value: 'list_all_bases',
				description: 'List all bases of the SeaTable server.',
			},
			{
				name: 'List all bases from a user',
				value: 'list_users_bases',
				description: "List all the bases of a certain user by the user's ID.",
			},
		],
		default: 'list_all_bases',
	},
	...list_all_bases.description,
	...list_users_bases.description,
];
