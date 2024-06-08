import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function export_base(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	// get parameters
	const uuid = this.getNodeParameter('uuid', index) as string;
	const ignore_asset = this.getNodeParameter('ignore_asset', index) as boolean;
	const file_name = (this.getNodeParameter('file_name', index) as string) || 'export.dtable';

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			ignore_asset: ignore_asset,
		},
		body: {},
		uri: baseURL + '/api/v2.1/admin/dtables/' + uuid + '/synchronous-export/export-dtable/',
		json: false,
		encoding: null,
	};

	// returns the base as binary
	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	const newItem: INodeExecutionData = {
		json: {
			fileName: file_name,
			mimeType: 'application/zip',
			fileExtension: 'dtable',
		},
		binary: {},
	};

	// Prepare the binary data and add it to the newItem
	newItem.binary!['data'] = await this.helpers.prepareBinaryData(
		responseData as unknown as Buffer,
		file_name,
		'application/zip',
	);

	return [newItem];
}
