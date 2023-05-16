import { Categories } from "@/app/components/categories/categories"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Odkryj nowe wymiary komfortu w naszym sklepie meblowym.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Odkryj nieograniczone możliwości aranżacji wnętrz w naszym sklepie
          meblowym. Znajdź doskonałe meble, które spełnią Twoje potrzeby.
        </p>
      </div>

      {/* @ts-expect-error Async Server Component */}
      <Categories short />
    </section>
  )
}
