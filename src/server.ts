import configLogger from "@logger";
import http from "http";
import log from "loglevel";
import app from "./app";

configLogger();

const port = process.env.PORT ?? "4000";
app.set("port", port);

const server = http.createServer(app);
server.listen(port);

log.debug(
  "Running a GraphQL API server at:",
  `\t- http://localhost:${port}/playground`
);
