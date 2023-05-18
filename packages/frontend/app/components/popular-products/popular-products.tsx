import { getProducts } from "./get-products"

export async function PopularProducts() {
  const data = await getProducts()

  return (
    <div>
      {JSON.stringify(data[0])}
      <h1 className="mt-8 text-3xl font-bold">Popularne produkty</h1>
      <div className="flex flex-wrap">
        {data.map(({ name, id }) => (
          <div key={name} className="flex aspect-square basis-1/4 p-2">
            <span className="text-xl font-bold ">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
