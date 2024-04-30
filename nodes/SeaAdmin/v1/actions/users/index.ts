


import type { INodeProperties } from 'n8n-workflow';
import * as list_users from './list_users'; 

export { list_users };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['users'],
			},
		},
		options: [
			{
				name: 'List Users',
				value: 'list_users',
				description: 'lists User',
				action: 'List Users',
			},
		],
		default: '',
	},
	...list_users.description,

];
