import { getCategory } from "@/app/category/[category]/get-category"

import { Products } from "./components/products/products"

type Params = {
  category: string
}

type Props = {
  params: Params
}

const FIRST_ITEM = 0
export default async function CategoryPage({ params }: Props) {
  const { category } = params
  const products = await getCategory(category)

  const categoryName = products[FIRST_ITEM]?.category.name || "Kategoria Pusta"

  return (
    <section className="container">
      <h1 className="my-4 pl-4 text-4xl font-bold">{categoryName}</h1>
      <Products products={products} />
    </section>
  )
}
