import type { CollectionConfig, CollectionSlug } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: {
      en: 'Product',
      fr: 'Produit',
    },
    plural: {
      en: 'Products',
      fr: 'Produits',
    },
  },  
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',  
      type: 'text',
      required: true,
      label: {
        en: 'Title',
        fr: 'Titre',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: {
        en: 'Description',
        fr: 'Description',
      },
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      label: {
        en: 'Price',
        fr: 'Prix',
      },
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      label: {
        en: 'Images',
        fr: 'Images',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: {
        en: 'Category',
        fr: 'Catégorie',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Available',
          value: 'available',
        },
        {
          label: 'Sold Out',
          value: 'sold-out',
        },
      ],
      defaultValue: 'draft',
      required: true,
      label: {
        en: 'Status',
        fr: 'Statut',
      },
    },
    {
      name: 'promotion',
      type: 'relationship',
      relationTo: 'promotions' as CollectionSlug,
      hasMany: false,
      admin: {
        condition: (data) => {
          return data?.status === 'available'
        },
      },
      label: {
        en: 'Promotions',
        fr: 'Promotions',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: {
        en: 'Featured',
        fr: 'En vedette',
      },
    },
    {
      name: 'quantity',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      label: {
        en: 'Quantity',
        fr: 'Quantité',
      },
      admin: {
        description: {
          en: 'Quantity available in stock',
          fr: 'Quantité disponible en stock',
        },
      },
    },
  ],
}

export default Products 