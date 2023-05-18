import { ReactNode } from "react"

import { MainHeader } from "@/app/components/main-header/main-header"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  )
}
