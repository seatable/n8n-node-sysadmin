import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function update_team_user(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadmin');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	// get parameters
	const org_id = this.getNodeParameter('org_id', index) as string;
	const user_id = this.getNodeParameter('user_id', index) as string;
	const is_admin = this.getNodeParameter('is_admin', index) as boolean;
	const is_active = this.getNodeParameter('is_active', index) as boolean;
	const role = this.getNodeParameter('role', index) as boolean;
	const name = this.getNodeParameter('name', index) as boolean;
	const contact_email = this.getNodeParameter('contact_email', index) as boolean;

	const options: OptionsWithUri = {
		method: 'PUT',
		qs: {
			is_admin: is_admin,
			is_active: is_active,
			role: role,
			name: name,
			contact_email: contact_email,
		},
		body: {},
		uri: baseURL + '/api/v2.1/admin/organizations/' + org_id + '/users/' + user_id + '/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'seaadmin', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
