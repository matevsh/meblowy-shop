import { z } from "zod"

export const categoriesResponse = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  })
)

export type CategoriesResponse = z.infer<typeof categoriesResponse>
