# Fitatu SDK

Fitatu SDK is a library that allows you to integrate Fitatu services with your application. It provides a set of tools that allow you to easily authenticate users, fetch their data and perform various operations on their behalf.

### Installation

```bash
yarn add fitatu-sdk
```

### Usage

```typescript
import {
  login,
  importSDKData,
  exportSDKData,
  getDietAndActivityPlan,
} from "fitatu-sdk";

const main = async () => {
  // Authenticate user
  const sdkData = await login("{email}", "{password}");
  // Access Fitatu data
  const dietPlan = await getDietAndActivityPlan(sdkData);
};
main();
```

You can also export the SDK data to use it in the future:

```typescript
import { exportSDKData, importSDKData, login } from "fitatu-sdk";

const main = async () => {
  // Authenticate user
  const sdkData = await login("{email}", "{password}");
  // Export SDK data
  const exportedData = exportSDKData(sdkData);
  // Now you can serialize the data and store it for future use
  const serializedData = JSON.stringify(exportedData);
  // You could store the serialized data in a file or a database
  // Later you can import the data
  const importedData = JSON.parse(serializedData);
  const importedSDKData = importSDKData(importedData);
  // Access Fitatu data
  const dietPlan = await getDietAndActivityPlan(importedSDKData);
};
main();
```

### API

#### `login(email: string, password: string): Promise<SdkData>`

Authenticates the user and returns the SDK data.

#### `importSDKData(data: SdkData): SdkData`

Imports the SDK data.

#### `exportSDKData(data: SdkData): SdkData`

Exports the SDK data.

#### `getDietAndActivityPlan(sdkData: SdkData): Promise<DietAndActivityPlan>`

Fetches the diet and activity plan for the authenticated user.

### License

MIT
