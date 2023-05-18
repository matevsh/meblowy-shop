import { fetcher } from "@shared/utils/fetcher"

import { API_URL } from "@/app/shared/constants"

import { categoriesResponse } from "./schemas/categories-response"

export async function getCategories() {
  const url = `${API_URL}/category`

  return fetcher(url, categoriesResponse)
}
