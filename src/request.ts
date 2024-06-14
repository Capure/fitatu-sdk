import { SdkData, ApiCreds } from "./models";
import { API_KEY, API_SECRET, BASE_URL } from "./utils";

export async function request<TReq, TRes>(
  sdkData: SdkData,
  method: "GET" | "POST",
  endpoint: string,
  body?: TReq
): Promise<TRes> {
  if (sdkData.userData && new Date().getTime() / 1000 > sdkData.userData.exp) {
    sdkData.forceRefresh();
    //   this.userData = undefined;
    //   await this.refreshTokenData();
  }
  const apiCreds: ApiCreds = {
    "api-key": API_KEY,
    "api-secret": API_SECRET,
  };
  if (method === "GET" && !sdkData.token)
    throw new Error("REQUEST FAILED: The auth token is missing!");
  if (sdkData.token) {
    apiCreds.authorization = `Bearer ${sdkData.token}`;
  }
  let options: RequestInit = {
    method,
    headers: { ...apiCreds },
  };
  if (body) {
    options = {
      ...options,
      headers: { ...apiCreds, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
  }
  const rawReq = await fetch(`${BASE_URL}/${endpoint}`, options);
  try {
    return await rawReq.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(`REQUEST FAILED: ${e.message}`);
  }
}
