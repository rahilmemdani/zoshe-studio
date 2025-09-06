// schemas/documents/faq.ts
import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required().min(10).max(200),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().min(20),
    }),
    // defineField({
    //   name: 'icon',
    //   title: 'Icon',
    //   type: 'string',
    //   options: {
    //     list: [
    //       { title: 'Clock', value: 'clock' },
    //       { title: 'Gift', value: 'gift' },
    //       { title: 'Shield', value: 'shield' },
    //       { title: 'Truck', value: 'truck' },
    //       { title: 'Message', value: 'message' },
    //     ],
    //     layout: 'dropdown',
    //   },
    //   description: 'Pick an icon to visually represent this FAQ',
    // }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the display order of FAQs',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
  },
})
