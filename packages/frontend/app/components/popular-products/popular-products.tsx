import Image from "next/image"
import Link from "next/link"
import { API_URL } from "@shared/constants"
import { Star } from "lucide-react"

import { getProducts } from "./get-products"

export async function PopularProducts() {
  const data = await getProducts()

  return (
    <div>
      {JSON.stringify(data[0])}
      <h1 className="mt-8 text-3xl font-bold">Popularne produkty</h1>
      <div className="flex flex-wrap">
        {data.map(({ name, Image: img, price, id }) => (
          <div key={name} className="aspect-[3/4] basis-1/4 p-2">
            <Link
              className="flex h-full flex-col overflow-hidden rounded-md border-2"
              href={`/item/${id}`}
            >
              <div className="relative aspect-square">
                <Image src={`${API_URL}/image/${img[0].path}`} alt={""} fill />
              </div>
              <div className="relative grow p-2">
                <span className="line-clamp-2 break-all text-xl font-bold">
                  {name}
                </span>
                <span className="gap absolute bottom-1 left-2 flex items-center gap-1">
                  <Star />
                  <span className="text-lg font-bold">3.5</span>
                </span>
                <span className="gap absolute bottom-1 right-2 flex items-center gap-1">
                  <span className="text-lg font-bold">{price}</span>zł
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
