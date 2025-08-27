// schemas/schema.ts
import { catalogueType } from './documents/catalogue'
import { customizationType } from './documents/category'
import { postType } from './postType'

export const schemaTypes = [customizationType, catalogueType, postType]
