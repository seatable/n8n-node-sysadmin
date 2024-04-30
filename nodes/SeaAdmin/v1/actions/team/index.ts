import * as list_teams from './list_teams';
import * as delete_team from './delete_team';
import * as list_team_users from './list_team_users';
import * as update_team_user from './update_team_user';
import * as delete_team_user from './delete_team_user';
import * as add_team from './add_team';

import * as add_team_user from './add_team_user';


import type { INodeProperties } from 'n8n-workflow';

export { add_team_user,add_team,list_teams, delete_team, list_team_users, update_team_user, delete_team_user };

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
				name: 'List Teams',
				value: 'list_teams',
				description: 'Returns all teams.',
				action: 'List Teams',
			},
			{
				name: 'Delete a team',
				value: 'delete_team',
				description: 'Deletes a team and all users.',
				action: 'Delete a Team',
			},
			{
				name: 'List teams users',
				value: 'list_team_users',
				description: 'Returns all users of a team.',
				action: 'List Teams Users',
			},
			{
				name: 'Update a team user',
				value: 'update_team_user',
				description: 'Updates a team user.',
				action: 'Update a Team User',
			},
			{
				name: 'Delete a team user',
				value: 'delete_team_user',
				description: 'Deletes a team user.',
				action: 'Delete a Team User',
			},
			{
				name: 'Add a team',
				value: 'add_team',
				description: 'Adds a new Team.',
				action: 'Add a new Team'
			},			
			{
				name: 'Add a team user',
				value: 'add_team_user',
				description: 'Adds a new Team user.',
				action: 'Add a new Team user'
			}
		],
		default: 'list_teams',
	},
	...list_teams.description,
	...delete_team.description,
	...list_team_users.description,
	...update_team_user.description,
	...delete_team_user.description,
	...add_team.description,
	...add_team_user.description,
	

];
