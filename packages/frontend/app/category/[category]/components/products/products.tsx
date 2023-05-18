import { ProductCard } from "@/app/category/[category]/components/products/product-card"
import { API_URL } from "@/app/shared/constants"
import { ProductsArrayResponse } from "@/app/shared/schemas/products-array-schema"

type Props = {
  products: ProductsArrayResponse
}

export function Products({ products }: Props) {
  return (
    <section className="flex flex-wrap">
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
