import { ProductsResponse } from "@/app/shared/schemas/products-response"

type Props = {
  products: ProductsResponse
}

export function Products({ products }: Props) {
  return (
    <section className="container flex flex-wrap">
      {products.map((product) => (
        <div className="aspect-square basis-1/3">{product.name}</div>
      ))}
    </section>
  )
}
