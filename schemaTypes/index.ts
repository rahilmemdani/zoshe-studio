// schemas/schema.ts
import { catalogueType } from './documents/catalogue'
import { customizationType } from './documents/category'
import { faqType } from './documents/faq'
import { bannerType } from "./documents/banner";

export const schemaTypes = [customizationType, catalogueType, faqType, bannerType]
