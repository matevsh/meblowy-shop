import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Categories } from "@/app/components/categories/categories"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          accusantium consequuntur dolor dolorum libero, nisi omnis quam quas
          quia repellat!
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
      <h1 className="text-3xl font-bold">Categories</h1>
      {/* @ts-expect-error Async Server Component */}
      <Categories short />
    </section>
  )
}
