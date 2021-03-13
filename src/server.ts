import { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import build from "./app";

const loggerConfig = {
  prettyPrint: true,
};
let exposeDocs = true;
if (process.env.NODE_ENV === "production") {
  loggerConfig.prettyPrint = false;
  exposeDocs = true;
}
const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = build({
  logger: loggerConfig,
  exposeDocs,
});

app.listen(8080, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
