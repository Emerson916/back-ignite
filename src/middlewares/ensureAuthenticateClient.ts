import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  req: Request,
  resp: Response,
  NextFunction: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return resp.status(401).json({
      message: "Not authenticated",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "b43fdd98b1fd705ae4c3a10cf25aad8a") as Ipayload;

    req.id_client = sub;

    return NextFunction();
  } catch (error) {
    return resp.status(401).json({
      message: "Invalid Token!",
    });
  }
}
