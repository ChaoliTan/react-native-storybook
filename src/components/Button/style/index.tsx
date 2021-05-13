import React from 'react';
import defaultTheme from '../../../providers/themes/default';

type ButtonSize = 'Big' | 'Normal' | 'Small';
export interface ButtonStyle {
    size?: ButtonSize;
    style?: React.CSSProperties;
}

export const defaultPressableStyle = {
    backgroundColor: defaultTheme.brand_primary,
    width: defaultTheme.button_width_sm,
    height: defaultTheme.button_height_sm,
    display: defaultTheme.flex,
    flexDirection: defaultTheme.row,
    justifyContent: defaultTheme.center,
    alignItems: defaultTheme.center,
    borderRadius: defaultTheme.border_radius,
    borderTopLeftRadius: defaultTheme.border_top_left_radius,
    borderTopRightRadius: defaultTheme.border_top_right_radius,
    borderBottomLeftRadius: defaultTheme.border_bottom_Left_radius,
    borderBottomRightRadius: defaultTheme.border_bottom_right_radius,
};

export const defaultTextStyle = {
    fontSize: defaultTheme.font_size_caption_sm,
    lineHeight: defaultTheme.button_line_height_sm,
    color: defaultTheme.color_text_base_inverse,
};
