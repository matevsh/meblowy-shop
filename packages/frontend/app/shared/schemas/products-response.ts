import { z } from "zod"

export const productsResponse = z.array(
  z.object({
    id: z.number(),
    categoryId: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    inStock: z.number(),
    discountPercentage: z.number(),
  })
)

export type ProductsResponse = z.infer<typeof productsResponse>
