// app/providers.tsx
'use client'

import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { theme } from './theme';


const cache = createCache({ key: 'css' });

function RegularProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

function WithCacheProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}

export { RegularProviders, WithCacheProviders }