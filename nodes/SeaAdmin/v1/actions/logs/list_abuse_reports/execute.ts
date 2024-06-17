import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function list_abuse_reports(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadminApi');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';
	const options: OptionsWithUri = {
		method: 'GET',
		qs: {},
		body: {},
		uri: baseURL + '/api/v2.1/admin/abuse-reports/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'seaadminApi',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
