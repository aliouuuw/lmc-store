import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: {
      en: 'Category',
      fr: 'Catégorie',
    },
    plural: {
      en: 'Categories',
      fr: 'Catégories',
    },
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'Name',
        fr: 'Nom',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Description',
        fr: 'Description',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

