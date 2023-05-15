import Link from "next/link"

import { getItem } from "@/app/item/[itemId]/get-item"

type Params = {
  itemId: string
}

type Props = {
  params: Params
}

export default function ItemPage({ params }: Props) {
  const itemId = params.itemId
  const data = getItem(itemId)

  return (
    <div className="container">
      <h1>{JSON.stringify(data)}</h1>
    </div>
  )
}
