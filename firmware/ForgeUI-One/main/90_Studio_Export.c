#include "90_Studio_Export.h"
#include "lvgl.h"

// ForgeUI LVGL Export Proof V1
// Generated from ForgeUI Studio

void fg_studio_export_create(lv_obj_t *parent)
{
    // Background flavour: Nordic Blue
    lv_obj_set_style_bg_color(lv_screen_active(), lv_color_hex(0xDDE7EF), 0);
    lv_obj_set_style_bg_opa(lv_screen_active(), LV_OPA_COVER, 0);
    lv_obj_set_style_bg_color(parent, lv_color_hex(0xDDE7EF), 0);
    lv_obj_set_style_bg_opa(parent, LV_OPA_COVER, 0);

    LV_IMAGE_DECLARE(fg_icon_about_48px);
    lv_obj_t * obj1 = lv_image_create(parent);
    lv_image_set_src(obj1, &fg_icon_about_48px);
    lv_obj_set_pos(obj1, 392, 218);
    lv_obj_set_size(obj1, 362, 242);
    lv_obj_add_flag(obj1, LV_OBJ_FLAG_CLICKABLE);
    lv_obj_set_style_transform_pivot_x(obj1, 181, 0);
    lv_obj_set_style_transform_pivot_y(obj1, 121, 0);
    lv_obj_set_style_transform_scale(obj1, 256, 0);
    lv_obj_set_style_transform_scale(obj1, 235, LV_STATE_PRESSED);

    lv_obj_t * obj2 = lv_label_create(parent);
    lv_label_set_text(obj2, "Scotty");
    lv_obj_set_pos(obj2, 68, 240);
    lv_obj_set_style_text_color(obj2, lv_color_hex(0x102030), 0);
    lv_obj_set_style_text_font(obj2, &lv_font_montserrat_24, 0);

    lv_obj_t * obj3 = lv_switch_create(parent);
    lv_obj_set_pos(obj3, 354, 62);
    lv_obj_set_size(obj3, 158, 91);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0xF4F8FB), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0x1B6CA8), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0x102030), LV_PART_KNOB);

}