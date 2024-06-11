import * as list_all_bases from './list_all_bases';
import * as list_users_bases from './list_users_bases';
import * as export_base from './export_base';

import type { INodeProperties } from 'n8n-workflow';

export { list_all_bases, list_users_bases, export_base };

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
				name: 'List all bases',
				value: 'list_all_bases',
				description: 'List all bases of the SeaTable server.',
				action: 'List all bases',
			},
			{
				name: 'List all bases from a user',
				value: 'list_users_bases',
				description: "Lists all the bases of a certain user by the user's ID.",
				action: 'List all bases from a user',
			},
			{
				name: 'Export base',
				value: 'export_base',
				description: 'Exports a base as dtable file.',
				action: 'Export base',
			},
		],
		default: 'list_all_bases',
	},
	...list_all_bases.description,
	...list_users_bases.description,
	...export_base.description,
];
