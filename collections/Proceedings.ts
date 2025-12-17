import { CollectionConfig } from "payload";

export const Proceedings: CollectionConfig = {
  slug: "proceedings",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publication", "year", "createdAt"],
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
      name: "publication",
      type: "text",
      required: true,
    },
    {
      name: "year",
      type: "number",
      required: true,
      min: 1900,
      max: new Date().getFullYear() + 1,
      admin: {
        description: "Publication year",
      },
    },
  ],
};
