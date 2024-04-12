import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type SeaAdminMap = {
	team: 'list_teams' | 'delete_team' | 'list_team_users' | 'update_team_user' | 'delete_team_user';
	statistics: 'list_active_users';
};

export type SeaAdmin = AllEntities<SeaAdminMap>;

export type SeaAdminTeam = Entity<SeaAdminMap, 'team'>;
export type SeaAdminStatistics = Entity<SeaAdminMap, 'statistics'>;

export type SeaAdminTeamProperties = PropertiesOf<SeaAdminTeam>;
export type SeaAdminStatisticsProperties = PropertiesOf<SeaAdminStatistics>;
