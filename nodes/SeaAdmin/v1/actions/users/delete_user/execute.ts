import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function delete_user(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadminApi');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const user_id = this.getNodeParameter('user_id', index) as string;

	const options: OptionsWithUri = {
		method: 'DELETE',
		qs: {},
		body: {},
		uri: baseURL + '/api/v2.1/admin/users/' + user_id + '/',
		json: true,
	};
	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'seaadminApi',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
