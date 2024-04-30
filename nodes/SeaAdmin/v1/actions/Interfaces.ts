import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type SeaAdminMap = {
	team: 'list_teams' | 'delete_team' | 'list_team_users' | 'update_team_user' | 'delete_team_user' | 'add_team'| 'add_team_user';
	statistics: 'list_active_users' | 'get_active_users_per_day';
	users: 'list_users' | 'add_new_user' | 'delete_user' | 'get_user' | 'list_admin_users' | 'update_user';
};

export type SeaAdmin = AllEntities<SeaAdminMap>;

export type SeaAdminTeam = Entity<SeaAdminMap, 'team'>;
export type SeaAdminStatistics = Entity<SeaAdminMap, 'statistics'>;
export type SeaAdminUsers = Entity<SeaAdminMap, 'users'>;

export type SeaAdminTeamProperties = PropertiesOf<SeaAdminTeam>;
export type SeaAdminStatisticsProperties = PropertiesOf<SeaAdminStatistics>;
export type SeaAdminUsersProperties = PropertiesOf<SeaAdminUsers>;
