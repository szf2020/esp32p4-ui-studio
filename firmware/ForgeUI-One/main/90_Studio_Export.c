#include "90_Studio_Export.h"
#include "lvgl.h"

// ForgeUI LVGL Export Proof V1
// Generated from ForgeUI Studio

void fg_studio_export_create(lv_obj_t *parent)
{
    // Background flavour: Industrial Carbon
    lv_obj_set_style_bg_color(lv_screen_active(), lv_color_hex(0x121417), 0);
    lv_obj_set_style_bg_opa(lv_screen_active(), LV_OPA_COVER, 0);
    lv_obj_set_style_bg_color(parent, lv_color_hex(0x121417), 0);
    lv_obj_set_style_bg_opa(parent, LV_OPA_COVER, 0);

    LV_IMAGE_DECLARE(fg_upload_carbon_fiber_be774fd2);
    lv_obj_t * bg_texture_0 = lv_image_create(parent);
    lv_image_set_src(bg_texture_0, &fg_upload_carbon_fiber_be774fd2);
    lv_obj_set_pos(bg_texture_0, 0, 0);
    lv_obj_t * bg_texture_1 = lv_image_create(parent);
    lv_image_set_src(bg_texture_1, &fg_upload_carbon_fiber_be774fd2);
    lv_obj_set_pos(bg_texture_1, 512, 0);
    lv_obj_t * bg_texture_2 = lv_image_create(parent);
    lv_image_set_src(bg_texture_2, &fg_upload_carbon_fiber_be774fd2);
    lv_obj_set_pos(bg_texture_2, 0, 512);
    lv_obj_t * bg_texture_3 = lv_image_create(parent);
    lv_image_set_src(bg_texture_3, &fg_upload_carbon_fiber_be774fd2);
    lv_obj_set_pos(bg_texture_3, 512, 512);

    lv_obj_t * obj1 = lv_scale_create(parent);
    lv_obj_set_pos(obj1, 4, 1);
    lv_obj_set_size(obj1, 452, 112);
    lv_scale_set_mode(obj1, LV_SCALE_MODE_HORIZONTAL_BOTTOM);
    lv_scale_set_range(obj1, 0, 100);
    lv_scale_set_total_tick_count(obj1, 11);
    lv_scale_set_major_tick_every(obj1, 2);

    lv_obj_t * obj2 = lv_roller_create(parent);
    lv_roller_set_options(obj2, "One\nTwo\nThree\nFour", LV_ROLLER_MODE_NORMAL);
    lv_roller_set_visible_row_count(obj2, 3);
    lv_obj_set_pos(obj2, 0, 111);
    lv_obj_set_size(obj2, 397, 162);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0x1E2328), LV_PART_MAIN);
    lv_obj_set_style_text_color(obj2, lv_color_hex(0xF5F5F5), LV_PART_MAIN);
    lv_obj_set_style_border_color(obj2, lv_color_hex(0xF2A900), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj2, lv_color_hex(0xF2A900), LV_PART_SELECTED);
    lv_obj_set_style_text_color(obj2, lv_color_hex(0x121417), LV_PART_SELECTED);

    lv_obj_t * obj3 = lv_msgbox_create(NULL);
    lv_obj_set_size(obj3, 398, 147);
    lv_obj_set_pos(obj3, 83, 274);
    lv_obj_set_parent(obj3, parent);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0x1E2328), LV_PART_MAIN);
    lv_obj_set_style_text_color(obj3, lv_color_hex(0xF5F5F5), LV_PART_MAIN);
    lv_obj_set_style_border_color(obj3, lv_color_hex(0xF2A900), LV_PART_MAIN);

}