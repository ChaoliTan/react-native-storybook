import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '@/style';

export type ButtonSize = 'large' | 'normal' | 'small';
export type ButtonType = 'default' | 'primary' | 'plain';
/**
 * container: 容器
 * wrapper: children的容器
 * raw: 负责跟按钮 size/type 相关的盒模型样式
 * rawText: 负责跟按钮 size/type 相关的文字样式
 */
export interface ButtonStyles {
    container: ViewStyle;
    wrapper: ViewStyle;
    // size
    normal_raw: TextStyle;
    normal_rawText: TextStyle;

    // default style
    default_raw: ViewStyle;
    default_disabled_raw: ViewStyle;
    default_rawText: TextStyle;
    default_disabled_rawText: TextStyle;
}
export default (theme: Theme) =>
    StyleSheet.create<ButtonStyles>({
        container: {
            flexDirection: 'row',
        },
        wrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: theme.radius_md,
            borderWidth: 1,
        },
        // size
        normal_raw: {
            paddingVertical: theme.h_spacing_md,
        },
        normal_rawText: {},

        // default style
        default_raw: {
            borderColor: theme.primary,
        },
        default_disabled_raw: {
            borderColor: theme.gray,
        },
        default_rawText: {
            color: theme.secondary,
        },
        default_disabled_rawText: {
            color: theme.gray,
        },
    });
