'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import theme from '@/theme/theme';

const system = createSystem(defaultConfig, theme);

export function Provider({ children }) {
  return (
      <ChakraProvider value={system}>
          {children}
      </ChakraProvider>
  )
}