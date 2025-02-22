"use client"

import { api } from "@/trpc/react"

export function Test() {

  const {data } = api.test.foo.useQuery({test: '客户端组件'})
  
  return (
    <div>{data?.input.test}</div>
  )
}
