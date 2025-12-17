import { CollectionConfig } from "payload";
import { slugify } from "payload/shared";

export const Activities: CollectionConfig = {
  slug: "activities",
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
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value;

            return slugify(data?.title);
          },
        ],
      },
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
