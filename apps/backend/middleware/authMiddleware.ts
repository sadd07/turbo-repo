import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
  headers: {
    authorization?: string;
  };
}

const auth = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    if (token === "8mtoYtmP7SrbZdxTOcPVDicepXLjoz1ZuHRp04VI0IG1RUUEJERF7euiS5fd2kkM") {
      next();
    } else {
      res.status(403).send({ message: "Invalid Token" });
    }
  } else {
    res.status(401).send({ message: "Authorization header missing" });
  }
};

export default auth;
