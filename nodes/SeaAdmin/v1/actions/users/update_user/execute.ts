import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function update_user(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	// get URL
	const credentials = await this.getCredentials('seaadminApi');
	const baseURL = credentials?.domain || 'https://cloud.seatable.io';

	const user_id = this.getNodeParameter('user_id', index) as string;
	const is_staff = this.getNodeParameter('is_staff', index) as boolean;
	const is_active = this.getNodeParameter('is_active', index) as boolean;
	const role = this.getNodeParameter('role', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const login_id = this.getNodeParameter('login_id', index) as string;
	const contact_email = this.getNodeParameter('contact_email', index) as string;
	const id_in_org = this.getNodeParameter('id_in_org', index) as string;
	const password = this.getNodeParameter('password', index) as string;
	const row_limit = this.getNodeParameter('row_limit', index) as string;
	const quota_total = this.getNodeParameter('quota_total', index) as string;
	const asset_quota_mb = this.getNodeParameter('asset_quota_mb', index) as string;

	let body: FormData = new FormData();
	let options: OptionsWithUri = {
		method: 'PUT',
		qs: {},
		body,
		uri: baseURL + '/api/v2.1/admin/users/' + user_id + '/',
		json: true,
	};

	function checkAndSet(options: OptionsWithUri, body_variable: string, key: string) {
		if (body_variable !== '') {
			body.append(key, body_variable);
		}
	}

	checkAndSet(options, role, 'role');
	checkAndSet(options, name, 'name');
	checkAndSet(options, login_id, 'login_id');
	checkAndSet(options, contact_email, 'contact_email');
	checkAndSet(options, id_in_org, 'id_in_org');
	checkAndSet(options, password, 'password');
	checkAndSet(options, quota_total, 'quota_total');
	checkAndSet(options, asset_quota_mb, 'asset_quota_mb');
	checkAndSet(options, row_limit, 'row_limit');
	body.append('is_staff', is_staff);
	body.append('is_active', is_active);

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'seaadminApi',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
