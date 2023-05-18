import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImagesView } from "@/app/item/[itemId]/components/images-view/images-view"
import { Rating } from "@/app/item/[itemId]/components/rating/rating"
import { getItem } from "@/app/item/[itemId]/get-item"
import { API_URL } from "@/app/shared/constants"

type Params = {
  itemId: string
}

type Props = {
  params: Params
}

export default async function ItemPage({ params }: Props) {
  const itemId = params.itemId
  const data = await getItem(itemId)

  const imagesData = data.Image.map((image) => `${API_URL}/image/${image.path}`)

  const isAvailable = data.inStock > 0

  return (
    <div className="container flex max-w-screen-xl px-16">
      <div className="sticky basis-3/5">
        <ImagesView imagePaths={imagesData} />
      </div>
      <div className="basis-2/5 pl-4 pt-3">
        <Badge>{data.category.name}</Badge>
        <h1 className="my-2 text-4xl font-bold">{data.name}</h1>

        <p>{data.description}</p>

        <div className="my-8 flex items-center justify-between">
          <p>{data.inStock} dostępny/ch</p>
          <Rating rating={3.5} />
        </div>

        <p className="text-3xl font-black">{data.price}zł</p>
        <Button className="mt-8" disabled={!isAvailable}>
          {isAvailable ? "Dodaj do koszyka" : "Produkt niedostępny"}
        </Button>
      </div>
    </div>
  )
}
