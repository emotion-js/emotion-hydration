// app/providers.tsx
'use client'

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { ChakraProvider } from '@chakra-ui/react'

const cache = createCache({ key: 'css' });

function RegularProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>{children}</ChakraProvider>
  )
}

function WithCacheProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  )
}

export { RegularProviders, WithCacheProviders }