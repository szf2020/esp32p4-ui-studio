export type ForgeTextureId =
  | 'none'
  | 'dark_noise'
  | 'carbon_fiber'
  | 'brushed_steel'
  | 'hex_mesh'
  | 'blueprint_grid'
  | 'industrial_panel'

export type ForgeBorderStyle =
  | 'flat'
  | 'industrial'
  | 'glow'
  | 'soft'
  | 'terminal'
  
export const ACTIVE_BACKGROUND_FLAVOUR = 'graphite'

export const FG_PREVIEW_PALETTES = {
  reactor_dark: {
    name: 'Reactor Dark',

    bg: '#08111F',

    surface: '#101B2B',
    surface2: '#162436',

    border: '#42E8FF',

    text: '#FFFFFF',

    accent: '#42E8FF',
  },

  graphite: {
  name: 'Carbon Graphite',

  bg: '#121417',

  surface: '#1E2328',
  surface2: '#2A3138',

  border: '#F2A900',

  text: '#F5F5F5',

  accent: '#F2A900',

  texture: 'carbon_fiber',
  borderStyle: 'industrial',
},

  nordic_blue: {
    name: 'Nordic Blue',

    bg: '#DDE7EF',

    surface: '#F4F8FB',
    surface2: '#D7E5EF',

    border: '#1B6CA8',

    text: '#102030',

    accent: '#1B6CA8',
  },

  midnight_terminal: {
    name: 'Midnight Terminal',

    bg: '#050816',

    surface: '#0F172A',
    surface2: '#182235',

    border: '#22C55E',

    text: '#D1FAE5',

    accent: '#22C55E',
  },

  industrial_steel: {
    name: 'Industrial Steel',

    bg: '#1F2937',

    surface: '#374151',
    surface2: '#4B5563',

    border: '#9CA3AF',

    text: '#F3F4F6',

    accent: '#9CA3AF',
  },

  forge_orange: {
    name: 'Forge Orange',

    bg: '#1A120B',

    surface: '#2B1D14',
    surface2: '#3A281D',

    border: '#F97316',

    text: '#FFF7ED',

    accent: '#F97316',
  },

  nebula_purple: {
    name: 'Nebula Purple',

    bg: '#140F1F',

    surface: '#221A33',
    surface2: '#302347',

    border: '#A855F7',

    text: '#F3E8FF',

    accent: '#A855F7',
  },

  cyber_teal: {
    name: 'Cyber Teal',

    bg: '#071A1D',

    surface: '#0F2A30',
    surface2: '#153942',

    border: '#14B8A6',

    text: '#CCFBF1',

    accent: '#14B8A6',
  },

  military_green: {
    name: 'Military Green',

    bg: '#1B2416',

    surface: '#2D3A25',
    surface2: '#3D4D33',

    border: '#84CC16',

    text: '#F7FEE7',

    accent: '#84CC16',
  },

  arctic_ice: {
    name: 'Arctic Ice',

    bg: '#E6F4F9',

    surface: '#F8FCFE',
    surface2: '#DDEEF5',

    border: '#38BDF8',

    text: '#082F49',

    accent: '#38BDF8',
  },

  retro_amber: {
    name: 'Retro Amber',

    bg: '#1A1202',

    surface: '#2A1D05',
    surface2: '#3B2907',

    border: '#F59E0B',

    text: '#FEF3C7',

    accent: '#F59E0B',
  },

  carbon_red: {
    name: 'Carbon Red',

    bg: '#140809',

    surface: '#2A1012',
    surface2: '#3A181C',

    border: '#EF4444',

    text: '#FEE2E2',

    accent: '#EF4444',
  },

  clean_light: {
    name: 'Clean Light',

    bg: '#F3F4F6',

    surface: '#FFFFFF',
    surface2: '#E5E7EB',

    border: '#2563EB',

    text: '#111827',

    accent: '#2563EB',
  },

  oled_black: {
    name: 'OLED Black',

    bg: '#000000',

    surface: '#0A0A0A',
    surface2: '#1A1A1A',

    border: '#FFFFFF',

    text: '#FFFFFF',

    accent: '#FFFFFF',
  },

  matrix_green: {
    name: 'Matrix Green',

    bg: '#000A00',

    surface: '#001A00',
    surface2: '#003300',

    border: '#00FF66',

    text: '#CCFFDD',

    accent: '#00FF66',
  },
} as const

export type ForgeThemeId = keyof typeof FG_PREVIEW_PALETTES

export const getForgePreviewPalette = (
  themeId: ForgeThemeId = ACTIVE_BACKGROUND_FLAVOUR,
) =>
  FG_PREVIEW_PALETTES[themeId] ||
  FG_PREVIEW_PALETTES.reactor_dark