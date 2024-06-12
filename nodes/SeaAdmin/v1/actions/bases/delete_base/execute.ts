import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function delete_base(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	// get parameters
	const uuid = this.getNodeParameter('uuid', index) as string;

	const options: OptionsWithUri = {
		method: 'DELETE',
		qs: {},
		body: {},
		uri: baseURL + '/api/v2.1/admin/dtable/' + uuid + '/',
		json: false,
		encoding: null,
	};

	// returns the base as binary
	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
