// const ACTIVE_BACKGROUND_FLAVOUR = 'reactor_dark'
// const ACTIVE_BACKGROUND_FLAVOUR = 'nordic_blue'
const ACTIVE_BACKGROUND_FLAVOUR = 'graphite'

const FG_PALETTES: Record<string, any> = {
  reactor_dark: {
    name: 'Reactor Dark',
    bg: '0x08111F',
    surface: '0x101B2B',
    border: '0x42E8FF',
    text: '0xFFFFFF',
  },

  graphite: {
    name: 'Carbon Graphite',
    bg: '0x121417',
    surface: '0x1E2328',
    border: '0xF2A900',
    text: '0xF5F5F5',
  },

  nordic_blue: {
    name: 'Nordic Blue',
    bg: '0xDDE7EF',
    surface: '0xF4F8FB',
    border: '0x1B6CA8',
    text: '0x102030',
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
  palette: any
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
        lines.push(`lv_obj_t * ${varName} = lv_switch_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
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

        lines.push(`lv_obj_t * ${varName} = lv_checkbox_create(${parentVar});`)
        lines.push(`lv_checkbox_set_text(${varName}, "${text}");`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), 0);`)
        lines.push(``)
        break
      }

            case 'Slider': {
        lines.push(`lv_obj_t * ${varName} = lv_slider_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_slider_set_value(${varName}, ${lv(child.props.value, 50)}, LV_ANIM_OFF);`)
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

        lines.push(`lv_obj_t * ${varName} = lv_checkbox_create(${parentVar});`)
        lines.push(`lv_checkbox_set_text(${varName}, "${text}");`)
        lines.push(`lv_obj_add_state(${varName}, LV_STATE_CHECKED);`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_style_text_color(${varName}, lv_color_hex(${palette.text}), 0);`)
        lines.push(``)
        break
      }

      case 'Progress': {
        lines.push(`lv_obj_t * ${varName} = lv_bar_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_bar_set_range(${varName}, 0, 100);`)
        lines.push(`lv_bar_set_value(${varName}, ${lv(child.props.value, 65)}, LV_ANIM_OFF);`)
        lines.push(``)
        break
      }

            case 'CircularProgress': {
        lines.push(`lv_obj_t * ${varName} = lv_arc_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_arc_set_range(${varName}, 0, 100);`)
        lines.push(`lv_arc_set_value(${varName}, ${lv(child.props.value, 65)});`)
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
        lines.push(``)
        break
      }

      case 'Image': {
        lines.push(`lv_obj_t * ${varName} = lv_obj_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_obj_set_style_bg_color(${varName}, lv_color_hex(${palette.surface}), 0);`)
        lines.push(`lv_obj_set_style_border_color(${varName}, lv_color_hex(${palette.border}), 0);`)
        lines.push(`lv_obj_set_style_border_width(${varName}, 2, 0);`)
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

      case 'Progress':
        lines.push(`lv_obj_t * ${varName} = lv_bar_create(${parentVar});`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(`lv_obj_set_size(${varName}, ${w}, ${h});`)
        lines.push(`lv_bar_set_value(${varName}, ${lv(child.props.value, 65)}, LV_ANIM_OFF);`)
        lines.push(``)
        break

      case 'Radio':
        lines.push(`lv_obj_t * ${varName} = lv_checkbox_create(${parentVar});`)
        lines.push(`lv_checkbox_set_text(${varName}, "${esc(child.props.children || 'Radio')}");`)
        lines.push(`lv_obj_set_pos(${varName}, ${x}, ${y});`)
        lines.push(``)
        break

      default:
        break
    }

    if (child.children?.length) {
      buildLvglBlock(child, components, varName, lines, counter, palette)
    }
  })
}

export const generateForgeUILvglCode = (components: IComponents) => {
  const lines: string[] = []
  const palette =
    FG_PALETTES[ACTIVE_BACKGROUND_FLAVOUR] || FG_PALETTES.reactor_dark

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

  const body: string[] = []

  const root =
    components.root ||
    Object.values(components).find((c: any) => c.parent === c.id) ||
    Object.values(components)[0]

  if (root) {
    buildLvglBlock(root, components, 'parent', body, { value: 0 }, palette)
  }

  body.forEach(line => {
    lines.push(line ? `    ${line}` : ``)
  })

  lines.push(`}`)

  return lines.join('\n')
}