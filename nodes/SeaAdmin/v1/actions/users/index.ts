


import type { INodeProperties } from 'n8n-workflow';
import * as list_users from './list_users'; 
import * as add_new_user from './add_new_user'
import * as  delete_user from './delete_user';
import * as  get_user from './get_user';
import * as list_admin_users from './list_admin_users';
import * as update_user from './update_user'

export { update_user,list_users,add_new_user,delete_user,get_user,list_admin_users};

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
			{
				name: 'Get User',
				value: 'get_user',
				description: 'get User Info with specified user_id',
				action: 'gets User Info',
			},
			{
				name: 'List Admin Users',
				value: 'list_admin_users',
				description: 'gets a List of all Admin Users',
				action: 'gets a List of all Admin Users',
			},
			{
				name: 'Update User',
				value: 'update_user',
				description: 'updates User info',
				action: 'update User info',
			},
		],
		default: '',
	},
	...list_users.description,
	...add_new_user.description,
	...delete_user.description,
	...get_user.description,
	...list_admin_users.description,
	...update_user.description
];
