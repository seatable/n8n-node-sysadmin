import type { INodeTypeDescription } from 'n8n-workflow';

import * as team from './team';
import * as statistics from './statistics';
import * as users from './users';
import * as system_info from './system_info'
import * as bases from './bases';

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
				{
					name:  "System Info",
					value: "system_info"
				},
				{
					name:'Bases',
					value:"bases"
				}
			],
			default: 'team',
		},
		...team.descriptions,
		...statistics.descriptions,
		...users.descriptions,
		...system_info.descriptions,
		...bases.descriptions
	],
};
