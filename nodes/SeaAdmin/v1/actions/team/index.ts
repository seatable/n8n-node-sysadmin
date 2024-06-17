import * as list_teams from './list_teams';
import * as delete_team from './delete_team';
import * as list_team_users from './list_team_users';
import * as delete_team_user from './delete_team_user';
import * as add_team from './add_team';
import * as update_team from './update_team';
import * as add_team_user from './add_team_user';
import * as update_team_user from './update_team_user';

import type { INodeProperties } from 'n8n-workflow';

export {
	add_team_user,
	add_team,
	list_teams,
	delete_team,
	list_team_users,
	delete_team_user,
	update_team,
	update_team_user,
};

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['team'],
			},
		},
		options: [
			{
				name: 'Add Team',
				value: 'add_team',
				description: 'Add a new team',
				action: 'Add a team',
			},
			{
				name: 'Add Team User',
				value: 'add_team_user',
				description: 'Adds a new team user',
				action: 'Add a new team user',
			},
			{
				name: 'Delete Team',
				value: 'delete_team',
				description: "Delete a team and all it's users",
				action: 'Delete team',
			},
			{
				name: 'Delete Team User',
				value: 'delete_team_user',
				description: 'Deletes a team user',
				action: 'Delete a team user',
			},
			{
				name: 'List Teams',
				value: 'list_teams',
				description: 'Returns all teams of the SeaTable server',
				action: 'List teams',
			},
			{
				name: 'List Teams Users',
				value: 'list_team_users',
				description: 'Returns all users of a team',
				action: 'List teams users',
			},
			{
				name: 'Update Team',
				value: 'update_team',
				description: 'Update an existing team',
				action: 'Update a team',
			},
			{
				name: 'Update Team User',
				value: 'update_team_user',
				description: 'Updates an existing team user',
				action: 'Update team user',
			},
		],
		default: 'add_team',
	},
	...list_teams.description,
	...add_team.description,
	...update_team.description,
	...delete_team.description,
	...list_team_users.description,
	...add_team_user.description,
	...update_team_user.description,
	...delete_team_user.description,
];
