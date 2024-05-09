import type { INodeProperties } from 'n8n-workflow';
import * as list_users from './list_users';
import * as add_new_user from './add_new_user';
import * as delete_user from './delete_user';
import * as get_user from './get_user';
import * as list_admin_users from './list_admin_users';
import * as update_user from './update_user';
import * as search_user from './search_user';
import * as search_user_org_id from './search_user_org_id';
export {
	update_user,
	list_users,
	add_new_user,
	delete_user,
	get_user,
	list_admin_users,
	search_user,
	search_user_org_id,
};

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
				name: 'Add New User',
				value: 'add_new_user',
				description: 'adds new User',
				action: 'add new User',
			},
			{
				name: 'Update User',
				value: 'update_user',
				description: 'updates User info',
				action: 'update User info',
			},
			{
				name: 'Delete User',
				value: 'delete_user',
				description: 'deletes User with specified user_id',
				action: 'delete User',
			},
			{
				name: 'Search User/Users',
				value: 'search_user',
				description: 'searches User/Users',
				action: 'search User/Users',
			},
			{
				name: 'Search User/Users by org id',
				value: 'search_user_org_id',
				description: 'searches User/Users by org id',
				action: 'search User/Users by org id',
			},
		],
		default: '',
	},
	...list_users.description,
	...add_new_user.description,
	...delete_user.description,
	...get_user.description,
	...list_admin_users.description,
	...update_user.description,
	...search_user.description,
	...search_user_org_id.description,
];
