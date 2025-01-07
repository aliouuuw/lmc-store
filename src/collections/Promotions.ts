import type { CollectionConfig } from 'payload'

export const Promotions: CollectionConfig = {
  slug: 'promotions',
  labels: {
    singular: {
      en: 'Promotion',
      fr: 'Promotion',
    },
    plural: {
      en: 'Promotions',
      fr: 'Promotions',
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
      label: {
        en: 'Name',
        fr: 'Nom',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: {
        en: 'Description',
        fr: 'Description',
      },
      required: true,
    },
    {
      name: 'discountPercentage',
      type: 'number',
      min: 0,
      max: 100,
      label: {
        en: 'Discount Percentage',
        fr: 'Pourcentage de réduction',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: {
        en: 'Active',
        fr: 'Active',
      },
    },
    {
      name: 'validFrom',
      type: 'date',
      required: true,
      label: {
        en: 'Valid From',
        fr: 'Valable à partir du',
      },
    },
    {
      name: 'validUntil',
      type: 'date',
      required: true,
      label: {
        en: 'Valid Until',
        fr: 'Valable jusqu\'au',
      },
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Product Discount',
          value: 'product',
        },
        {
          label: 'Service Discount',
          value: 'service',
        },
        {
          label: 'Free Delivery',
          value: 'delivery',
        },
      ],
      required: true,
      label: {
        en: 'Type',
        fr: 'Type',
      },
    },
  ],
} 