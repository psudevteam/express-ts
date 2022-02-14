import express from "express";
import config from "config";
import connect from "./utils/database.util";
import routes from "./router/index";

const port = config.get<number>("port");
const app = express();

routes(app);

app.listen(port, async () => {
  console.log(`Server berjalan`);
  await connect();
});
