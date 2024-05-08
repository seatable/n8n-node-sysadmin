import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function get_system_info(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {},
		body: {},
		uri: baseURL + '/api/v2.1/admin/sysinfo/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
