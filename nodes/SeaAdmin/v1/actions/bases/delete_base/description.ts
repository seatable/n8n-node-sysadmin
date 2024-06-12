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
				operation: ['delete_base'],
			},
		},
		default: '',
		description: 'The unique identifier of a base. Sometimes also called dtable_uuid.',
	},
];
