"use client"

import { useLayoutEffect, useRef, useState } from "react"

import { StarIcon } from "./star-icon"
import { StarIconFilled } from "./star-icon-filled"
import { StarIconHalf } from "./star-icon-half"

type Props = {
  rating: number
}

function range(from: number, to: number) {
  return Array.from({ length: to }).splice(from, to - from)
}

export function Rating({ rating: initial }: Props) {
  const [rating, setRating] = useState(initial)
  const [curr, setCurr] = useState(0)
  const [hover, setHover] = useState(false)

  const render = (rating: number) => {
    return range(0, 5).map((_, i) => {
      let icon

      if (i < rating) {
        icon = <StarIconFilled />
      } else if (i > Math.floor(rating)) {
        icon = <StarIcon />
      } else if (i + 0.5 > rating) {
        icon = <StarIcon />
      } else {
        icon = <StarIconHalf />
      }

      return (
        <div
          key={i}
          onMouseOver={() => setCurr(i + 1)}
          onClick={() => setRating(i + 1)}
        >
          {icon}
        </div>
      )
    })
  }

  return (
    <div
      className="flex cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {render(hover ? curr : rating)}
    </div>
  )
}
