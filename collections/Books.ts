import { CollectionConfig } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "title",
    group: "Publications",
  },
  access: {
    read: () => true, // public read
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "url",
      type: "text",
      required: true,
    },
    {
      name: "publisher",
      type: "text",
      required: true,
    },
    {
      name: "ISBN",
      type: "text",
      required: true,
    },
    {
      name: "year",
      type: "text",
      required: true,
    },
  ],
};
