import { RequestGenericInterface } from "fastify";
import { FromSchema } from "json-schema-to-ts";
import { userSchema } from "../schemas/user";

export type User = FromSchema<typeof userSchema>;

export interface AuthenticatedRequest extends RequestGenericInterface {
  Headers: {
    authorization: string;
  };
}
