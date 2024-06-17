import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { SeaAdminV1 } from './v1/SeaAdminV1.node';

export class SeaAdmin extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'SeaTable Sys-Admin',
			name: 'seaadmin',
			icon: 'file:seaadmin.svg',
			group: ['output'],
			subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
			description: 'Execute SeaTable API calls as Sys-Admin.',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new SeaAdminV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
