import { CollectionConfig } from "payload";

export const MassMedias: CollectionConfig = {
  slug: "mass-medias",
  admin: {
    useAsTitle: "title",
    group: "Communication",
  },
  access: {
    read: () => true,
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
      name: "date",
      type: "date",
      required: true,
    },
  ],
};
