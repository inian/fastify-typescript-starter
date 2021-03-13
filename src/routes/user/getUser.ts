import { FastifyInstance } from "fastify";
import { AuthenticatedRequest, User } from "../../types/types";
import { FromSchema } from "json-schema-to-ts";
import { userSchema } from "../../schemas/user";
import { authSchema } from "../../schemas/auth";

const getUserParamsSchema = {
  type: "object",
  properties: {
    userId: { type: "string" },
  },
  required: ["userId"],
} as const;

interface getUserRequestInterface extends AuthenticatedRequest {
  Params: FromSchema<typeof getUserParamsSchema>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function routes(fastify: FastifyInstance) {
  const summary = "Get user details";
  fastify.get<getUserRequestInterface>(
    "/:userId",
    {
      schema: {
        params: getUserParamsSchema,
        headers: authSchema,
        summary,
        response: {
          200: userSchema,
          "4xx": { $ref: "errorSchema#" },
        },
      },
    },
    async (request, response) => {
      const { userId } = request.params;
      const userResponse: User = {
        id: userId,
        firstName: "John",
        lastName: "Doe",
      };

      response.status(200).send(userResponse);
    }
  );
}
