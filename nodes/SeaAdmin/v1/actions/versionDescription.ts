import type { INodeTypeDescription } from 'n8n-workflow';

import * as team from './team';
import * as statistics from './statistics';
import * as users from './users';

export const versionDescription: INodeTypeDescription = {
	displayName: 'SeaTable Sys-Admin',
	name: 'seaadmin',
	icon: 'file:seaadmin.svg',
	group: ['output'],
	version: 1,
	subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
	description: 'Execute SeaTable API calls as Sys-Admin.',
	defaults: {
		name: 'SeaTable Sys-Admin',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'seaadmin',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Team',
					value: 'team',
				},
				{
					name: 'Statistics',
					value: 'statistics',
				},
				{
					name: 'Users',
					value: 'users',
				},
			],
			default: 'team',
		},
		...team.descriptions,
		...statistics.descriptions,
		...users.descriptions
	],
};
