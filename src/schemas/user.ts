export const userSchema = {
  $id: "userSchema",
  type: "object",
  properties: {
    id: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" },
  },
  required: ["id", "firstName"],
} as const;
