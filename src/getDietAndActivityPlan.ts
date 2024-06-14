import { DietAndActivityPlan, SdkData } from "./models";
import { request } from "./request";

export async function getDietAndActivityPlan(
  sdkData: SdkData,
  date: Date = new Date()
): Promise<DietAndActivityPlan> {
  if (!sdkData.token || !sdkData.userData)
    throw new Error("REQUEST FAILED: The SDK is not logged in!");
  const data = await request<undefined, DietAndActivityPlan>(
    sdkData,
    "GET",
    `diet-and-activity-plan/${sdkData.userData.id}/day/${
      date.toISOString().split("T")[0]
    }`
  );
  return data;
}
