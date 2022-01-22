// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const STATUS_CODE_OK = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(STATUS_CODE_OK).json({ name: "John Doe" });
}
