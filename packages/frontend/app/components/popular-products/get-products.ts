import { productsArraySchema } from "@shared/schemas/products-array-schema"
import { fetcher } from "@shared/utils/fetcher"

import { API_URL } from "@/app/shared/constants"

export async function getProducts() {
  const url = `${API_URL}/product/popular`

  return fetcher(url, productsArraySchema)
}
