import * as list_all_bases from './list_all_bases';
import * as list_users_bases from './list_users_bases';
import * as export_base from './export_base';
import * as delete_base from './delete_base';

import type { INodeProperties } from 'n8n-workflow';

export { list_all_bases, list_users_bases, export_base, delete_base };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bases'],
			},
		},
		options: [
			{
				name: 'List All Bases',
				value: 'list_all_bases',
				description: 'List all bases of the SeaTable server',
				action: 'List all bases',
			},
			{
				name: 'List All Bases From a User',
				value: 'list_users_bases',
				description: 'Lists all the bases of a certain user by the user\'s ID',
				action: 'List all bases from a user',
			},
			{
				name: 'Export Base',
				value: 'export_base',
				description: 'Exports a base as dtable file',
				action: 'Export base',
			},
			{
				name: 'Delete Base',
				value: 'delete_base',
				description: 'Delete a base and move it into the trash',
				action: 'Delete base',
			},
		],
		default: 'list_all_bases',
	},
	...list_all_bases.description,
	...list_users_bases.description,
	...export_base.description,
	...delete_base.description,
];
