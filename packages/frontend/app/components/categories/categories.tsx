import Link from "next/link"

import { getCategories } from "./get-categories"

const allCategories = {
  id: "",
  name: "Wszystkie Kategorie",
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
    <div className="flex flex-wrap">
      {renderData.map(({ name, id }) => (
        <div key={name} className="flex aspect-square  basis-1/5 p-2">
          <Link
            href={`/category/${id}`}
            className="w-full border-2 border-blue-300 p-2"
          >
            <span className="text-xl font-bold ">{name}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
