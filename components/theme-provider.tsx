```
'use client'

import * as React from'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { useSharedUtilities } from '@lib/utilities'

export function ThemeProvider({ children,...props }: ThemeProviderProps) {
  const { ensureThemeConsistency } = useSharedUtilities()

  return (
    <NextThemesProvider {...props} value={ensureThemeConsistency(props.value)}>
      {children}
    </NextThemesProvider>
  )
}
```