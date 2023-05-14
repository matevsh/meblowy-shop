import { API_URL } from "@/app/shared/constants"

import { categoriesResponse } from "./schemas/categories-response"

export async function getCategories() {
  const response = await fetch(`${API_URL}/category`)
  const data = await response.json()

  console.log(data)

  return categoriesResponse.parse(data)
}
