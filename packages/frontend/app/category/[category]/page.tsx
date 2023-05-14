import { getCategory } from "@/app/category/[category]/get-category"

import { Products } from "./components/products/products"

type Params = {
  category: string
}

type Props = {
  params: Params
}

export default async function CategoryPage({ params }: Props) {
  const { category } = params
  const products = await getCategory(category)

  return <Products products={products} />
}
