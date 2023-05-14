import { ProductCard } from "@/app/category/[category]/components/products/product-card"
import { API_URL } from "@/app/shared/constants"
import { ProductsResponse } from "@/app/shared/schemas/products-response"

type Props = {
  products: ProductsResponse
}

export function Products({ products }: Props) {
  return (
    <section className="gap container flex flex-wrap">
      {products.map(({ name, Image, price, id }) => {
        return (
          <ProductCard
            id={id}
            imgPath={Image?.[0].path}
            name={name}
            price={price}
            key={id}
          />
        )
      })}
    </section>
  )
}
