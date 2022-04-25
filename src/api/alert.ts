import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (request: VercelRequest, response: VercelResponse) => {
  const random = Math.random();
  console.log({ random });
  if (random > 0.5) {
    response.status(200).send({ data: "some data" });
    return;
  }
  response.status(400);
  return;
};
