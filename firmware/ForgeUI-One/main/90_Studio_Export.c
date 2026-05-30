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

    lv_obj_t * obj1 = lv_obj_create(parent);
    lv_obj_set_pos(obj1, 111, 56);
    lv_obj_set_size(obj1, 334, 213);
    lv_obj_add_flag(obj1, LV_OBJ_FLAG_CLICKABLE);
    lv_obj_set_style_transform_pivot_x(obj1, 167, 0);
    lv_obj_set_style_transform_pivot_y(obj1, 106, 0);
    lv_obj_set_style_transform_scale(obj1, 256, 0);
    lv_obj_set_style_transform_scale(obj1, 235, LV_STATE_PRESSED);

}