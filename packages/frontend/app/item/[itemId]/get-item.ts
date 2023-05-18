import { fetcher } from "@shared/utils/fetcher"

import { API_URL } from "@/app/shared/constants"
import { productSchema } from "@/app/shared/schemas/product-schema"

export const getItem = async (itemId: number | string) => {
  const url = `${API_URL}/product/${itemId}`

  return fetcher(url, productSchema)
}
