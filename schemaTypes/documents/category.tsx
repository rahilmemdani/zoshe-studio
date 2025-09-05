// schemas/documents/customization.ts
import { defineField, defineType } from 'sanity'
import { Gift } from 'lucide-react'

export const customizationType = defineType({
  name: 'customization',
  title: 'Customization Service',
  type: 'document',
  icon: Gift,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'price',
      title: 'Actual Price',
      type: 'string',
      description: 'Original price in INR'
    }),
    defineField({
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number',
      description: 'Discounted price (leave empty if no discount)',
      validation: (Rule) =>
        Rule.custom((discountedPrice, context) => {
          const actualPrice = context?.document?.actualPrice as number | undefined
          if (
            discountedPrice !== undefined &&
            actualPrice !== undefined &&
            discountedPrice >= actualPrice
          ) {
            return 'Discounted price must be less than actual price'
          }
          return true
        }),
    }),
    defineField({
      name: 'popular',
      title: 'Most Popular',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'exclusive',
      title: 'Exclusive',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})
