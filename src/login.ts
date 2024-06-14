import { importSDKData } from "./importSdkData";
import { SdkData } from "./models";
import { request } from "./request";
import { parseJwt } from "./utils";

export async function login(email: string, password: string): Promise<SdkData> {
  const data = await request<
    { _username: string; _password: string },
    {
      token: string;
      refresh_token: string;
    }
  >({}, "POST", "login", {
    _username: email,
    _password: password,
  });
  const result: SdkData = importSDKData({
    token: data.token,
    userData: parseJwt(data.token!),
    refreshToken: data.refresh_token,
  });
  return result;
}
