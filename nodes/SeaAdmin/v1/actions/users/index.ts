import type { INodeProperties } from 'n8n-workflow';
import * as list_users from './list_users';
import * as add_new_user from './add_new_user';
import * as delete_user from './delete_user';
import * as get_user from './get_user';
import * as list_admin_users from './list_admin_users';
import * as update_user from './update_user';
import * as search_user from './search_user';
import * as search_user_org_id from './search_user_org_id';
import * as reset_user_password from './reset_user_password';
export {
	update_user,
	list_users,
	add_new_user,
	delete_user,
	get_user,
	list_admin_users,
	search_user,
	search_user_org_id,
	reset_user_password,
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
				name: 'Add User',
				value: 'add_new_user',
				description: 'Adds a new user to the system',
				action: 'Add new user',
			},
			{
				name: 'Delete User',
				value: 'delete_user',
				description: 'Deletes one user from the system',
				action: 'Delete user',
			},
			{
				name: 'Get User',
				value: 'get_user',
				description: 'Gets all information about a specific user',
				action: 'Get user',
			},
			{
				name: 'List Admin Users',
				value: 'list_admin_users',
				description: 'Gets a list of all user with sys-admin permissions',
				action: 'List admin users',
			},
			{
				name: 'List Users',
				value: 'list_users',
				description: 'Lists all users of the system',
				action: 'List users',
			},
			{
				name: 'Reset User Password',
				value: 'reset_user_password',
				description:
					'Reset the password of a user and send an email with a new password (if configured)',
				action: 'Reset user password',
			},
			{
				name: 'Search Team Users',
				value: 'search_user_org_id',
				description: 'Searches for one or multiple users of a specific team',
				action: 'Search team users',
			},
			{
				name: 'Search User(s)',
				value: 'search_user',
				description: 'Searches for one or multiple users via query',
				action: 'Search users',
			},
			{
				name: 'Update User',
				value: 'update_user',
				description: 'Updates a user account',
				action: 'Update user',
			},
		],
		default: 'add_new_user',
	},
	...list_users.description,
	...add_new_user.description,
	...delete_user.description,
	...get_user.description,
	...list_admin_users.description,
	...update_user.description,
	...search_user.description,
	...search_user_org_id.description,
	...reset_user_password.description,
];
