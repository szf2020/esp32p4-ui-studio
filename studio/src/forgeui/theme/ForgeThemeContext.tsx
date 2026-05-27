import React, { createContext, useContext, useState } from 'react'
import {
  FG_PREVIEW_PALETTES,
  ForgeThemeId,
} from '~forgeui/preview/forgeThemeMap'

type ForgeThemeContextValue = {
  themeId: ForgeThemeId
  setThemeId: (id: ForgeThemeId) => void
  palette: typeof FG_PREVIEW_PALETTES[ForgeThemeId]
}

const ForgeThemeContext = createContext<ForgeThemeContextValue | null>(null)

export const ForgeThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeId, setThemeId] = useState<ForgeThemeId>('graphite')

  return (
    <ForgeThemeContext.Provider
      value={{
        themeId,
        setThemeId,
        palette: FG_PREVIEW_PALETTES[themeId],
      }}
    >
      {children}
    </ForgeThemeContext.Provider>
  )
}

export const useForgeTheme = () => {
  const ctx = useContext(ForgeThemeContext)
  if (!ctx) throw new Error('useForgeTheme must be used inside ForgeThemeProvider')
  return ctx
}