import { z } from "zod"

export const productSchema = z.object({
  id: z.number(),
  categoryId: z.number(),
  name: z.string(),
  views: z.number(),
  description: z.string(),
  price: z.number(),
  inStock: z.number(),
  discountPercentage: z.number(),
  Image: z.array(
    z.object({
      path: z.string(),
    })
  ),
  category: z.object({
    name: z.string(),
  }),
  Rating: z.array(
    z.object({
      rate: z.number(),
    })
  ),
})

export type ProductResponse = z.infer<typeof productSchema>
