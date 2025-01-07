import type { CollectionConfig } from 'payload'

export const Offers: CollectionConfig = {
  slug: 'offers',
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
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'discountPercentage',
      type: 'number',
      min: 0,
      max: 100,
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'validFrom',
      type: 'date',
      required: true,
    },
    {
      name: 'validUntil',
      type: 'date',
      required: true,
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
    },
  ],
} 