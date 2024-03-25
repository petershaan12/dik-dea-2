export default {
  name: "questions",
  title: "Questions",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answers",
      title: "Answers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "option", title: "Option", type: "string" },
            { name: "value", title: "Value", type: "number" },
          ],
        },
      ],
    },
  ],
};
