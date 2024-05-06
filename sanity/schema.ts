import { type SchemaTypeDefinition } from "sanity";
import questions from "./questions";
import questions2 from "./questions2";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [questions, questions2],
};
