import axios from "axios"

import { API_URL } from "@/app/shared/constants"
import { productSchema } from "@/app/shared/schemas/product-schema"

export const getItem = async (itemId: number | string) => {
  const { data } = await axios.get(`${API_URL}/product/${itemId}`)

  return productSchema.parse(data)
}
