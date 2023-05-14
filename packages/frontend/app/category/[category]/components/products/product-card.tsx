import Link from "next/link"

import { API_URL } from "@/app/shared/constants"

type Props = {
  imgPath: string
  name: string
  price: number
  id: number
}

export function ProductCard({ imgPath, name, price, id }: Props) {
  const imageUrl = `${API_URL}/image/${imgPath}`

  return (
    <Link className="basis-1/4 p-4" href={`/item/${id}`}>
      <div className="h-full cursor-pointer overflow-hidden rounded-lg border-4 bg-background drop-shadow-xl">
        <div className="aspect-square">
          <div
            className={`h-full bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
        <div className="mt-1 pl-3 font-bold">{name}</div>
        <div className="mb-2 pl-3">{price}zł</div>
      </div>
    </Link>
  )
}
