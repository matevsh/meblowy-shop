"use client"

import { useState } from "react"
import Image from "next/image"

import styles from "./images-view.module.css"

type Props = {
  imagePaths: string[]
}

export function ImagesView({ imagePaths }: Props) {
  const [currentImage, setCurrentImage] = useState(imagePaths[0])

  return (
    <div className="flex aspect-[7/8] p-4">
      <div
        className={`h-auto w-full basis-1/5 overflow-y-scroll px-2 ${styles.hideScrollBar}`}
      >
        {imagePaths.map((image, i) => (
          <div
            className="relative mb-2 aspect-square"
            key={i}
            onMouseOver={() => setCurrentImage(imagePaths[i])}
          >
            <Image fill src={image} alt=""></Image>
          </div>
        ))}
      </div>
      <div className="relative basis-4/5">
        <Image
          className="object-cover"
          fill
          alt=""
          src={currentImage}
          quality={100}
        ></Image>
      </div>
    </div>
  )
}
