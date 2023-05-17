import { z } from "zod"

export const itemResponse = z.object({
  id: z.number(),
  categoryId: z.number(),
  name: z.string(),
  views: z.number(),
  description: z.string(),
  price: z.number(),
  inStock: z.number(),
  discountPercentage: z.number(),
  category: z.object({
    name: z.string(),
  }),
  Image: z.array(
    z.object({
      path: z.string(),
    })
  ),
  Rating: z.array(
    z.object({
      rate: z.number(),
    })
  ),
})

export type ItemResponse = z.infer<typeof itemResponse>
