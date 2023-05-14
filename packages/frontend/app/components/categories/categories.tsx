import Link from "next/link"

import { getCategories } from "./get-categories"

const allCategories = {
  id: 0,
  name: "Wszystkie Kategorie",
}

export async function Categories() {
  const categories = (await getCategories()).splice(0, 4)
  const renderData = [...categories, allCategories]

  return (
    <div className="flex flex-wrap gap-2">
      {renderData.map(({ name, id }) => (
        <Link
          href={`/category/${id}`}
          key={name}
          className="flex aspect-square shrink grow basis-1/6 items-end border-2 border-blue-300 p-2"
        >
          <span className="text-xl font-bold">{name}</span>
        </Link>
      ))}
    </div>
  )
}
