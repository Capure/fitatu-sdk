import { SdkData } from "./models";

export function exportSDKData(sdkData: SdkData): Partial<SdkData> {
  return {
    token: sdkData.token,
    userData: sdkData.userData,
    refreshToken: sdkData.refreshToken,
  };
}
