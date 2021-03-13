import fastify, { FastifyInstance, FastifyServerOptions } from "fastify";
import autoload from "fastify-autoload";
import path from "path";
import fastifySwagger from "fastify-swagger";
import { userSchema } from "./schemas/user";
import { errorSchema } from "./schemas/error";

interface buildOpts extends FastifyServerOptions {
  exposeDocs?: boolean;
}

const build = (opts: buildOpts = {}): FastifyInstance => {
  const app = fastify(opts);

  if (opts.exposeDocs) {
    app.register(fastifySwagger, {
      exposeRoute: true,
      swagger: {
        info: {
          title: "Fastify Typescript Starter API",
          version: "0.0.1",
        },
      },
    });
  }

  // add in common schemas
  app.addSchema(userSchema);
  app.addSchema(errorSchema);

  app.register(autoload, {
    dir: path.join(__dirname, "routes"),
  });
  return app;
};

export default build;
