import { CollectionConfig } from 'payload'

export const Datasets: CollectionConfig = {
  slug: 'datasets',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // public datasets
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value
            return data?.title
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)+/g, '')
          },
        ],
      },
    },

    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short marketing description shown in listings',
      },
    },

    // ✅ NEW METADATA FIELDS
    {
      name: 'type',
      type: 'text',
      admin: {
        description: 'Dataset type (e.g. image, tabular, time-series)',
      },
    },
    {
      name: 'origin',
      type: 'text',
      admin: {
        description: 'Source or origin of the dataset',
      },
    },
    {
      name: 'records',
      type: 'text',
      admin: {
        description: 'Number of records (e.g. 10,000 rows)',
      },
    },
    {
      name: 'license',
      type: 'text',
      admin: {
        description: 'Dataset license (e.g. CC BY 4.0, MIT)',
      },
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        description: 'Dataset URL',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'dataset',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
