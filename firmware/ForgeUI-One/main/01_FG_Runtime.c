// ============================================================
// ForgeUI Studio Firmware Runtime
// ============================================================
//
// Firmware owns:
// - LVGL screen boot
// - hardware runtime
// - generated UI launch
//
// Studio owns:
// - UI layout
// - colours
// - widgets
// - screen content
//
// ============================================================

#include "01_FG_Runtime.h"

#include "lvgl.h"
#include "90_Studio_Export.h"

void fg_runtime_init(void)
{
    lv_obj_t *scr = lv_screen_active();

    if (!scr) {
        return;
    }

    lv_obj_clean(scr);
    lv_obj_clear_flag(scr, LV_OBJ_FLAG_SCROLLABLE);

    lv_obj_set_style_bg_color(scr, lv_color_hex(0x000000), 0);
    lv_obj_set_style_bg_opa(scr, LV_OPA_COVER, 0);

    fg_studio_export_create(scr);
}