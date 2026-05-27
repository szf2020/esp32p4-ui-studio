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

    lv_obj_t * obj1 = lv_button_create(parent);
    lv_obj_set_pos(obj1, 10, 7);
    lv_obj_set_size(obj1, 132, 66);
    lv_obj_set_style_radius(obj1, 12, 0);
    lv_obj_set_style_bg_color(obj1, lv_color_hex(0x1E2328), 0);
    lv_obj_set_style_bg_opa(obj1, LV_OPA_COVER, 0);
    lv_obj_set_style_border_color(obj1, lv_color_hex(0xF2A900), 0);
    lv_obj_set_style_border_width(obj1, 2, 0);
    lv_obj_t * obj1_label = lv_label_create(obj1);
    lv_label_set_text(obj1_label, "Button");
    lv_obj_set_style_text_color(obj1_label, lv_color_hex(0xF5F5F5), 0);
    lv_obj_center(obj1_label);

    lv_obj_t * obj2 = lv_label_create(parent);
    lv_label_set_text(obj2, "Text");
    lv_obj_set_pos(obj2, 5, 81);
    lv_obj_set_style_text_color(obj2, lv_color_hex(0xF5F5F5), 0);
    lv_obj_set_style_text_font(obj2, &lv_font_montserrat_24, 0);

    lv_obj_t * obj3 = lv_textarea_create(parent);
    lv_textarea_set_one_line(obj3, true);
    lv_textarea_set_placeholder_text(obj3, "Input");
    lv_obj_set_pos(obj3, 0, 135);
    lv_obj_set_size(obj3, 117, 75);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0x1E2328), 0);
    lv_obj_set_style_text_color(obj3, lv_color_hex(0xF5F5F5), 0);
    lv_obj_set_style_border_color(obj3, lv_color_hex(0xF2A900), 0);

    lv_obj_t * obj4 = lv_textarea_create(parent);
    lv_textarea_set_placeholder_text(obj4, "Textarea");
    lv_obj_set_pos(obj4, 18, 234);
    lv_obj_set_size(obj4, 158, 98);
    lv_obj_set_style_bg_color(obj4, lv_color_hex(0x1E2328), 0);
    lv_obj_set_style_text_color(obj4, lv_color_hex(0xF5F5F5), 0);
    lv_obj_set_style_border_color(obj4, lv_color_hex(0xF2A900), 0);

    lv_obj_t * obj5 = lv_switch_create(parent);
    lv_obj_set_pos(obj5, 17.999969482421875, 356);
    lv_obj_set_size(obj5, 132, 83);

    lv_obj_t * obj6 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj6, "Label checkbox");
    lv_obj_set_pos(obj6, 0, 430);
    lv_obj_set_style_text_color(obj6, lv_color_hex(0xF5F5F5), 0);

    lv_obj_t * obj7 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj7, "Label checkbox");
    lv_obj_set_pos(obj7, 182, 9);
    lv_obj_set_style_text_color(obj7, lv_color_hex(0xF5F5F5), 0);

    lv_obj_t * obj8 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj8, "Radio");
    lv_obj_add_state(obj8, LV_STATE_CHECKED);
    lv_obj_set_pos(obj8, 241, 143);
    lv_obj_set_style_text_color(obj8, lv_color_hex(0xF5F5F5), 0);

    lv_obj_t * obj9 = lv_slider_create(parent);
    lv_obj_set_pos(obj9, 210, 496);
    lv_obj_set_size(obj9, 202, 85);
    lv_slider_set_value(obj9, 50, LV_ANIM_OFF);

    lv_obj_t * obj10 = lv_bar_create(parent);
    lv_obj_set_pos(obj10, 476, 475);
    lv_obj_set_size(obj10, 487, 120);
    lv_bar_set_range(obj10, 0, 100);
    lv_bar_set_value(obj10, 60, LV_ANIM_OFF);

    lv_obj_t * obj11 = lv_arc_create(parent);
    lv_obj_set_pos(obj11, 344, 306.9999694824219);
    lv_obj_set_size(obj11, 195, 131);
    lv_arc_set_range(obj11, 0, 100);
    lv_arc_set_value(obj11, 60);

    lv_obj_t * obj12 = lv_textarea_create(parent);
    lv_textarea_set_one_line(obj12, true);
    lv_textarea_set_text(obj12, "123");
    lv_obj_set_pos(obj12, 635, 27);
    lv_obj_set_size(obj12, 240, 120);
    lv_obj_set_style_bg_color(obj12, lv_color_hex(0x1E2328), 0);
    lv_obj_set_style_text_color(obj12, lv_color_hex(0xF5F5F5), 0);
    lv_obj_set_style_border_color(obj12, lv_color_hex(0xF2A900), 0);

    lv_obj_t * obj13 = lv_dropdown_create(parent);
    lv_dropdown_set_options(obj13, "Option 1\nOption 2\nOption 3");
    lv_obj_set_pos(obj13, 700, 175);
    lv_obj_set_size(obj13, 205, 83);

    lv_obj_t * obj14 = lv_textarea_create(parent);
    lv_textarea_set_one_line(obj14, true);
    lv_textarea_set_text(obj14, "123");
    lv_obj_set_pos(obj14, 417, 45);
    lv_obj_set_size(obj14, 146, 89);
    lv_obj_set_style_bg_color(obj14, lv_color_hex(0x1E2328), 0);
    lv_obj_set_style_text_color(obj14, lv_color_hex(0xF5F5F5), 0);
    lv_obj_set_style_border_color(obj14, lv_color_hex(0xF2A900), 0);

    lv_obj_t * obj15 = lv_dropdown_create(parent);
    lv_dropdown_set_options(obj15, "Option 1\nOption 2\nOption 3");
    lv_obj_set_pos(obj15, 416, 157);
    lv_obj_set_size(obj15, 174, 94);

    lv_obj_t * obj16 = lv_obj_create(parent);
    lv_obj_set_pos(obj16, 654, 291);
    lv_obj_set_size(obj16, 286, 153);
    lv_obj_set_style_bg_color(obj16, lv_color_hex(0x1E2328), 0);
    lv_obj_set_style_border_color(obj16, lv_color_hex(0xF2A900), 0);
    lv_obj_set_style_border_width(obj16, 2, 0);

    lv_obj_t * obj17 = lv_obj_create(parent);
    lv_obj_set_pos(obj17, 158, 382);
    lv_obj_set_size(obj17, 161, 64);
    lv_obj_set_style_radius(obj17, 12, 0);
    lv_obj_set_style_bg_color(obj17, lv_color_hex(0x1E2328), 0);
    lv_obj_set_style_bg_opa(obj17, LV_OPA_80, 0);
    lv_obj_set_style_border_color(obj17, lv_color_hex(0xF2A900), 0);
    lv_obj_set_style_border_width(obj17, 2, 0);

}