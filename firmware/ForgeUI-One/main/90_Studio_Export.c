#include "90_Studio_Export.h"
#include "lvgl.h"

// ForgeUI LVGL Export Proof V1
// Generated from ForgeUI Studio

void fg_studio_export_create(lv_obj_t *parent)
{
    // Background flavour: Neural Core
    lv_obj_set_style_bg_color(lv_screen_active(), lv_color_hex(0x05030A), 0);
    lv_obj_set_style_bg_opa(lv_screen_active(), LV_OPA_COVER, 0);
    lv_obj_set_style_bg_color(parent, lv_color_hex(0x05030A), 0);
    lv_obj_set_style_bg_opa(parent, LV_OPA_COVER, 0);

    LV_IMAGE_DECLARE(fg_upload_1024x600_neural_core_67dd4ba0);
    lv_obj_t * bg_texture_0 = lv_image_create(parent);
    lv_image_set_src(bg_texture_0, &fg_upload_1024x600_neural_core_67dd4ba0);
    lv_obj_set_pos(bg_texture_0, 0, 0);
    lv_obj_set_size(bg_texture_0, 1024, 600);

    lv_obj_t * obj1 = lv_bar_create(parent);
    lv_obj_set_pos(obj1, 600, 367);
    lv_obj_set_size(obj1, 407, 72);
    lv_bar_set_range(obj1, 0, 100);
    lv_bar_set_value(obj1, 60, LV_ANIM_OFF);
    lv_obj_set_style_bg_color(obj1, lv_color_hex(0x120824), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj1, lv_color_hex(0xD946EF), LV_PART_INDICATOR);

    lv_obj_t * obj2 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj2, "Label checkbox");
    lv_obj_set_pos(obj2, 185, 475);
    lv_obj_set_style_text_color(obj2, lv_color_hex(0xFFFFFF), LV_PART_MAIN);
    lv_obj_set_style_border_color(obj2, lv_color_hex(0xD946EF), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0x120824), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0xC026D3), LV_PART_INDICATOR | LV_STATE_CHECKED);
    lv_obj_set_style_text_color(obj2, lv_color_hex(0xFFFFFF), LV_PART_INDICATOR | LV_STATE_CHECKED);

    lv_obj_t * obj3 = lv_switch_create(parent);
    lv_obj_set_pos(obj3, 52.999969482421875, 52.99998474121094);
    lv_obj_set_size(obj3, 243, 65);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0x120824), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0xD946EF), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0xFFFFFF), LV_PART_KNOB);

    lv_obj_t * obj4 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj4, "Label checkbox");
    lv_obj_set_pos(obj4, 659, 21);
    lv_obj_set_style_text_color(obj4, lv_color_hex(0xFFFFFF), LV_PART_MAIN);
    lv_obj_set_style_border_color(obj4, lv_color_hex(0xD946EF), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj4, lv_color_hex(0x120824), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj4, lv_color_hex(0xC026D3), LV_PART_INDICATOR | LV_STATE_CHECKED);
    lv_obj_set_style_text_color(obj4, lv_color_hex(0xFFFFFF), LV_PART_INDICATOR | LV_STATE_CHECKED);

    lv_obj_t * obj5 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj5, "Radio");
    lv_obj_set_pos(obj5, 658, 185);
    lv_obj_set_style_radius(obj5, LV_RADIUS_CIRCLE, LV_PART_INDICATOR);
    lv_obj_set_style_text_color(obj5, lv_color_hex(0xFFFFFF), LV_PART_MAIN);
    lv_obj_set_style_border_color(obj5, lv_color_hex(0xD946EF), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj5, lv_color_hex(0x120824), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj5, lv_color_hex(0xC026D3), LV_PART_INDICATOR | LV_STATE_CHECKED);

}