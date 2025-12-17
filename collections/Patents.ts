import { CollectionConfig } from "payload";

export const Patents: CollectionConfig = {
  slug: "patents",
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
      name: "code",
      type: "text",
      required: true,
    },
    {
      name: "status",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        description: "Publication year",
      },
    },
  ],
};
