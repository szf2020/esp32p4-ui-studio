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

    lv_obj_t * obj1 = lv_label_create(parent);
    lv_label_set_text(obj1, "12:34");
    lv_obj_set_pos(obj1, 24.999969482421875, 5);
    lv_obj_set_size(obj1, 233, 82);
    lv_obj_set_style_text_color(obj1, lv_color_hex(0x00D4FF), 0);
    lv_obj_set_style_text_font(obj1, &lv_font_montserrat_32, 0);

}