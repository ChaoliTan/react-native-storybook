import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks';
import buttonStyle, { ButtonSize, ButtonStyles, ButtonType } from './style';

type ButtonProps = {
    size?: ButtonSize;
    type?: ButtonType;
    style?: ButtonStyles;
    loading?: boolean;
    disabled?: boolean;
    children: React.ReactText | React.ReactNode;
    onPress?: (e?: any) => void;
};

const ThemedButton: React.FC<ButtonProps> = (props) => {
    const { children, size = 'normal', type = 'default', style, loading, disabled, onPress, ...restProps } = props;
    const _styles = useTheme<ButtonStyles>({ themeStyle: buttonStyle, style });

    const wrapperStyle = React.useMemo(
        () => [
            _styles.wrapper,
            _styles[`${size}_raw`],
            _styles[`${type}_raw`],
            disabled && _styles[`${type}_disabled_raw`],
            style,
        ],
        [_styles],
    );
    const textStyle = React.useMemo(
        () => [_styles[`${size}_rawText`], _styles[`${type}_rawText`], disabled && _styles[`${type}_disabled_rawText`]],
        [_styles, disabled],
    );

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={wrapperStyle}
            disabled={disabled}
            onPress={(e) => !disabled && onPress && onPress(e)}
            {...restProps}
        >
            <View style={_styles.container}>
                {/* TODO: add loading Indicator  */}
                {loading ? <Text style={textStyle}>loading...</Text> : <Text style={textStyle}>{children}</Text>}
            </View>
        </TouchableOpacity>
    );
};

export default ThemedButton;
