export const ACTIVE_BACKGROUND_FLAVOUR = 'graphite'

export const FG_PREVIEW_PALETTES = {
  reactor_dark: {
    name: 'Reactor Dark',
    bg: '#08111F',
    surface: '#101B2B',
    border: '#42E8FF',
    text: '#FFFFFF',
  },

  graphite: {
    name: 'Carbon Graphite',
    bg: '#121417',
    surface: '#1E2328',
    border: '#F2A900',
    text: '#F5F5F5',
  },

  nordic_blue: {
    name: 'Nordic Blue',
    bg: '#DDE7EF',
    surface: '#F4F8FB',
    border: '#1B6CA8',
    text: '#102030',
  },
} as const

export const getForgePreviewPalette = () =>
  FG_PREVIEW_PALETTES[ACTIVE_BACKGROUND_FLAVOUR] ||
  FG_PREVIEW_PALETTES.reactor_dark