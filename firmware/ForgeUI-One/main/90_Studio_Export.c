#include "90_Studio_Export.h"
#include "lvgl.h"

// ForgeUI LVGL Export Proof V1
// Generated from ForgeUI Studio

void fg_studio_export_create(lv_obj_t *parent)
{
    // Background flavour: Carbon Graphite
    lv_obj_set_style_bg_color(lv_screen_active(), lv_color_hex(0x121417), 0);
    lv_obj_set_style_bg_opa(lv_screen_active(), LV_OPA_COVER, 0);
    lv_obj_set_style_bg_color(parent, lv_color_hex(0x121417), 0);
    lv_obj_set_style_bg_opa(parent, LV_OPA_COVER, 0);

    lv_obj_t * obj1 = lv_label_create(parent);
    lv_label_set_text(obj1, "Text value2");
    lv_obj_set_pos(obj1, 369, 178);
    lv_obj_set_style_text_color(obj1, lv_color_hex(0xF5F5F5), 0);
    lv_obj_set_style_text_font(obj1, &lv_font_montserrat_24, 0);

}