import "@/styles/globals.css"
import { ReactNode } from "react"
import { Metadata } from "next"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { MainHeader } from "@/app/components/main-header/main-header"

export const metadata: Metadata = {
  title: {
    default: "Meblowy Shop",
    template: `%s - Meblowy Shop`,
  },
  description: "Sklep meblowy",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <MainHeader />
          <div className="flex-1">{children}</div>
        </div>
        <TailwindIndicator />
      </body>
    </html>
  )
}
