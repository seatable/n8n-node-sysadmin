import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function add_new_user(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const email = this.getNodeParameter('email', index) as string;;
	const password = this.getNodeParameter('password', index) as string;;
	const name = this.getNodeParameter('name', index) as string;;
	const is_staff = this.getNodeParameter('is_staff', index) as boolean;;
	const is_active = this.getNodeParameter('is_active', index) as boolean;;

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body: {
			email:email,
			password:password,
			name:name,
			is_staff:is_staff,
			is_active:is_active
		},
		uri: baseURL + '/api/v2.1/admin/users/',
		json: true,
	};
	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
