import { Express, Response, Request } from "express";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    return res.send("Euy");
  });
};

export default routes;
