export const handle = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "it's alive",
    }),
    headers: {
      "content-type": "application/json",
    },
  };
};
