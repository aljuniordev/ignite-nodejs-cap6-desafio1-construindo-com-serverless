import { DynamoDB } from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: "localhost",
    endpoint: "http://localhost:8000",
  };
}

export const document = new DynamoDB.DocumentClient(options);
