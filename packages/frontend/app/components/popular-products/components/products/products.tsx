"use client"

import React from "react"
import { ProductsArrayResponse } from "@shared/schemas/products-array-schema"

import { HorizontalScroll } from "@/app/components/horizontal-scroll/horizontal-scroll"

import { Card } from "./card"

type Props = {
  data: ProductsArrayResponse
}

export function Products({ data }: Props) {
  return (
    <HorizontalScroll>
      {data.map((product) => (
        <Card itemId={product.id} {...product} />
      ))}
    </HorizontalScroll>
  )
}
