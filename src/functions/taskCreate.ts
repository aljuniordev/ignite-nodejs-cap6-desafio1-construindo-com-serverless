import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";
import { v4 as uuidv4 } from "uuid";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { id: user_id } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body);

  const id = uuidv4();

  const taskCreated = await document
    .put({
      TableName: "tasks",
      Item: {
        id,
        user_id,
        title,
        done: false,
        deadline,
      },
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify(taskCreated),
    headers: {
      contentType: "application/json",
    },
  };
};
