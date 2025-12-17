import { CollectionConfig } from "payload";

export const Infrastructures: CollectionConfig = {
  slug: "infrastructures",
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
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
