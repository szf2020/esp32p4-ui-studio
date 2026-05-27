#include "90_Studio_Export.h"
#include "lvgl.h"

// ForgeUI LVGL Export Proof V1
// Generated from ForgeUI Studio

void fg_studio_export_create(lv_obj_t *parent)
{
    // Background flavour: Matrix Green
    lv_obj_set_style_bg_color(lv_screen_active(), lv_color_hex(0x000A00), 0);
    lv_obj_set_style_bg_opa(lv_screen_active(), LV_OPA_COVER, 0);
    lv_obj_set_style_bg_color(parent, lv_color_hex(0x000A00), 0);
    lv_obj_set_style_bg_opa(parent, LV_OPA_COVER, 0);

    lv_obj_t * obj1 = lv_button_create(parent);
    lv_obj_set_pos(obj1, 25, 9);
    lv_obj_set_size(obj1, 175, 89);
    lv_obj_set_style_radius(obj1, 12, 0);
    lv_obj_set_style_bg_color(obj1, lv_color_hex(0x001A00), 0);
    lv_obj_set_style_bg_opa(obj1, LV_OPA_COVER, 0);
    lv_obj_set_style_border_color(obj1, lv_color_hex(0x00FF66), 0);
    lv_obj_set_style_border_width(obj1, 2, 0);
    lv_obj_t * obj1_label = lv_label_create(obj1);
    lv_label_set_text(obj1_label, "Button text");
    lv_obj_set_style_text_color(obj1_label, lv_color_hex(0xCCFFDD), 0);
    lv_obj_center(obj1_label);

    lv_obj_t * obj2 = lv_label_create(parent);
    lv_label_set_text(obj2, "Text value");
    lv_obj_set_pos(obj2, 26, 102);
    lv_obj_set_style_text_color(obj2, lv_color_hex(0xCCFFDD), 0);
    lv_obj_set_style_text_font(obj2, &lv_font_montserrat_24, 0);

    lv_obj_t * obj3 = lv_textarea_create(parent);
    lv_textarea_set_one_line(obj3, true);
    lv_textarea_set_placeholder_text(obj3, "Input");
    lv_obj_set_pos(obj3, 25, 174);
    lv_obj_set_size(obj3, 171, 88);
    lv_obj_set_style_bg_color(obj3, lv_color_hex(0x001A00), 0);
    lv_obj_set_style_text_color(obj3, lv_color_hex(0xCCFFDD), 0);
    lv_obj_set_style_border_color(obj3, lv_color_hex(0x00FF66), 0);

    lv_obj_t * obj4 = lv_textarea_create(parent);
    lv_textarea_set_placeholder_text(obj4, "Textarea");
    lv_obj_set_pos(obj4, 25, 268);
    lv_obj_set_size(obj4, 171, 93);
    lv_obj_set_style_bg_color(obj4, lv_color_hex(0x001A00), 0);
    lv_obj_set_style_text_color(obj4, lv_color_hex(0xCCFFDD), 0);
    lv_obj_set_style_border_color(obj4, lv_color_hex(0x00FF66), 0);

    lv_obj_t * obj5 = lv_switch_create(parent);
    lv_obj_set_pos(obj5, 26, 366);
    lv_obj_set_size(obj5, 168, 85);
    lv_obj_set_style_bg_color(obj5, lv_color_hex(0x001A00), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj5, lv_color_hex(0x00FF66), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj5, lv_color_hex(0xCCFFDD), LV_PART_KNOB);

    lv_obj_t * obj6 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj6, "Label checkbox");
    lv_obj_set_pos(obj6, 24.999969482421875, 454);
    lv_obj_set_style_text_color(obj6, lv_color_hex(0xCCFFDD), LV_PART_MAIN);
    lv_obj_set_style_border_color(obj6, lv_color_hex(0x00FF66), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj6, lv_color_hex(0x001A00), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj6, lv_color_hex(0x00FF66), LV_PART_INDICATOR | LV_STATE_CHECKED);
    lv_obj_set_style_text_color(obj6, lv_color_hex(0xCCFFDD), LV_PART_INDICATOR | LV_STATE_CHECKED);

    lv_obj_t * obj7 = lv_checkbox_create(parent);
    lv_checkbox_set_text(obj7, "Radio");
    lv_obj_set_pos(obj7, 216, 13);
    lv_obj_set_style_radius(obj7, LV_RADIUS_CIRCLE, LV_PART_INDICATOR);
    lv_obj_set_style_text_color(obj7, lv_color_hex(0xCCFFDD), LV_PART_MAIN);
    lv_obj_set_style_border_color(obj7, lv_color_hex(0x00FF66), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj7, lv_color_hex(0x001A00), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj7, lv_color_hex(0x00FF66), LV_PART_INDICATOR | LV_STATE_CHECKED);

    lv_obj_t * obj8 = lv_slider_create(parent);
    lv_obj_set_pos(obj8, 251, 464);
    lv_obj_set_size(obj8, 374, 89);
    lv_slider_set_value(obj8, 50, LV_ANIM_OFF);
    lv_obj_set_style_bg_color(obj8, lv_color_hex(0x001A00), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj8, lv_color_hex(0x00FF66), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj8, lv_color_hex(0xCCFFDD), LV_PART_KNOB);

    lv_obj_t * obj9 = lv_bar_create(parent);
    lv_obj_set_pos(obj9, 252, 351);
    lv_obj_set_size(obj9, 373, 89);
    lv_bar_set_range(obj9, 0, 100);
    lv_bar_set_value(obj9, 60, LV_ANIM_OFF);
    lv_obj_set_style_bg_color(obj9, lv_color_hex(0x001A00), LV_PART_MAIN);
    lv_obj_set_style_bg_color(obj9, lv_color_hex(0x00FF66), LV_PART_INDICATOR);

    lv_obj_t * obj10 = lv_arc_create(parent);
    lv_obj_set_pos(obj10, 218, 105.99998474121094);
    lv_obj_set_size(obj10, 187, 101);
    lv_arc_set_range(obj10, 0, 100);
    lv_arc_set_value(obj10, 60);
    lv_obj_set_style_arc_color(obj10, lv_color_hex(0x001A00), LV_PART_MAIN);
    lv_obj_set_style_arc_color(obj10, lv_color_hex(0x00FF66), LV_PART_INDICATOR);
    lv_obj_set_style_bg_color(obj10, lv_color_hex(0x000A00), LV_PART_KNOB);

    lv_obj_t * obj11 = lv_textarea_create(parent);
    lv_textarea_set_one_line(obj11, true);
    lv_textarea_set_text(obj11, "123");
    lv_obj_set_pos(obj11, 216, 214.99996948242188);
    lv_obj_set_size(obj11, 194, 101);
    lv_obj_set_style_bg_color(obj11, lv_color_hex(0x001A00), 0);
    lv_obj_set_style_text_color(obj11, lv_color_hex(0xCCFFDD), 0);
    lv_obj_set_style_border_color(obj11, lv_color_hex(0x00FF66), 0);

    lv_obj_t * obj12 = lv_dropdown_create(parent);
    lv_dropdown_set_options(obj12, "Option 1\nOption 2\nOption 3");
    lv_obj_set_pos(obj12, 430, 12);
    lv_obj_set_size(obj12, 199, 303);
    lv_obj_set_style_bg_color(obj12, lv_color_hex(0x001A00), 0);
    lv_obj_set_style_text_color(obj12, lv_color_hex(0xCCFFDD), 0);
    lv_obj_set_style_border_color(obj12, lv_color_hex(0x00FF66), 0);
    lv_obj_set_style_border_width(obj12, 2, 0);

    lv_obj_t * obj13 = lv_obj_create(parent);
    lv_obj_set_pos(obj13, 675, 27);
    lv_obj_set_size(obj13, 336, 244);
    lv_obj_set_style_bg_color(obj13, lv_color_hex(0x001A00), 0);
    lv_obj_set_style_border_color(obj13, lv_color_hex(0x00FF66), 0);
    lv_obj_set_style_border_width(obj13, 2, 0);

    lv_obj_t * obj14 = lv_obj_create(parent);
    lv_obj_set_pos(obj14, 672, 333);
    lv_obj_set_size(obj14, 320, 220);
    lv_obj_set_style_radius(obj14, 12, 0);
    lv_obj_set_style_bg_color(obj14, lv_color_hex(0x001A00), 0);
    lv_obj_set_style_bg_opa(obj14, LV_OPA_80, 0);
    lv_obj_set_style_border_color(obj14, lv_color_hex(0x00FF66), 0);
    lv_obj_set_style_border_width(obj14, 2, 0);

}