import type { SeaAdminBasesProperties } from '../../Interfaces';

export const description: SeaAdminBasesProperties = [
	{
		displayName: 'Base UUID',
		name: 'uuid',
		type: 'string',
		required: true,
		placeholder: '5c264e76-0e5a-448a-9f34-580b551364ca',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['export_base'],
			},
		},
		default: '',
		description: 'The unique identifier of a base. Sometimes also called dtable_uuid.',
	},
	{
		displayName: 'Exported File Name',
		name: 'file_name',
		type: 'string',
		required: false,
		placeholder: 'export.dtable',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['export_base'],
			},
		},
		default: '',
		description:
			'Choose a name for the exported base. If none is selected, the exported file will be called export.dtable.',
	},
	{
		displayName: 'Ignore Assets',
		name: 'ignore_asset',
		type: 'boolean',
		required: false,
		placeholder: 'false',
		displayOptions: {
			show: {
				resource: ['bases'],
				operation: ['export_base'],
			},
		},
		default: false,
		description: 'Set this to true to export the base without assets. Default is false.',
	},
];
