#include "90_Studio_Export.h"
#include "lvgl.h"

// ForgeUI LVGL Export Proof V1
// Generated from ForgeUI Studio

void fg_studio_export_create(lv_obj_t *parent)
{
    // Background flavour: Neon Horizon
    lv_obj_set_style_bg_color(lv_screen_active(), lv_color_hex(0x0B1020), 0);
    lv_obj_set_style_bg_opa(lv_screen_active(), LV_OPA_COVER, 0);
    lv_obj_set_style_bg_color(parent, lv_color_hex(0x0B1020), 0);
    lv_obj_set_style_bg_opa(parent, LV_OPA_COVER, 0);

    LV_IMAGE_DECLARE(fg_upload_1024x600_neon_horizon_6dae04db);
    lv_obj_t * bg_texture_0 = lv_image_create(parent);
    lv_image_set_src(bg_texture_0, &fg_upload_1024x600_neon_horizon_6dae04db);
    lv_obj_set_pos(bg_texture_0, 0, 0);
    lv_obj_set_size(bg_texture_0, 1024, 600);

    lv_obj_t * obj1 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj1, "Label checkbox");
    lv_obj_set_pos(obj1, 0, 12);
    lv_obj_set_style_text_color(obj1, lv_color_hex(0xFFFFFF), LV_PART_MAIN);
    lv_obj_set_style_border_color(obj1, lv_color_hex(0xFF4FD8), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj1, lv_color_hex(0x131A2E), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj1, lv_color_hex(0x7C4DFF), LV_PART_INDICATOR | LV_STATE_CHECKED);
    lv_obj_set_style_text_color(obj1, lv_color_hex(0xFFFFFF), LV_PART_INDICATOR | LV_STATE_CHECKED);

    lv_obj_t * obj2 = lv_slider_create(parent);
    lv_obj_set_pos(obj2, 419, 38);
    lv_obj_set_size(obj2, 490, 93);
    lv_slider_set_value(obj2, 50, LV_ANIM_OFF);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0x131A2E), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0xFF4FD8), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0xFFFFFF), LV_PART_KNOB);

    lv_obj_t * obj3 = lv_obj_create(parent);
    lv_obj_set_pos(obj3, 759, 179);
    lv_obj_set_size(obj3, 172, 75);
    lv_obj_set_style_radius(obj3, 12, 0);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0x131A2E), 0);
    lv_obj_set_style_bg_opa(obj3, LV_OPA_80, 0);
    lv_obj_set_style_border_color(obj3, lv_color_hex(0xFF4FD8), 0);
    lv_obj_set_style_border_width(obj3, 2, 0);

    lv_obj_t * obj4 = lv_switch_create(parent);
    lv_obj_set_pos(obj4, 131.99996948242188, 391);
    lv_obj_set_size(obj4, 205, 101);
    lv_obj_set_style_bg_color(obj4, lv_color_hex(0x131A2E), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj4, lv_color_hex(0xFF4FD8), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj4, lv_color_hex(0xFFFFFF), LV_PART_KNOB);

    lv_obj_t * obj5 = lv_bar_create(parent);
    lv_obj_set_pos(obj5, 476, 415);
    lv_obj_set_size(obj5, 468, 83);
    lv_bar_set_range(obj5, 0, 100);
    lv_bar_set_value(obj5, 60, LV_ANIM_OFF);
    lv_obj_set_style_bg_color(obj5, lv_color_hex(0x131A2E), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj5, lv_color_hex(0xFF4FD8), LV_PART_INDICATOR);

}