'use client'

import { NextUIProvider } from '@nextui-org/react'
import {FC} from "react";

export function Providers({ children }: { children: any} ) {
  // useServerInsertedHTML(() => {
  //   return <>{CssBaseline.flush()}</>
  // })

  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}