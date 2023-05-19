import { Products } from "./components/products/products"
import { getProducts } from "./get-products"

export async function PopularProducts() {
  const data = await getProducts()

  return (
    <div>
      <h1 className="mb-2 mt-8 text-3xl font-bold">Popularne produkty</h1>
      <Products data={data} />
    </div>
  )
}
