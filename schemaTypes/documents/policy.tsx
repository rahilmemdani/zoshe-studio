// /schemas/policy.ts
import { defineField, defineType } from "sanity";

export const policyType = defineType({
  name: "policy",
  title: "Policy",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Shipping", value: "shipping" },
          { title: "Returns", value: "returns" },
          { title: "Privacy Policy", value: "privacy" },
          { title: "Terms of Service", value: "terms" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Policy Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", title: "Heading", type: "string" },
            { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
          ],
        },
      ],
    }),

    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
    }),
  ],
});
