"use client"

import Image from "next/image"
import Link from "next/link"
import { API_URL } from "@shared/constants"

import { getCategories } from "./get-categories"

const allCategories = {
  id: "",
  name: "Wszystkie Kategorie",
  image: "",
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
          const imageUrl = `${API_URL}/image/${image}`

          return (
            <div
              key={name}
              className="relative flex aspect-square basis-1/5 p-2"
            >
              <Link
                href={`/category/${id}`}
                className="w-full border-2 border-blue-300 p-2"
              >
                <Image src={imageUrl} alt={""} fill />
                <span className="text-xl font-bold">
                  {API_URL}
                  {name}
                  {image}
                </span>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
