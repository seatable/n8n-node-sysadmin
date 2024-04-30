


import type { INodeProperties } from 'n8n-workflow';
import * as list_users from './list_users'; 
import * as add_new_user from './add_new_user'
import * as  delete_user from './delete_user';
export { list_users,add_new_user,delete_user };

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
			{
				name: 'Delete User',
				value: 'delete_user',
				description: 'deletes User with specified user_id',
				action: 'delete User',
			},
		],
		default: '',
	},
	...list_users.description,
	...add_new_user.description,
	...delete_user.description
];
