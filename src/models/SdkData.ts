import { UserData } from "./UserData";

export type ForceRefresh = () => Promise<void>;

export type SdkData = {
  token?: string;
  refreshToken?: string;
} & (
  | { userData: UserData; forceRefresh: ForceRefresh }
  | { userData?: never; forceRefresh?: ForceRefresh }
);
