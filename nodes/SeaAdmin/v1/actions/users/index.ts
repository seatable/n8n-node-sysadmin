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
				name: 'List users',
				value: 'list_users',
				description: 'List all users of the system.',
			},
			{
				name: 'Get user',
				value: 'get_user',
				description: 'Get all information about a specific user.',
			},
			{
				name: 'List admin users',
				value: 'list_admin_users',
				description: 'Get a list of all user with sys-admin permissions.',
			},
			{
				name: 'Add user',
				value: 'add_new_user',
				description: 'Add a new user to the system.',
			},
			{
				name: 'Update user',
				value: 'update_user',
				description: 'Update a user account.',
			},
			{
				name: 'Delete user',
				value: 'delete_user',
				description: 'Delete one user from the system.',
			},
			{
				name: 'Search users',
				value: 'search_user',
				description: 'Search for one or multiple users via query',
			},
			{
				name: 'Search team users',
				value: 'search_user_org_id',
				description: 'Search for one or multiple users of a specific team.',
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
