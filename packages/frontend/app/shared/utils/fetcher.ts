import p from "phin"
import { ZodType } from "zod"

export function fetcher<T>(url: string, schema: ZodType<T>) {
  return p({ url, parse: "json" })
    .then((res) => res.body)
    .then((body) => schema.parse(body))
}
