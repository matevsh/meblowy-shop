import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/app/components/main-header/components/main-nav/main-nav"

export function MainHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={"https://github.com/matevsh/nextjs-nestjs-shop"}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
            <Link href={"/cart"}>
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
