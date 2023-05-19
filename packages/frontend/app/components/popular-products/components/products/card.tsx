import React from "react"
import Image from "next/image"
import Link from "next/link"
import { API_URL } from "@shared/constants"
import { Star } from "lucide-react"

type Image = {
  path: string
}

type Props = {
  name: string
  id: number
  itemId: number
  price: number
  Image: Array<Image>
}

export function Card({ Image: img, id, name, price }: Props) {
  const imageUrl = `${API_URL}/image/${img?.[0].path}`

  return (
    <div key={name} className="aspect-[3/4] w-64 shadow-lg">
      <Link
        className="flex h-full flex-col overflow-hidden rounded-md border-2"
        href={`/item/${id}`}
      >
        <div className="relative aspect-square">
          <Image src={imageUrl} alt={""} fill />
        </div>
        <div className="relative grow p-2">
          <span className="line-clamp-2 break-all text-xl font-bold leading-full">
            {name}
          </span>
          <span className="gap absolute bottom-1 left-2 flex items-center gap-1">
            <Star fill={"currentColor"} size={20} />
            <span className="text-lg font-bold">3.5</span>
          </span>
          <span className="gap absolute bottom-1 right-2 flex items-center gap-1">
            <span className="text-lg font-bold">{price}</span>zł
          </span>
        </div>
      </Link>
    </div>
  )
}
