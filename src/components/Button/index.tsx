import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useTheme } from '../../providers/themes';
import defaultTheme from '../../providers/themes/default';

export type SizeType = {
    width: string;
};
export interface ButtonStyle {
    size?: SizeType;
    style?: React.CSSProperties;
}

export const defaultPressValue = {
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

export const defaultTextValue = {
    fontSize: defaultTheme.font_size_caption_sm,
    lineHeight: defaultTheme.button_line_height_sm,
    color: defaultTheme.color_text_base_inverse,
};

const ThemedButton = (props) => {
    const themeWithProps = useTheme(props);
    const { title, theme } = themeWithProps;

    return (
        <Pressable
            style={{
                ...defaultPressValue,
                ...theme,
            }}
        >
            <View>
                <Text
                    style={{
                        ...defaultTextValue,
                        ...theme?.text,
                    }}
                >
                    {themeWithProps?.title}
                </Text>
            </View>
        </Pressable>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    color: {},
});
