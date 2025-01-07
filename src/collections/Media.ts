import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: {
      en: 'Media',
      fr: 'Média',
    },
    plural: {
      en: 'Media',
      fr: 'Médias',
    },
  },
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
