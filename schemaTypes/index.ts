// schemas/schema.ts
import { catalogueType } from './documents/catalogue'
import { categoryType } from './documents/category'
import { postType } from './postType'

export const schemaTypes = [categoryType, catalogueType, postType]
