import { SdkData } from "./models";
import { refreshTokenData } from "./refreshTokenData";

export function importSDKData(sdkData: Partial<SdkData>): SdkData {
  return {
    token: sdkData.token,
    userData: sdkData.userData,
    refreshToken: sdkData.refreshToken,
    forceRefresh: async function () {
      const nextData = await refreshTokenData(this);
      this.token = nextData.token;
      this.userData = nextData.userData;
      this.refreshToken = nextData.refreshToken;
    },
  };
}
