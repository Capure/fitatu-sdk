import { SdkData } from "./models";
import { request } from "./request";
import { parseJwt } from "./utils";

export async function refreshTokenData(sdkData: SdkData): Promise<SdkData> {
  if (!sdkData.refreshToken)
    throw new Error("REQUEST FAILED: The refresh token is missing!");
  const data = await request<
    { refresh_token: string },
    { token: string; refresh_token: string }
  >(sdkData, "POST", "token/refresh", {
    refresh_token: sdkData.refreshToken,
  });
  return {
    ...sdkData,
    token: data.token,
    userData: parseJwt(data.token),
    refreshToken: data.refresh_token,
  };
}
