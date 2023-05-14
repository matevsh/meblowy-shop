import Link from "next/link"

type Params = {
  item: string
}

type Props = {
  params: Params
}

export default function ItemPage({ params }: Props) {
  const { item } = params

  return (
    <div className="container">
      <h1>{item}</h1>
    </div>
  )
}
