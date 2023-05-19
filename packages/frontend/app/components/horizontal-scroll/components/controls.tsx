import React, { ReactNode, useContext, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { VisibilityContext } from "react-horizontal-scrolling-menu"

type Props = {
  children: ReactNode
  disabled: boolean
  onClick: VoidFunction
  pos: "left" | "right"
}

function Arrow({ children, disabled, onClick, pos }: Props) {
  const position = pos === "left" ? "left-4" : "right-4"
  const disable = disabled ? "opacity-0" : "opacity-100"

  return (
    <div
      className={`absolute top-2/4 z-10 -translate-y-1/2 cursor-pointer transition-all ${position} bg-white ${disable} h-8 select-none rounded-lg p-1 shadow-lg`}
    >
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    useContext(VisibilityContext)

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  )
  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible)
    }
  }, [isFirstItemVisible, visibleElements])

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()} pos="left">
      <ArrowLeft />
    </Arrow>
  )
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    useContext(VisibilityContext)

  const [disabled, setDisabled] = useState(
    !visibleElements.length && isLastItemVisible
  )
  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible)
    }
  }, [isLastItemVisible, visibleElements])

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()} pos="right">
      <ArrowRight />
    </Arrow>
  )
}
