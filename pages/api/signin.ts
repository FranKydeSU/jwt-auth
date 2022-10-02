import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const token = sign(
      {
        username,
        password,
      },
      "helloifranky",
      {
        expiresIn: "60m",
      }
    );
    return res.status(200).send({
      access_token: token,
    });
  }
};

export default handler;
