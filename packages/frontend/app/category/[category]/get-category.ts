import axios from "axios"

import { API_URL } from "@/app/shared/constants"
import { productsArraySchema } from "@/app/shared/schemas/products-array-schema"

export async function getCategory(category: string) {
  const response = await axios.get(`${API_URL}/product`, {
    params: { category },
  })

  return productsArraySchema.parse(response.data)
}
