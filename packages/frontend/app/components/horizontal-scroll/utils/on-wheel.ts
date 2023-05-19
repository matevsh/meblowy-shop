import { ContextType, WheelEvent } from "react"
import { VisibilityContext } from "react-horizontal-scrolling-menu"

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>

export function onWheel(apiObj: scrollVisibilityApiType, e: WheelEvent): void {
  const isTouchpad = Math.abs(e.deltaX) !== 0 || Math.abs(e.deltaY) < 15

  if (isTouchpad) {
    return e.stopPropagation()
  }

  if (e.deltaY < 0) {
    apiObj.scrollNext()
  } else if (e.deltaY > 0) {
    apiObj.scrollPrev()
  }
}
