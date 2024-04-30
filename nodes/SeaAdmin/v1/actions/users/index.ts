


import type { INodeProperties } from 'n8n-workflow';
import * as list_users from './list_users'; 
import * as add_new_user from './add_new_user'
export { list_users,add_new_user };

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
			{
				name: 'Add New User',
				value: 'add_new_user',
				description: 'adds new User',
				action: 'add new User',
			},
		],
		default: '',
	},
	...list_users.description,
	...add_new_user.description,

];
