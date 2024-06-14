export const BASE_URL = " https://pl-pl.fitatu.com/api";
export const API_KEY = "FITATU-MOBILE-APP";
export const API_SECRET = "PYRXtfs88UDJMuCCrNpLV";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseJwt = (token: string): any => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
