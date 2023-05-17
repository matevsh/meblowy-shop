import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rating } from "@/app/item/[itemId]/components/rating/rating"
import { getItem } from "@/app/item/[itemId]/get-item"
import { API_URL } from "@/app/shared/constants"

import styles from "./item.module.css"

type Params = {
  itemId: string
}

type Props = {
  params: Params
}

export default async function ItemPage({ params }: Props) {
  const itemId = params.itemId
  const data = await getItem(itemId)

  return (
    <div className="container flex max-w-screen-xl px-16">
      <div className="sticky basis-3/5">
        <div className="flex aspect-[7/8] p-4">
          <div
            className={`h-auto w-full basis-1/5 gap-2 overflow-y-scroll px-2 ${styles.hideScrollBar}`}
          >
            {data.Image.map((image, i) => (
              <div className="relative aspect-square" key={i}>
                <Image
                  fill
                  src={`${API_URL}/image/${image.path}`}
                  alt=""
                ></Image>
              </div>
            ))}
          </div>
          <div className="relative basis-4/5">
            <Image
              className="object-cover"
              fill
              alt=""
              src={`${API_URL}/image/${data.Image[0].path}`}
              quality={100}
            ></Image>
          </div>
        </div>
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
        <Button className="mt-8">Dodaj do koszyka</Button>
      </div>
    </div>
  )
}
