import { CollectionConfig } from "payload";

export const SocialMedias: CollectionConfig = {
  slug: "social-medias",
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
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
  ],
};
