import { getCategories } from "@/app/components/categories/get-categories"

const allCategories = {
  name: "Wszystkie Kategorie",
}

export async function Categories() {
  const categories = (await getCategories()).splice(0, 4)
  const renderData = [...categories, allCategories]

  return (
    <div className="flex flex-wrap gap-2">
      {renderData.map(({ name }) => (
        <div className="flex aspect-square shrink grow basis-1/6 items-end border-2 border-blue-300 p-2">
          <span className="text-xl font-bold">{name}</span>
        </div>
      ))}
    </div>
  )
}
