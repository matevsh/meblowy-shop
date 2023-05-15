import { z } from "zod"

export const itemResponse = z.object({
  id: z.number(),
  categoryId: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  inStock: z.number(),
  discountPercentage: z.number(),
  Image: z.array(
    z.object({
      path: z.string(),
    })
  ),
})

export type ItemResponse = z.infer<typeof itemResponse>
