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
				name: 'List users',
				value: 'list_users',
				description: 'Lists all users of the system.',
				action: 'List users',
			},
			{
				name: 'List admin users',
				value: 'list_admin_users',
				description: 'Gets a list of all user with sys-admin permissions.',
				action: 'List admin users',
			},
			{
				name: 'Get user',
				value: 'get_user',
				description: 'Gets all information about a specific user.',
				action: 'Get user',
			},
			{
				name: 'Add user',
				value: 'add_new_user',
				description: 'Adds a new user to the system.',
				action: 'Add new user',
			},
			{
				name: 'Update user',
				value: 'update_user',
				description: 'Updates a user account.',
				action: 'Update user',
			},
			{
				name: 'Delete user',
				value: 'delete_user',
				description: 'Deletes one user from the system.',
				action: 'Delete user',
			},
			{
				name: 'Search user(s)',
				value: 'search_user',
				description: 'Searches for one or multiple users via query',
				action: 'Search users',
			},
			{
				name: 'Search team users',
				value: 'search_user_org_id',
				description: 'Searches for one or multiple users of a specific team.',
				action: 'Search team users',
			},
			{
				name: 'Reset user password',
				value: 'reset_user_password',
				description:
					'Reset the password of a user and send an email with a new password (if configured)',
				action: 'Reset user password',
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
	...reset_user_password.description,
];
