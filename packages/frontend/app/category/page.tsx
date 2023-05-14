import { Categories } from "@/app/components/categories/categories"

export default function AllCategoriesPage() {
  return (
    <div className="container">
      {/* @ts-expect-error Async Server Component */}
      <Categories />
    </div>
  )
}
