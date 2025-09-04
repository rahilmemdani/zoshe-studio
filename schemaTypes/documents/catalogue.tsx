// schemas/documents/catalogue.ts
import { defineField, defineType } from 'sanity'

export const catalogueType = defineType({
  name: 'catalogue',
  title: 'Catalogue',
  type: 'document',
  fields: [
    defineField({
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      description: 'Unique identifier for the product',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in INR',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    // defineField({
    //   name: 'category',
    //   title: 'Category',
    //   type: 'reference',
    //   to: [{ type: 'category' }],
    // }),
    defineField({
      name: 'scentProfile',
      title: 'Scent Profile',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          { title: 'Floral', value: 'Floral' },
          { title: 'Fresh', value: 'Fresh' },
          { title: 'Woody', value: 'Woody' },
          { title: 'Oriental', value: 'Oriental' },
          { title: 'Citrus', value: 'Citrus' },
          { title: 'Spicy', value: 'Spicy' },
        ],
        layout: 'tags', 
      },
      description: 'Fragrance family / scent notes',
    }),
    defineField({
      name: 'promotion',
      title: 'Promotion',
      type: 'string',
      initialValue: '',
      description: '',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isPremium',
      title: 'Premium',
      type: 'boolean',
      description: 'Mark this product as Premium',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Product Active',
      type: 'boolean',
      description: 'Is this product active?',
      initialValue: true,
    }),
    defineField({
      name: 'isOutOfStock',
      title: 'Product out of stock',
      type: 'boolean',
      description: 'Mark this product out of stock',
      initialValue: false,
    }) 
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.title',
      media: 'images.0',
    },
  },
})
