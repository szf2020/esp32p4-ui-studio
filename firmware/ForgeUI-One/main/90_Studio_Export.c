#include "90_Studio_Export.h"
#include "lvgl.h"

// ForgeUI LVGL Export Proof V1
// Generated from ForgeUI Studio

void fg_studio_export_create(lv_obj_t *parent)
{
    // Background flavour: Cyber Teal
    lv_obj_set_style_bg_color(lv_screen_active(), lv_color_hex(0x071A1D), 0);
    lv_obj_set_style_bg_opa(lv_screen_active(), LV_OPA_COVER, 0);
    lv_obj_set_style_bg_color(parent, lv_color_hex(0x071A1D), 0);
    lv_obj_set_style_bg_opa(parent, LV_OPA_COVER, 0);

    LV_IMAGE_DECLARE(fg_upload_fg_icon_brightness_48px_ca0bb0cb);
    lv_obj_t * obj1 = lv_image_create(parent);
    lv_image_set_src(obj1, &fg_upload_fg_icon_brightness_48px_ca0bb0cb);
    lv_image_set_scale(obj1, 256);
    lv_obj_set_pos(obj1, 148, 174);
    lv_obj_set_size(obj1, 240, 120);
    lv_obj_add_flag(obj1, LV_OBJ_FLAG_CLICKABLE);
    lv_obj_set_style_transform_pivot_x(obj1, 120, 0);
    lv_obj_set_style_transform_pivot_y(obj1, 60, 0);
    lv_obj_set_style_transform_scale(obj1, 256, 0);
    lv_obj_set_style_transform_scale(obj1, 235, LV_STATE_PRESSED);

    lv_obj_t * obj2 = lv_slider_create(parent);
    lv_obj_set_pos(obj2, 292, 394);
    lv_obj_set_size(obj2, 376, 82);
    lv_slider_set_value(obj2, 50, LV_ANIM_OFF);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0x0F2A30), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0x14B8A6), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0xCCFBF1), LV_PART_KNOB);

}