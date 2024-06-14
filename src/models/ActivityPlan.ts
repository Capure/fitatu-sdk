export interface ActivityPlan {
  id: string;
  planDayId: number;
  date: string;
  activityType: number;
  measureType: number;
  energy: number;
  activityTime: number;
  distance: number;
  daily: boolean;
  activityDescription: string;
  activityDescriptionEnergy: string;
  activitySource: {
    id: number;
    name: string;
  };
}
