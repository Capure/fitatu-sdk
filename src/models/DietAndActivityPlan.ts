import { ActivityPlan } from "./ActivityPlan";
import { DietPlan } from "./DietPlan";

export interface DietAndActivityPlan {
  planDayRevisions: Array<string>;
  activityPlan: Array<ActivityPlan>;
  dietPlan: DietPlan;
}
