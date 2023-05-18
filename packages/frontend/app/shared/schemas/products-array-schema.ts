import { z } from "zod"

import { productSchema } from "@/app/shared/schemas/product-schema"

export const productsArraySchema = z.array(productSchema)

export type ProductsArrayResponse = z.infer<typeof productsArraySchema>
