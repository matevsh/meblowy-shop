import axios from "axios"

import { API_URL } from "@/app/shared/constants"
import { productsResponse } from "@/app/shared/schemas/products-response"

export async function getCategory(category: string) {
  const response = await axios.get(`${API_URL}/product`, {
    params: { category },
  })

  return productsResponse.parse(response.data)
}
