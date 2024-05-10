import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type SeaAdminMap = {
	team:
		| 'list_teams'
		| 'add_team'
		| 'update_team'
		| 'delete_team'
		| 'list_team_users'
		| 'add_team_user'
		| 'update_team_user'
		| 'delete_team_user';
	statistics: 'list_active_users' | 'get_active_users_per_day';
	users:
		| 'list_users'
		| 'add_new_user'
		| 'delete_user'
		| 'get_user'
		| 'list_admin_users'
		| 'update_user'
		| 'search_user'
		| 'search_user_org_id';
	system_info: 'get_system_info';
	bases: 'list_all_bases' | 'list_users_bases';
	groups: 'list_groups';
};

export type SeaAdmin = AllEntities<SeaAdminMap>;

export type SeaAdminTeam = Entity<SeaAdminMap, 'team'>;
export type SeaAdminStatistics = Entity<SeaAdminMap, 'statistics'>;
export type SeaAdminUsers = Entity<SeaAdminMap, 'users'>;
export type SeaAdminSystemInfo = Entity<SeaAdminMap, 'system_info'>;
export type SeaAdminBases = Entity<SeaAdminMap, 'bases'>;
export type SeaAdminGroups = Entity<SeaAdminMap, 'groups'>;

export type SeaAdminTeamProperties = PropertiesOf<SeaAdminTeam>;
export type SeaAdminStatisticsProperties = PropertiesOf<SeaAdminStatistics>;
export type SeaAdminUsersProperties = PropertiesOf<SeaAdminUsers>;
export type SeaAdminSystemInfoProperties = PropertiesOf<SeaAdminSystemInfo>;
export type SeaAdminBasesProperties = PropertiesOf<SeaAdminBases>;
export type SeaAdminGroupsProperties = PropertiesOf<SeaAdminGroups>;
