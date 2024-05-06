export default {
  name: "questions2",
  title: "Questions2",
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
    {
      name: "image",
      title: "Image",
      type: "image", // Menambahkan field gambar
    },
    {
      name: "order",
      title: "Order",
      type: "number", // Menambahkan field gambar
    },
  ],
};
