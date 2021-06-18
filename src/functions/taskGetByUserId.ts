import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { id: user_id } = event.pathParameters;

  const tasks = await document
    .query({
      TableName: "tasks",
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": user_id,
      },
    })
    .promise();

  if (!tasks) {
    return {
      statusCode: 201,
      body: "nenhuma task encontrada",
      headers: {
        contentType: "application/json",
      },
    };
  } else {
    return {
      statusCode: 201,
      body: JSON.stringify(tasks),
      headers: {
        contentType: "application/json",
      },
    };
  }
};
