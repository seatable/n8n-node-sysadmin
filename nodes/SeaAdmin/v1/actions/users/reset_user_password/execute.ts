import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function reset_user_password(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const user_id = this.getNodeParameter('user_id', index) as string;

	const options: OptionsWithUri = {
		method: 'PUT',
		qs: {},
		body: {},
		uri: baseURL + '/api/v2.1/admin/users/' + user_id + '/reset-password/',
		json: true,
	};
	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
