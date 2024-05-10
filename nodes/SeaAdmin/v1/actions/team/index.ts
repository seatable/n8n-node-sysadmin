import * as list_teams from './list_teams';
import * as delete_team from './delete_team';
import * as list_team_users from './list_team_users';
import * as delete_team_user from './delete_team_user';
import * as add_team from './add_team';

import * as add_team_user from './add_team_user';

import type { INodeProperties } from 'n8n-workflow';

export { add_team_user, add_team, list_teams, delete_team, list_team_users, delete_team_user };

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
				name: 'List teams',
				value: 'list_teams',
				description: 'Return all teams of the SeaTable server.',
			},
			{
				name: 'Delete a team',
				value: 'delete_team',
				description: "Delete a team and all it's users.",
			},
			{
				name: 'List teams users',
				value: 'list_team_users',
				description: 'Return all users of a team.',
			},
			{
				name: 'Delete a team user',
				value: 'delete_team_user',
				description: 'Delete a team user.',
			},
			{
				name: 'Add a team',
				value: 'add_team',
				description: 'Add a new Team.',
			},
			{
				name: 'Add a team user',
				value: 'add_team_user',
				description: 'Add a new Team user.',
			},
		],
		default: 'list_teams',
	},
	...list_teams.description,
	...delete_team.description,
	...list_team_users.description,
	...delete_team_user.description,
	...add_team.description,
	...add_team_user.description,
];
