import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useTheme } from '../../providers/themes';

const ThemedButton = (props) => {
    const getThemeFromProps = useTheme(props);
    const { title, ...theme } = getThemeFromProps;
    // console.log(theme, 'props', props);

    return (
        <Pressable
            style={{
                ...defaultPressableStyle,
                ...theme,
            }}
        >
            <View>
                <Text
                    style={{
                        ...defaultTextStyle,
                        ...theme,
                    }}
                >
                    {getThemeFromProps?.title}
                </Text>
            </View>
        </Pressable>
    );
};

export default ThemedButton;
