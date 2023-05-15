import axios from "axios"

import { itemResponse } from "@/app/item/[itemId]/schemas/item-response"
import { API_URL } from "@/app/shared/constants"

export const getItem = async (itemId: number | string) => {
  const { data } = await axios.get(`${API_URL}/product/${itemId}`)

  return itemResponse.parse(data)
}
