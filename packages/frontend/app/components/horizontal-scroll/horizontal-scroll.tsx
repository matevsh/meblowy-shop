"use client"

import React, { ReactElement } from "react"
import { ScrollMenu } from "react-horizontal-scrolling-menu"

import "./styles/global.css"
import { LeftArrow, RightArrow } from "./components/controls"
import { usePreventBodyScroll } from "./utils/prevent"
import "react-horizontal-scrolling-menu/dist/styles.css"
import { onWheel } from "./utils/on-wheel"

type ElementWithItemId = ReactElement<{
  itemId: string
}>

type Props = {
  children: ElementWithItemId | Array<ElementWithItemId>
}

export function HorizontalScroll({ children }: Props) {
  const { disableScroll, enableScroll } = usePreventBodyScroll()

  return (
    <div
      onMouseEnter={disableScroll}
      onMouseLeave={enableScroll}
      className="px-2"
    >
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
        scrollContainerClassName={"gap-1"}
        wrapperClassName="relative"
      >
        {children}
      </ScrollMenu>
    </div>
  )
}
