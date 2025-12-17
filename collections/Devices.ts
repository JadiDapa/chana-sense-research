import { CollectionConfig } from "payload";

export const Devices: CollectionConfig = {
  slug: "devices",
  access: { read: () => true },
  fields: [
    {
      name: "item",
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
      name: "specs",
      type: "array",
      label: "Specifications",
      fields: [
        {
          name: "key",
          type: "text",
          required: true,
          label: "Spec Name",
        },
        {
          name: "value",
          type: "text",
          required: true,
          label: "Spec Value",
        },
      ],
    },
  ],
};
