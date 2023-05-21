"use client"

import Image from "next/image"
import Link from "next/link"
import { API_URL } from "@shared/constants"

import { getCategories } from "./get-categories"

const allCategories = {
  id: "",
  name: "Wszystkie Kategorie",
  image: "allcategories.png",
}

type Props = {
  short?: boolean
}

export async function Categories({ short = false }: Props) {
  const categories = await getCategories()
  const renderData = short
    ? [...categories.splice(0, 4), allCategories]
    : categories

  return (
    <div>
      <h1 className="mt-8 text-3xl font-bold">Kategorie</h1>
      <div className="flex flex-wrap">
        {renderData.map(({ name, id, image }) => {
          const imageUrl = `${API_URL}/image/${image || "default"}`

          return (
            <div key={name} className="flex aspect-square basis-1/5 p-2">
              <Link
                href={`/category/${id}`}
                className="relative w-full overflow-hidden rounded-md border-blue-300 p-2"
              >
                <Image src={imageUrl} alt={""} fill />
                <span className="absolute bottom-0 left-0 p-2 text-xl font-bold">
                  <div className="rounded-md bg-white px-2">{name}</div>
                </span>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
