import { CollectionConfig } from "payload";

export const ResearchTeam: CollectionConfig = {
  slug: "research-team",
  admin: {
    useAsTitle: "name",
    group: "About Us",
  },
  access: {
    read: () => true, // public read
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "title",
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
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Head", value: "head" },
        { label: "Secretary", value: "secretary" },
        { label: "Members", value: "members" },
        { label: "External Collaborators", value: "external" },
        { label: "Research Assistants", value: "assistant" },
        { label: "Undergraduate Students", value: "undergraduate" },
        { label: "Graduate Students", value: "graduate" },
        { label: "Postgraduate Students", value: "postgraduate" },
      ],
    },

    {
      name: "batch",
      type: "text",
    },
    {
      name: "desc",
      type: "text",
    },
  ],
};
