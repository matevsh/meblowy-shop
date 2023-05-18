import { fetcher } from "@shared/utils/fetcher"

import { API_URL } from "@/app/shared/constants"
import { productsArraySchema } from "@/app/shared/schemas/products-array-schema"

export async function getCategory(category: string) {
  const url = `${API_URL}/product?category=${category}`

  return fetcher(url, productsArraySchema)
}
