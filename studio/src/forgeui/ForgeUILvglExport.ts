import { forgeUIGetUploadedAssets } from './ForgeUIUploadedAssetRegistry'
import { FORGEUI_IMAGE_ASSETS } from './ForgeUIAssetRegistry'

import {
  FG_PREVIEW_PALETTES,
  type ForgeThemeId,
} from './preview/forgeThemeMap'

const toLvHex = (
  value: string,
  fallback = '0x000000',
) => {
  if (!value) return fallback

  return `0x${String(value)
    .replace('#', '')
    .toUpperCase()}`
}

const FG_TEXTURE_ASSETS: Record<
  string,
  {
    symbol: string
    source: string
  }
> = {
  carbon_fiber: {
    symbol: 'fg_upload_carbon_fiber_be774fd2',
    source: 'assets/uploads/fg_upload_carbon_fiber_be774fd2.c',
  },

  brushed_steel: {
    symbol: 'fg_upload_brushed_steel_bc48e90c',
    source: 'assets/uploads/fg_upload_brushed_steel_bc48e90c.c',
  },

  hex_mesh: {
    symbol: 'fg_upload_hex_mesh_e46ed0b5',
    source: 'assets/uploads/fg_upload_hex_mesh_e46ed0b5.c',
  },

  dark_noise: {
    symbol: 'fg_upload_dark_noise_08fcab09',
    source: 'assets/uploads/fg_upload_dark_noise_08fcab09.c',
  },

  industrial_panel: {
    symbol: 'fg_upload_industrial_panel_8775311d',
    source: 'assets/uploads/fg_upload_industrial_panel_8775311d.c',
  },

  blueprint_grid: {
    symbol: 'fg_upload_blueprint_grid_71595117',
    source: 'assets/uploads/fg_upload_blueprint_grid_71595117.c',
  },
  ai_mesh: {
    symbol: 'fg_upload_1024x600_ai_mesh_9f3f1b39',
    source: 'assets/uploads/fg_upload_1024x600_ai_mesh_9f3f1b39.c',
  },

  ai_nexus: {
    symbol: 'fg_upload_1024x600_ai_nexus_88b196e9',
    source: 'assets/uploads/fg_upload_1024x600_ai_nexus_88b196e9.c',
  },

  creation: {
    symbol: 'fg_upload_1024x600_creation_786cf05c',
    source: 'assets/uploads/fg_upload_1024x600_creation_786cf05c.c',
  },

  nebula_core: {
    symbol: 'fg_upload_1024x600_nebula_core_0ddf52d1',
    source: 'assets/uploads/fg_upload_1024x600_nebula_core_0ddf52d1.c',
  },

  neon_horizon: {
    symbol: 'fg_upload_1024x600_neon_horizon_6dae04db',
    source: 'assets/uploads/fg_upload_1024x600_neon_horizon_6dae04db.c',
  },

  neural_core: {
    symbol: 'fg_upload_1024x600_neural_core_67dd4ba0',
    source: 'assets/uploads/fg_upload_1024x600_neural_core_67dd4ba0.c',
  },

  quantum_flow: {
    symbol: 'fg_upload_1024x600_quantum_flow_4ffa7dbc',
    source: 'assets/uploads/fg_upload_1024x600_quantum_flow_4ffa7dbc.c',
  },

  quantum_hex: {
    symbol: 'fg_upload_1024x600_quantum_hex_98c7da6c',
    source: 'assets/uploads/fg_upload_1024x600_quantum_hex_98c7da6c.c',
  },

}

const lv = (v: any, d: any = 0) =>
  v !== undefined && v !== null && v !== '' ? v : d

const esc = (v: string = '') =>
  String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"')

const buildLvglBlock = (
  component: IComponent,
  components: IComponents,
  parentVar: string,
  lines: string[],
  counter: { value: number },
  palette: any,
  usedAssetSources: Set<string>
) => {
  ;(component.children || []).forEach((key: string) => {
    const child = components[key]
    if (!child) return

    counter.value++
    const varName = `obj${counter.value}`

    const x = lv(child.props.x, 0)
    const y = lv(child.props.y, 0)
    const w = lv(child.props.w, 120)
    const h = lv(child.props.h, 40)

    switch (child.type) {
      case 'Text': {
        const text = esc(
          child.props.children ||
            child.props.text ||
            child.props.value ||
            'Text'
        )

        const color = child.props.color
          ? `0x${String(child.props.color).replace('#', '')}`
          : palette.text

        const fontSize = lv(child.props.fontSize, 24)

        lines.push(`lv_obj_t * ${varName} = lv_label_create(${parentVar});`)
        lines.push(`lv_label_set_text(${varName}, "${text}");`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${color}), 0);`)
        lines.push(`lv_obj_set_style_text_font(${varName}, &lv_font_montserrat_${fontSize}, 0);`)
        lines.push(``)
        break
      }
      
            case 'Button': {
        const text = esc(
          child.props.children ||
            child.props.text ||
            child.props.label ||
            'Button'
        )

        lines.push(`lv_obj_t * ${varName} = lv_button_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_obj_set_style_radius(${varName}, 12, 0);`)
        lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), 0);`)
        lines.push(`lv_obj_set_style_bg_opa(${varName}, LV_OPA_COVER, 0);`)
        lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), 0);`)
        lines.push(`lv_obj_set_style_border_width(${varName}, 2, 0);`)

        lines.push(`lv_obj_t * ${varName}_label = lv_label_create(${varName});`)
        lines.push(`lv_label_set_text(${varName}_label, "${text}");`)
        lines.push(`lv_obj_set_style_text_color(${varName}_label, lv_color_hex(${palette.text}), 0);`)
        lines.push(`lv_obj_center(${varName}_label);`)
        lines.push(``)
        break
      }

            case 'Input': {
        const text = esc(child.props.placeholder || child.props.value || 'Input')

        lines.push(`lv_obj_t * ${varName} = lv_textarea_create(${parentVar});`)
        lines.push(`lv_textarea_set_one_line(${varName}, true);`)
        lines.push(`lv_textarea_set_placeholder_text(${varName}, "${text}");`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), 0);`)
        lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), 0);`)
        lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), 0);`)
        lines.push(``)
        break
      }

      case 'Textarea': {
        const text = esc(child.props.placeholder || child.props.value || 'Textarea')

        lines.push(`lv_obj_t * ${varName} = lv_textarea_create(${parentVar});`)
        lines.push(`lv_textarea_set_placeholder_text(${varName}, "${text}");`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), 0);`)
        lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), 0);`)
        lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), 0);`)
        lines.push(``)
        break
      }
      
      case 'Switch': {
  const checked = Boolean(child.props.isChecked)

  lines.push(`lv_obj_t * ${varName} = lv_switch_create(${parentVar});`)
  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
  lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)

  if (checked) {
    lines.push(`lv_obj_add_state(${varName}, LV_STATE_CHECKED);`)
  }

  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), LV_PART_MAIN);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.border}), LV_PART_INDICATOR);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.text}), LV_PART_KNOB);`)
  lines.push(``)
  break
}

      case 'Checkbox': {
  const text = esc(
    child.props.children ||
      child.props.text ||
      child.props.label ||
      'Checkbox'
  )

  const checked = Boolean(child.props.isChecked)

  lines.push(`lv_obj_t * ${varName} = lv_checkbox_create(${parentVar});`)
  lines.push(`lv_checkbox_set_text(${varName}, "${text}");`)
  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)

  if (checked) {
    lines.push(`lv_obj_add_state(${varName}, LV_STATE_CHECKED);`)
  }

  lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), LV_PART_MAIN);`)
  lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), LV_PART_INDICATOR);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), LV_PART_INDICATOR);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.accent}), LV_PART_INDICATOR | LV_STATE_CHECKED);`)
  lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), LV_PART_INDICATOR | LV_STATE_CHECKED);`)
  lines.push(``)
  break
}

        case 'Radio': {
  const text = esc(
    child.props.children ||
      child.props.text ||
      child.props.label ||
      'Radio'
  )

  const checked = Boolean(child.props.isChecked)

  lines.push(`lv_obj_t * ${varName} = lv_checkbox_create(${parentVar});`)
  lines.push(`lv_checkbox_set_text(${varName}, "${text}");`)
  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)

  if (checked) {
    lines.push(`lv_obj_add_state(${varName}, LV_STATE_CHECKED);`)
  }

  lines.push(`lv_obj_set_style_radius(${varName}, LV_RADIUS_CIRCLE, LV_PART_INDICATOR);`)

  lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), LV_PART_MAIN);`)

  lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), LV_PART_INDICATOR);`)

  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), LV_PART_INDICATOR);`)

  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.accent}), LV_PART_INDICATOR | LV_STATE_CHECKED);`)

  lines.push(``)
  break
}         
        
      case 'NumberInput': {
        const text = esc(String(child.props.value || '123'))

        lines.push(`lv_obj_t * ${varName} = lv_textarea_create(${parentVar});`)
        lines.push(`lv_textarea_set_one_line(${varName}, true);`)
        lines.push(`lv_textarea_set_text(${varName}, "${text}");`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), 0);`)
        lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), 0);`)
        lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), 0);`)
        lines.push(``)
        break
      }

      case 'Select': {
  lines.push(`lv_obj_t * ${varName} = lv_dropdown_create(${parentVar});`)
  lines.push(`lv_dropdown_set_options(${varName}, "Option 1\\nOption 2\\nOption 3");`)
  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
  lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)

  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), 0);`)
  lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), 0);`)
  lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), 0);`)
  lines.push(`lv_obj_set_style_border_width(${varName}, 2, 0);`)

  lines.push(``)
  break
}

case 'Image': {
  const src = child.props.src || ''
  const uploadedAssets = forgeUIGetUploadedAssets()

  console.log('LVGL EXPORT IMAGE DEBUG', {
  src,
  alt: child.props.alt,
  assetName: child.props.assetName,
  uploadedAssets,
})

  const presetAsset = FORGEUI_IMAGE_ASSETS.find(
    (a: any) => a.src === src
  )

  const uploadedAsset = uploadedAssets.find((a: any) =>
  a.id === child.props.uploadedAssetId ||
  a.browserSrc === src ||
  a.browserSrc === child.props.src ||
  a.name === child.props.assetName ||
  a.name === child.props.alt
)

  const asset: any = presetAsset || uploadedAsset

  if (asset?.lvgl || asset?.symbolName) {
    const symbol = asset.lvgl || asset.symbolName
    const cFile = asset.cFile || asset.assetSource

    if (cFile) {
      usedAssetSources.add(cFile)
    }

    const imageScale = Number(child.props.imageScale || 256)

    lines.push(`LV_IMAGE_DECLARE(${symbol});`)
    lines.push(`lv_obj_t * ${varName} = lv_image_create(${parentVar});`)
    lines.push(`lv_image_set_src(${varName}, &${symbol});`)
    lines.push(`lv_image_set_scale(${varName}, ${imageScale});`)
  } else {
    const uploadName = esc(
      child.props.alt ||
      child.props.assetName ||
      'Uploaded Asset'
    )

    lines.push(`lv_obj_t * ${varName} = lv_button_create(${parentVar});`)
    lines.push(`lv_obj_set_style_radius(${varName}, 12, 0);`)
    lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), 0);`)
    lines.push(`lv_obj_set_style_bg_opa(${varName}, LV_OPA_COVER, 0);`)
    lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), 0);`)
    lines.push(`lv_obj_set_style_border_width(${varName}, 2, 0);`)

    lines.push(`lv_obj_t * ${varName}_label = lv_label_create(${varName});`)
    lines.push(`lv_label_set_text(${varName}_label, "${uploadName}\\nPending LVGL Export");`)
    lines.push(`lv_obj_set_style_text_color(${varName}_label, lv_color_hex(${palette.text}), 0);`)
    lines.push(`lv_obj_set_style_text_align(${varName}_label, LV_TEXT_ALIGN_CENTER, 0);`)
    lines.push(`lv_obj_center(${varName}_label);`)
  }

  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
  lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)

  lines.push(`lv_obj_add_flag(${varName}, LV_OBJ_FLAG_CLICKABLE);`)
  lines.push(`lv_obj_set_style_transform_pivot_x(${varName}, ${Math.floor(w / 2)}, 0);`)
  lines.push(`lv_obj_set_style_transform_pivot_y(${varName}, ${Math.floor(h / 2)}, 0);`)
  lines.push(`lv_obj_set_style_transform_scale(${varName}, 256, 0);`)
  lines.push(`lv_obj_set_style_transform_scale(${varName}, 235, LV_STATE_PRESSED);`)

  lines.push(``)
  break
}
    
case 'Slider': {
  lines.push(`lv_obj_t * ${varName} = lv_slider_create(${parentVar});`)
  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
  lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
  lines.push(`lv_slider_set_value(${varName}, ${lv(child.props.value, 50)}, LV_ANIM_OFF);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), LV_PART_MAIN);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.border}), LV_PART_INDICATOR);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.text}), LV_PART_KNOB);`)
  lines.push(``)
  break
}

case 'Progress': {
  lines.push(`lv_obj_t * ${varName} = lv_bar_create(${parentVar});`)
  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
  lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
  lines.push(`lv_bar_set_range(${varName}, 0, 100);`)
  lines.push(`lv_bar_set_value(${varName}, ${lv(child.props.value, 65)}, LV_ANIM_OFF);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), LV_PART_MAIN);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.border}), LV_PART_INDICATOR);`)
  lines.push(``)
  break
}

case 'CircularProgress': {
  lines.push(`lv_obj_t * ${varName} = lv_arc_create(${parentVar});`)
  lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
  lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
  lines.push(`lv_arc_set_range(${varName}, 0, 100);`)
  lines.push(`lv_arc_set_value(${varName}, ${lv(child.props.value, 65)});`)
  lines.push(`lv_obj_set_style_arc_color(${varName}, lv_color_hex(${palette.surface}), LV_PART_MAIN);`)
  lines.push(`lv_obj_set_style_arc_color(${varName}, lv_color_hex(${palette.border}), LV_PART_INDICATOR);`)
  lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.bg}), LV_PART_KNOB);`)
  lines.push(``)
  break
}

      case 'Box':
        lines.push(`lv_obj_t * ${varName} = lv_obj_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_obj_set_style_radius(${varName}, 12, 0);`)
        lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), 0);`)
        lines.push(`lv_obj_set_style_bg_opa(${varName}, LV_OPA_80, 0);`)
        lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), 0);`)
        lines.push(`lv_obj_set_style_border_width(${varName}, 2, 0);`)
        lines.push(``)
        break

        default:
        break
    }

        if (child.children?.length) {
      buildLvglBlock(
        child,
        components,
        varName,
        lines,
        counter,
        palette,
        usedAssetSources
      )
    }
  })
}

export const generateForgeUILvglCode = (
  components: IComponents,
  themeId: string = 'graphite',
) => {
  const lines: string[] = []
  const usedAssetSources = new Set<string>()

  const previewPalette =
  FG_PREVIEW_PALETTES[themeId as ForgeThemeId] ||
  FG_PREVIEW_PALETTES.graphite

const fullscreenTextures = new Set([
  'ai_mesh',
  'ai_nexus',
  'creation',
  'nebula_core',
  'neon_horizon',
  'neural_core',
  'quantum_flow',
  'quantum_hex',
])

const textureId = previewPalette.texture

const palette = {
  ...previewPalette,

  bg: toLvHex(previewPalette.bg),
  surface: toLvHex(previewPalette.surface),
  surface2: toLvHex(previewPalette.surface2),

  border: toLvHex(previewPalette.border),

  text: toLvHex(previewPalette.text),

  accent: toLvHex(previewPalette.accent),

  textureAsset:
    textureId !== 'none'
      ? FG_TEXTURE_ASSETS[textureId]
      : undefined,

  textureMode: fullscreenTextures.has(textureId)
    ? 'fullscreen'
    : 'tile',
}


  lines.push(`#include "90_Studio_Export.h"`)
  lines.push(`#include "lvgl.h"`)
  lines.push(``)
  lines.push(`// ForgeUI LVGL Export Proof V1`)
  lines.push(`// Generated from ForgeUI Studio`)
  lines.push(``)
  lines.push(`void fg_studio_export_create(lv_obj_t *parent)`)
  lines.push(`{`)
  lines.push(`    // Background flavour: ${palette.name}`)
  lines.push(`    lv_obj_set_style_bg_color(lv_screen_active(), lv_color_hex(${palette.bg}), 0);`)
  lines.push(`    lv_obj_set_style_bg_opa(lv_screen_active(), LV_OPA_COVER, 0);`)
  lines.push(`    lv_obj_set_style_bg_color(parent, lv_color_hex(${palette.bg}), 0);`)
  lines.push(`    lv_obj_set_style_bg_opa(parent, LV_OPA_COVER, 0);`)
  lines.push(``)

  if (
  palette.textureAsset?.source &&
  palette.textureAsset?.symbol
) {
  usedAssetSources.add(palette.textureAsset.source)

  lines.push(`    LV_IMAGE_DECLARE(${palette.textureAsset.symbol});`)

if (palette.textureMode === 'fullscreen') {
  lines.push(`    lv_obj_t * bg_texture_0 = lv_image_create(parent);`)
  lines.push(`    lv_image_set_src(bg_texture_0, &${palette.textureAsset.symbol});`)
  lines.push(`    lv_obj_set_pos(bg_texture_0, 0, 0);`)
  lines.push(`    lv_obj_set_size(bg_texture_0, 1024, 600);`)
} else {
  lines.push(`    lv_obj_t * bg_texture_0 = lv_image_create(parent);`)
  lines.push(`    lv_image_set_src(bg_texture_0, &${palette.textureAsset.symbol});`)
  lines.push(`    lv_obj_set_pos(bg_texture_0, 0, 0);`)

  lines.push(`    lv_obj_t * bg_texture_1 = lv_image_create(parent);`)
  lines.push(`    lv_image_set_src(bg_texture_1, &${palette.textureAsset.symbol});`)
  lines.push(`    lv_obj_set_pos(bg_texture_1, 512, 0);`)

  lines.push(`    lv_obj_t * bg_texture_2 = lv_image_create(parent);`)
  lines.push(`    lv_image_set_src(bg_texture_2, &${palette.textureAsset.symbol});`)
  lines.push(`    lv_obj_set_pos(bg_texture_2, 0, 512);`)

  lines.push(`    lv_obj_t * bg_texture_3 = lv_image_create(parent);`)
  lines.push(`    lv_image_set_src(bg_texture_3, &${palette.textureAsset.symbol});`)
  lines.push(`    lv_obj_set_pos(bg_texture_3, 512, 512);`)
}

lines.push(``)
}

  const body: string[] = []

  const root =
    components.root ||
    Object.values(components).find((c: any) => c.parent === c.id) ||
    Object.values(components)[0]

  if (root) {
    buildLvglBlock(
      root,
      components,
      'parent',
      body,
      { value: 0 },
      palette,
      usedAssetSources
    )
  }

  body.forEach(line => {
    lines.push(line ? `    ${line}` : ``)
  })

  lines.push(`}`)

  return {
    code: lines.join('\n'),
    assetSources: Array.from(usedAssetSources),
  }
}
